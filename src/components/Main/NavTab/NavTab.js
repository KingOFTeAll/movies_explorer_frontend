import './NavTab.css';

function NavTab() {
	return (
		<nav className="navtab">
			<ul className="navtab__list">
				<li className="navtab__item">
					<a href="#about" className="navtab__link">О проекте</a>
				</li>
				<li className="navtab__item">
					<a href="#tech" className="navtab__link">Технологии</a>
				</li>
				<li className="navtab__item">
					<a href="#student" className="navtab__link">Студент</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavTab;