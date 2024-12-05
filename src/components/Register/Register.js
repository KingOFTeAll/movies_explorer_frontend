import "./Register.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { mainApi } from "../../utils/MainApi";
import { regexEmail } from "../../config/config";

function Register({ onLogin, onModal }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "erer@wewe.ru",
    password: "",
    nameError: false,
    emailError: false,
    passwordError: false,
    nameErrorMessage: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });

  const handleChange = ({ target }) => {
    const { name, value, validationMessage, validity } = target;
    setValues({
      ...values,
      [name]: value,
      [`${name}Error`]: validity.valid,
      [`${name}ErrorMessage`]: validationMessage,
    });
  };

  const isValid = regexEmail.test(values.email);

  useEffect(() => {
    const disabled =
      !values.nameError ||
      !values.emailError ||
      !values.passwordError ||
      !isValid;
    setIsButtonDisabled(disabled);
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    mainApi
      .signup({ name, email, password })
      .then(() => {
        onLogin({ email, password });
      })
      .catch((err) => {
        switch (err) {
          case "Ошибка в signup: 409":
            onModal({ isOpen: true, statusOk: false, text: "Пользователь с таким email уже существует." });
            break;
          default:
            onModal({ isOpen: true, statusOk: false, text: "При регистрации пользователя произошла ошибка." });
            break;
        }
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  }

  return (
    <section className="register">
      <Logo />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form
        className="register__form"
        autoComplete="off"
        action=""
        name="register"
        onSubmit={handleSubmit}
      >
        <label className="register__label">
          Имя
          <input
            className="register__input"
            type="text"
            name="name"
            required
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            disabled={isDisabledInput}
            onChange={handleChange}
            value={values.name || ""}
          ></input>
          <span className="register__error">
            {values.nameErrorMessage.length > 0 ? values.nameErrorMessage : ""}
          </span>
        </label>
        <label className="register__label">
          E-mail
          <input
            className="register__input"
            type="email"
            name="email"
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            disabled={isDisabledInput}
            onChange={handleChange}
          ></input>
          <span className="register__error">
            {values.emailErrorMessage.length > 0
              ? values.emailErrorMessage
              : !isValid
                ? "Некорректный формат email"
                : ""}
          </span>
        </label>
        <label className="register__label">
          Пароль
          <input
            className="register__input"
            type="password"
            name="password"
            required
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            disabled={isDisabledInput}
            onChange={handleChange}
            value={values.password || ""}
          ></input>
          <span className="register__error">
            {values.passwordErrorMessage.length > 0
              ? values.passwordErrorMessage
              : ""}
          </span>
        </label>
        <button
          className="register__submit"
          disabled={isButtonDisabled}
          type="submit"
        >
          Зарегистрироваться
        </button>
        <p className="register__login-text">
          Уже зарегистрированы?
          <Link className="register__login-link" to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
