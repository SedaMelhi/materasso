import Products from '../Products/Products';
import Line from '../components/Line/Line';
import Path from '../components/Path/Path';
import Title from '../components/Title/Title';

import style from './Catalog.module.sass';
const Catalog = () => {
  const products = [
    {
      title: 'Диваны',
      img: 'img/products/product1.png',
      id: 1,
    },
    {
      title: 'Кровати и изголовья',
      img: 'img/products/product2.png',
      id: 2,
    },
    {
      title: 'Кресла и стулья',
      img: 'img/products/product3.png',
      id: 3,
    },
    {
      title: 'Столы и консоли',
      img: 'img/products/product4.png',
      id: 4,
    },
    {
      title: 'Тумбочки и комоды',
      img: 'img/products/product5.png',
      id: 5,
    },
    {
      title: 'Шкафы и витрины',
      img: 'img/products/product6.png',
      id: 6,
    },
    {
      title: 'Текстиль',
      img: 'img/products/product7.png',
      id: 7,
    },
    {
      title: 'Пуфы и банкетки',
      img: 'img/products/product8.png',
      id: 8,
    },
    {
      title: 'Уличная мебель',
      img: 'img/products/product9.png',
      id: 9,
    },
  ];
  return (
    <div className={style.catalog + ' wrap'}>
      <Path />
      <Title title="Каталог" />
      <p className={style.description}>Более 60 категорий товаров и сотни материалов</p>
      <Line />
      <div className={style.products}>
        <Products products={products} />
      </div>
    </div>
  );
};
export default Catalog;
