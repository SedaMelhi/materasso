import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategoryId, setName } from './../../redux/catalogSlice/catalogSlice';

import DropMenu from './DropMenu/DropMenu';

import style from './Menu.module.sass';

const Menu = ({ menu }) => {
  const dispatch = useDispatch();

  return (
    <div className="wrap">
      <div className={style.menu__wrap}>
        <div className={style.menu}>
          <div className={style.catalog}>
            <Link to="/categories" className={style.menu__item}>
              Каталог
            </Link>
            <DropMenu menu={menu} catalog={true} />
          </div>

          <Link to="/" className={style.menu__item}>
            Коллекции
          </Link>
          <Link to="/sale" className={`${style.menu__item} ${style.menu__item_spec}`}>
            Sale
          </Link>
          {menu.map(
            ({ name, id, show_menu, products }) =>
              show_menu && (
                <div className={`${style.catalog} ${style.dropdown__small_wrap}`} key={id}>
                  {products.length > 1 ? (
                    <div className={style.menu__item}>
                      {name} <DropMenu menu={products} name={name} />
                    </div>
                  ) : (
                    products &&
                    products.map((item) => (
                      <Link
                        key={id}
                        to="/catalog"
                        className={style.menu__item}
                        onClick={() => {
                          dispatch(setCategoryId(item.id));
                          dispatch(setName(item.name_category));
                        }}>
                        {name}
                      </Link>
                    ))
                  )}
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
