import './Portfolio.css';

function Portfolio() {
	return(
		<div className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<ul className="portfolio__list">
				<li className="portfolio__item">
					<a className="portfolio__link" href="https://dayenscode.github.io/how-to-learn/" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
				</li>
				<li className="portfolio__item">
					<a className="portfolio__link" href="https://dayenscode.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
				</li>
				<li className="portfolio__item">
					<a className="portfolio__link" href="https://mymesto.nomoredomains.rocks/" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
				</li>
			</ul>
		</div>
	)
}

export default Portfolio;