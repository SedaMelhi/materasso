import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.module.sass';
const MenuMobile = ({ menuState }) => {
  const menu = [
    {
      name: 'Каталог',
      link: '/',
      items: [
        { name: 'Диваны', link: '/' },
        { name: 'Кровати и изголовья', link: '/' },
        { name: 'Кресла и стулья', link: '/' },
        { name: 'Столы и консоли', link: '/' },
        { name: 'Диваны', link: '/' },
        { name: 'Тумбочки и комоды', link: '/' },
        { name: 'Шкафы и витрины', link: '/' },
        { name: 'Текстиль', link: '/' },
        { name: 'Пуфы и банкетки', link: '/' },
        { name: 'Уличная мебель', link: '/' },
        { name: 'Прихожая', link: '/' },
        { name: 'Свет', link: '/' },
        { name: 'Зеркала', link: '/' },
      ],
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
    { name: 'Sale', link: '/' },
    { name: 'Спальни', link: '/' },
    { name: 'Матрасы', link: '/' },
    { name: 'Мягкая мебель', link: '/' },
    { name: 'Обеденные группы', link: '/' },
    { name: 'Покупателям', link: '/' },
    { name: 'Партнерам', link: '/' },
    { name: 'О нас', link: '/' },
    { name: 'Контакты', link: '/' },
  ];
  const [title, setTitle] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);

  const onMenuClick = (item) => {
    setTitle(item.name);
    setMenuItems(item.items);
  };
  const onTitleClick = () => {
    setTitle(false);
    setMenuItems(menu);
  };
  return (
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
                to={item.link}
                className={style.menu__item}
                onClick={item.items ? () => onMenuClick(item) : ''}
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
  );
};
export default MenuMobile;
