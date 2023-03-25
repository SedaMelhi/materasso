import { Link } from 'react-router-dom';
import style from './Menu.module.sass';
const Menu = () => {
  return (
    <div className="wrap">
      <div className={style.menu__wrap}>
        <div className={style.menu}>
          <Link to="/" className={style.menu__item}>
            Каталог
          </Link>
          <Link to="/" className={style.menu__item}>
            Коллекции
          </Link>
          <Link to="/" className={`${style.menu__item} ${style.menu__item_spec}`}>
            Sale
          </Link>
          <Link to="/" className={style.menu__item}>
            Спальни
          </Link>
          <Link to="/" className={style.menu__item}>
            Матрасы
          </Link>
          <Link to="/" className={style.menu__item}>
            Мягкая мебель
          </Link>
          <Link to="/" className={style.menu__item}>
            Обеденные группы
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Menu;
