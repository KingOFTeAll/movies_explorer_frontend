import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { regexEmail } from "../../config/config";

function Profile({ isLogged, onEdit, onLogout, onModal }) {
  const profileContext = useContext(CurrentUserContext)
  const [values, setValues] = useState({ name: profileContext.name || "", email: profileContext.email || "" });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);
  const [nameValidation, setNameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [editButton, setEditButton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [totalDisabled, setTotalDisabled] = useState(false)

  const disabledButton = nameValidation && emailValidation;

  function handleAvailableButton() {
    setDisabledInput(false);
    setEditButton(true);
  }

  function handleEditProfile() {
    setDisabledInput(true);
    if (profileContext.name === values.name && profileContext.email === values.email) return
    return onEdit(values.name, values.email)
      .catch((err) => {
        switch (err) {
          case "Ошибка в edit: 409":
            onModal({ isOpen: true, statusOk: false, text: "Пользователь с таким email уже существует." });
            break;
          default:
            onModal({ isOpen: true, statusOk: false, text: "При регистрации пользователя произошла ошибка." });
            break;
        }
      })
      .finally(() => {
        setEditButton(false);
        setDisabledInput(true);
      });
  }

  const handleChangeName = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setNameError(target.validationMessage);
    setNameValidation(target.validity.valid);
  };

  const handleChangeEmail = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setEmailError(target.validationMessage);
    setEmailValidation(target.validity.valid);
  };

  const isEmailValid = regexEmail.test(values.email);

  useEffect(() => {
    const isAvailable = isButtonDisabled || !disabledButton || !isEmailValid
    setTotalDisabled(isAvailable)
  }, [values, isButtonDisabled, disabledButton, isEmailValid])


  useEffect(() => {
    if (profileContext.name === values.name && profileContext.email === values.email) {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [values, profileContext])


  return (
    <>
      <Header isLogged={isLogged} />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${profileContext.name}!`}</h2>
        <form className="profile__form">
          <label className="profile__container">
            <span className="profile__label">Имя</span>
            <input
              className="profile__input"
              type="text"
              name="name"
              placeholder="Введите имя"
              minLength={2}
              maxLength={30}
              required
              value={values.name || ""}
              onChange={handleChangeName}
              disabled={disabledInput}
            />
          </label>
          <span className={nameError === "undefined" ? "profile__error-hidden" : "profile__error"}>{nameError || ""}</span>
          <div className="profile__line" />
          <label className="profile__container">
            <span className="profile__label">E-mail</span>
            <input
              className="profile__input"
              type="email"
              name="email"
              placeholder="Введите email"
              minLength={2}
              maxLength={30}
              required
              value={values.email || ""}
              onChange={handleChangeEmail}
              disabled={disabledInput}
            />
          </label>
          <span className={emailError === "undefined" ? "profile__error-hidden" : "profile__error"}>{emailError || ""}</span>
        </form>
        <div className="profile__buttons">
          {editButton
            ?
            <>
              <span className="profile__submit-error profile__submit-error_hidden">При обновлении профиля произошла ошибка</span>
              <button disabled={totalDisabled} className="profile__save" type="button" onClick={handleEditProfile}>Сохранить</button>
            </>
            :
            <button className="profile__submit" form="profile__form" type="submit" onClick={handleAvailableButton}>Редактировать</button>
          }
          <button
            className={editButton ? "profile__logout profile__logout_hidden" : "profile__logout"}
            type="button"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
