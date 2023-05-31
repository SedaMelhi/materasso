import { Link } from 'react-router-dom';
import style from './../Menu.module.sass';
import { useDispatch } from 'react-redux';
import { setFilters } from './../../../redux/catalogSlice/catalogSlice';
import { setPage } from '../../../redux/saleSlice/saleSlice';
const DropMenu = ({ menu, catalog, name }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.dropdown__wrap}>
      {catalog ? (
        <div className={style.dropdown}>
          {menu.map(({ name, id, show_catalog, products }) =>
            show_catalog ? (
              <div className={style.dropdown__item} key={id}>
                <div className={style.dropdown__title}>{name}</div>
                {products
                  ? products.map((item) => (
                      <div
                        className={style.dropdown__menu}
                        key={item.id}
                        onClick={() => {
                          dispatch(
                            setFilters({
                              categoryId: item.id,
                              name: item.name_category,
                              subId: false,
                              page: 1,
                            }),
                          );
                          dispatch(setPage(1));
                        }}>
                        <Link to="/catalog">{item.name_category}</Link>
                      </div>
                    ))
                  : ''}
              </div>
            ) : (
              ''
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
                dispatch(
                  setFilters({
                    categoryId: id,
                    name: name_category,
                    subId: false,
                    page: 1,
                  }),
                );
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
