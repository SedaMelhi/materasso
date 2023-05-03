import { Link } from 'react-router-dom';
import style from './../Menu.module.sass';
import { useDispatch } from 'react-redux';
import { setCategoryId, setName } from './../../../redux/catalogSlice/catalogSlice';
const DropMenu = ({ menu, catalog, name }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.dropdown__wrap}>
      {catalog ? (
        <div className={style.dropdown}>
          {menu.map(
            ({ name, id, show_catalog, products }) =>
              show_catalog && (
                <div className={style.dropdown__item} key={id}>
                  <div className={style.dropdown__title}>{name}</div>
                  {products &&
                    products.map((item) => (
                      <div
                        className={style.dropdown__menu}
                        key={item.id}
                        onClick={() => {
                          dispatch(setCategoryId(item.id));
                          dispatch(setName(item.name_category));
                        }}>
                        <Link to="/catalog">{item.name_category}</Link>
                      </div>
                    ))}
                </div>
              ),
          )}
        </div>
      ) : (
        <div className={style.dropdown + ' ' + style.dropdown__small}>
          {menu.map(({ id, name_category }) => (
            <div
              className={style.dropdown__menu}
              key={id}
              onClick={() => {
                dispatch(setCategoryId(id));
                dispatch(setName(name_category));
              }}>
              <Link to="/catalog">{name_category}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropMenu;
