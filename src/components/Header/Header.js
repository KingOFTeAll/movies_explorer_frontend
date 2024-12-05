import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ isLogged }) {
  return (
    <header className="header">
      <Logo />
      <Navigation isLogged={ isLogged } />
    </header>
  )
};

export default Header;
