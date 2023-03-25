import style from './Nav.module.sass';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={style.nav__wrap}>
      <div className="wrap">
        <div className={style.nav}>
          <div className={style.menu}>
            <Link to="/" className={style.menu__item}>
              Покупателям
            </Link>
            <Link to="/" className={style.menu__item}>
              Партнерам
            </Link>
            <Link to="/" className={style.menu__item}>
              О нас
            </Link>
            <Link to="/" className={style.menu__item}>
              Контакты
            </Link>
          </div>
          <div className={style.menu__end}>
            <a href="tel:+79298981565" className={style.phone}>
              + 7 (929) 898 - 15 - 65
            </a>
            <div className={style.select}>Грозный</div>
            <button className={style.button}>Заказать звонок</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
