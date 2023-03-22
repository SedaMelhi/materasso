import Cart from './Cart/Cart';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import logo from './../assets/img/logo.svg';
import style from './Header.module.sass';
import Menu from './Menu/Menu';
const Header = () => {
  return (
    <header>
      <Nav />
      <div className={'wrap ' + style.header}>
        <div className="phone">
          <a href="tel:+79298981565">+ 7 (929) 898 - 15 - 65</a>
        </div>
        <div className="logo">
          <img src={logo} alt="materasso" />
        </div>
        <div className={style.header__end}>
          <Cart />
          <Search />
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
