import './Techs.css';

function Techs() {
	return (
		<div className="techs" id="tech">
			<h2 className="techs__title">Технологии</h2>
			<h3 className="tech__subtitle">7 технологий</h3>
			<p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
			<div className="tech__cards">
				<div className="tech__card">HTML</div>
				<div className="tech__card">CSS</div>
				<div className="tech__card">JS</div>
				<div className="tech__card">React</div>
				<div className="tech__card">Git</div>
				<div className="tech__card">Express.js</div>
				<div className="tech__card">mongoDB</div>
			</div>
		</div>
	)
}

export default Techs;