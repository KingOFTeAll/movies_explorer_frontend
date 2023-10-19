import photo from '../../images/me.jpg';
import './AboutMe.css';
import { NavLink } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="about-me" aria-label="Информация обо мне" id= "aboutme">
      <div className="about-me__content">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__profile">
          <div className="about-me__data">
            <div className="about-me__about">
              <h3 className="about-me__name">Дмитрий</h3>
              <p className="about-me__brief">Web-developer</p>
              <p className="about-me__biography">Родился в небольшом городе Ржев. На данный момент обучаюсь на 4 курсе бакалавриата по направлению:"Управление в технических системах".
          *Дописать что нибудь умное к 3 уровню*</p>
            </div>
            <NavLink to="https://github.com/KingOFTeAll" className="about-me__link link-transparency" target="_blank">Github</NavLink>
          </div>
          <img src={photo} className="about-me__photo" alt="Моё фото" />
        </div>

      </div>
    </section>
  );
}

export default AboutMe;