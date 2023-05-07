import { useEffect, useMemo, useState } from 'react';
import { setFilters } from './../../redux/catalogSlice/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './Menu.module.sass';

const MenuMobile = ({ menuState, catalog, setMenuOpen }) => {
  const data = useMemo(
    () => [
      {
        name: 'Каталог',
        link: '/catalog',
        items: [],
      },
      {
        name: 'Коллекции',
        link: '/',
        items: [
          { name: 'Ницца', link: '/' },
          { name: 'Бруклин', link: '/' },
          { name: 'Венеция', link: '/' },
          { name: 'Монте-Карло', link: '/' },
          { name: 'Тиволи', link: '/' },
          { name: 'Альба', link: '/' },
          { name: 'Барселона', link: '/' },
          { name: 'Верона', link: '/' },
          { name: 'Сидней', link: '/' },
          { name: 'Палермо', link: '/' },
          { name: 'Неаполь', link: '/' },
          { name: 'Тиволи wood', link: '/' },
        ],
      },
      { name: 'Sale', link: '/sale' },
      // { name: 'Спальни', link: '/' },
      // { name: 'Матрасы', link: '/' },
      // { name: 'Мягкая мебель', link: '/' },
      // { name: 'Обеденные группы', link: '/' },
      { name: 'Покупателям', link: '/' },
      { name: 'Партнерам', link: '/' },
      { name: 'О нас', link: '/' },
      { name: 'Контакты', link: '/' },
    ],
    [],
  );
  const filters = useSelector((state) => state.catalog.filters);
  const [menu, setMenu] = useState(data);
  const [title, setTitle] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);
  const dispatch = useDispatch();
  const onMenuClick = (item) => {
    setTitle(item.name);
    setMenuItems(item.items);
  };
  const onTitleClick = () => {
    setTitle(false);
    setMenuItems(menu);
  };

  useEffect(() => {
    setMenuItems(menu);
  }, [menu]);
  useEffect(() => {
    catalog.forEach(({ id, name, show_catalog, show_menu, products }) => {
      let obj = {};
      if (show_catalog) {
        obj.name = name;
        obj.id = id;
        if (products.length > 1) {
          obj.items = [];
          products.forEach((item) => {
            obj.items.push({
              name: item.name_category,
              id: item.id,
            });
          });
        }
        data[0].items.push(obj);
      }
    });
    setMenu(data);
  }, [data, catalog]);
  useEffect(() => {}, [filters, menu]);
  const changeId = (id, name) => {
    dispatch(setFilters({ categoryId: id, name: name, subId: false, page: 1 }));
  };
  return (
    <div className={style.menu__wrap}>
      <div className={menuState ? style.open : ''}>
        <div className={style.menu__mobile}>
          {title && (
            <div className={style.menu__title} onClick={onTitleClick}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#131F2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {title}
              <div></div>
            </div>
          )}
          <div className="wrap">
            <div className={style.menu}>
              {menuItems.map((item, i) => (
                <Link
                  to={item.link ? item.link : '/catalog'}
                  className={style.menu__item}
                  onClick={
                    item.items
                      ? () => onMenuClick(item)
                      : () => {
                          setMenuOpen(false);
                          item.id && changeId(item.id, item.name);
                        }
                  }
                  key={i}>
                  {item.name}
                  {item.items ? (
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 13L7 7L1 1"
                        stroke="#131F2E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    ''
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuMobile;
