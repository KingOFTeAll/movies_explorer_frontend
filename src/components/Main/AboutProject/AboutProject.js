import './AboutProject.css';

function AboutProject() {
	return (
		<div className="about" id="about">
			<h2 className="about__title">О проекте</h2>
			<div className="about__plan">
				<div className="about__plan-column">
					<h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
					<p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</div>
				<div className="about__plan-column">
					<h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
					<p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</div>
			</div>
			<div className="about__progress">
				<div className="about__progress-column about__progress-column_type_first">
					<span className="about__week about__week_type_first">1 неделя</span>
					<span className="about__week-title">Back-end</span>
				</div>
				<div className="about__progress-column about__progress-column_type_other">
					<span className="about__week about__week_type_other">4 недели</span>
					<span className="about__week-title">Front-end</span>
				</div>
			</div>
		</div>
	)
}

export default AboutProject;