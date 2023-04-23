import Cart from './Cart/Cart';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import MenuMobile from './MenuMobile/MenuMobile';

import logo from './../assets/img/logo.svg';

import style from './Header.module.sass';

import { useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Nav />
      <div className={style.header}>
        <div className={style.nav__wrap}>
          <Hamburger setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <div className={style.phone}>
            <a href="tel:+79298981565">+ 7 (929) 898 - 15 - 65</a>
          </div>
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="materasso" />
            </Link>
          </div>
          <div className={style.header__end}>
            <Cart />
            <Search />
          </div>
        </div>
        <MenuMobile menuState={menuOpen} />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
