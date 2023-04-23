import { useState } from 'react';

import style from './Sale.module.sass';

import Filter from '../../components/Filter/Filter';
import Path from '../../components/Path/Path';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Sort from '../../components/Sort/Sort';
import Products from '../../Products/Products';
import Title from '../../components/Title/Title';
import Line from '../../components/Line/Line';

const Sale = () => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('Сначала новые');
  const products = [
    {
      sale: 25,
      img: 'img/products/product1.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 1,
    },
    {
      sale: 25,
      img: 'img/products/product2.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 2,
    },
    {
      sale: 25,
      img: 'img/products/product3.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 3,
    },
    {
      sale: 25,
      img: 'img/products/product4.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 4,
    },
    {
      sale: 25,
      img: 'img/products/product5.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 5,
    },
    {
      sale: 25,
      img: 'img/products/product6.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 6,
    },
    {
      sale: 25,
      img: 'img/products/product7.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 7,
    },
    {
      sale: 25,
      img: 'img/products/product8.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 8,
    },
    {
      sale: 25,
      img: 'img/products/product9.png',
      type: 'Угловые диваны',
      price: '134 900 ₽',
      subtitle: 'Диван Альби угловой правый черно-белое букле',
      id: 9,
    },
  ];
  fetch('http://storefurniture.pythonanywhere.com/api/product/?category=1')
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div className={style.sale + ' wrap'}>
      <Path />
      <Title title="Распродажа" />
      <Breadcrumbs category={category} setCategory={setCategory} />
      <Line />
      <div className={style.top}>
        <Filter setCategory={setCategory} category={category} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <Products products={products} />
      <button className={style.btn}>Показать ещё</button>
      <div className={style.count}>
        <span className={style.count__show}>33</span> /{' '}
        <span className={style.count__all}>108</span> товаров
      </div>
    </div>
  );
};
export default Sale;
