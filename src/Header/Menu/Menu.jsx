import { Link } from 'react-router-dom';
import style from './Menu.module.sass';
import { useState } from 'react';
const Menu = () => {
  const [menu, setMenu] = useState([]);
  fetch('http://storefurniture.pythonanywhere.com/api/categories/')
    .then((res) => res.json())
    .then((data) => setMenu(data.results));

  return (
    <div className="wrap">
      <div className={style.menu__wrap}>
        <div className={style.menu}>
          <div className={style.catalog}>
            <Link to="/catalog" className={style.menu__item}>
              Каталог
            </Link>
            <div className={style.dropdown__wrap}>
              <div className={style.dropdown}>
                {menu.map(({ name, subcategories, id }) => (
                  <div className={style.dropdown__item} key={id}>
                    <div className={style.dropdown__title}>{name}</div>
                    {subcategories.map(({ name, id }) => (
                      <div className={style.dropdown__menu} key={id}>
                        <Link to="/">{name}</Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/" className={style.menu__item}>
            Коллекции
          </Link>
          <Link to="/sale" className={`${style.menu__item} ${style.menu__item_spec}`}>
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

// [
//   {
//     title: 'кровати',
//     items: [
//       'Кровати деревянные',
//       'Кровати Мягкие',
//       'Кровати деревянные с мягким изголовьем',
//       'Основания ортопедические и подъемные механизмы кроватей',
//       'Матрасы',
//     ],
//   },
//   {
//     title: 'комоды и тумбы',
//     items: ['Тумбы прикроватные', 'Комоды', 'Тумбы ТВ', 'Туалетные столы', 'Консоли'],
//   },
//   {
//     title: 'шкафы',
//     items: ['Гардеробы', 'Витрины', 'Библиотеки', 'Стеллажи'],
//   },
//   {
//     title: 'мягкая мебель',
//     items: ['Диваны', 'Кресла', 'Пуфы и банкетки'],
//   },
//   {
//     title: 'столы и стулья',
//     items: ['Столы письменные', 'Столики', 'Столы обеденные', 'Стулья'],
//   },
//   {
//     title: 'кухни',
//     items: ['Кухни классические', 'Кухни современные'],
//   },
//   {
//     title: 'зеркала',
//     items: ['Зеркала Настенные', 'Зеркала Напольные'],
//   },
//   {
//     title: 'прихожие',
//     items: ['Панели для прихожей'],
//   },
//   {
//     title: 'акссесуары',
//     items: ['Дополнительные элементы'],
//   },
// ]
