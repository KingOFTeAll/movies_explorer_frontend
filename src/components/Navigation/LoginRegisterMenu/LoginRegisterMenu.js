import { NavLink } from 'react-router-dom';
import './LoginRegisterMenu.css';

function LoginRegisterMenu() {
	return (
		<ul className="login-register-menu">
			<li className="login-register-menu__item">
				<NavLink className="login-register-menu__link" to="/signup">Регистрация</NavLink>
			</li>
			<li className="login-register-menu__item">
				<NavLink className="login-register-menu__link login-register-menu__link_type_login" to="/signin">Войти</NavLink>
			</li>
		</ul>
	)
}

export default LoginRegisterMenu;