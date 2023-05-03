import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Sale.module.sass';

import Filter from '../../components/Filter/Filter';
import Path from '../../components/Path/Path';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Sort from '../../components/Sort/Sort';
import Products from '../../Products/Products';
import Title from '../../components/Title/Title';
import Line from '../../components/Line/Line';

const Sale = ({ menu }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('Сначала новые');
  const id = useSelector((state) => state.catalog.categoryId);
  useEffect(() => {
    fetch('https://storefurniture.pythonanywhere.com/api/product/')
      .then((res) => res.json())
      .then((data) => setProducts(data.results.filter((item) => item.sale > 0)));
  }, []);
  useEffect(() => {
    fetch('https://storefurniture.pythonanywhere.com/api/product/?category=' + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.results.filter((item) => item.sale > 0)));
  }, [id]);
  return (
    <div className={style.sale + ' wrap'}>
      <Path />
      <Title title="Распродажа" />
      {/* <Breadcrumbs category={category} setCategory={setCategory} /> */}
      <Line />
      <div className={style.top}>
        {/* <Filter setCategory={setCategory} category={category} menu={menu} sale={true} /> */}
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
