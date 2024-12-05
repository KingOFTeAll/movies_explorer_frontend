import { useState } from 'react';
import './Navigation.css';
import LoginRegisterMenu from './LoginRegisterMenu/LoginRegisterMenu';
import LoggedNavigation from './LoggedNavigation/LoggedNavigation';
import BurgerButton from './BurgerButton/BurgerButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Navigation({ isLogged }) {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function handleOpenBurgerMenu() {
    setIsBurgerOpened(true);
  }
  function handleCloseBurgerMenu() {
    setIsBurgerOpened(false);
  }
  return (
    <nav className={ isLogged ? "navigation navigation_logged" : "navigation"}>
      { isLogged
        ? <>
            <LoggedNavigation />
            <BurgerButton onClick={handleOpenBurgerMenu}/>
          </>
        : <LoginRegisterMenu />
      }
      <BurgerMenu isOpened={isBurgerOpened} closeBurger={handleCloseBurgerMenu}/>
    </nav>
  )
}

export default Navigation;
