import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" aria-label="Информация о дипломном проекте" id="aboutproject">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <article className='about-project__desc-grid'>
          <h3 className='about-project__parts-title'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about-project__time-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__parts-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about-project__time-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
        <ul className="about-project__schedule-grid">
          <li className="about-project__back-time">1 неделя</li>
          <li className="about-project__front-time">4 недели</li>
          <li className="about-project__back-caption">Back-end</li>
          <li className="about-project__front-caption">Front-end</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;