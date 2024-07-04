import './AboutMe.css';
import studentPhoto from '../../../images/about-me-photo.jpg';

function AboutMe() {
	return (
		<div className="about-me" id="student">
			<h2 className="about-me__title">Студент</h2>
			<div className="about-me__info">
				<div className="about-me__bio">
					<h3 className="about-me__name">Диана</h3>
					<p className="about-me__occupation">Фронтенд-разработчик, 23 года</p>
					<p className="about-me__description">Я живу в Санкт-Петербурге, закончила факультет дизайна СПбГУПТД. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. Завершаю курс по веб-разработке. Нахожусь в поисках работы по специальности.</p>
					<a href="https://github.com/DayensCode" className="about-me__github" target="_blank" rel="noopener noreferrer">Github</a>
				</div>
				<img alt="Фотография студента" className="about-me__photo" src={studentPhoto}/>
			</div>
		</div>
	)
}

export default AboutMe;