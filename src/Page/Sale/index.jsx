import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
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
  const [load, setLoad] = useState(false);
  const id = useSelector((state) => state.catalog.categoryId);
  useEffect(() => {
    fetch('https://storefurniture.pythonanywhere.com/api/product/')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results.filter((item) => item.sale > 0));
        setLoad(true);
      });
  }, []);

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

      {load ? (
        <Products products={products} />
      ) : (
        <div className={style.skeleton}>
          {[...new Array(9)].map((item, i) => (
            <ContentLoader
              speed={2}
              key={i}
              width={'100%'}
              height={'100%'}
              viewBox="0 0 420 505"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="0" y="0" rx="16" ry="16" width="417" height="502" />
              <rect x="31" y="51" rx="0" ry="0" width="166" height="114" />
            </ContentLoader>
          ))}
        </div>
      )}
      <button className={style.btn}>Показать ещё</button>
      <div className={style.count}>
        <span className={style.count__show}>33</span> /{' '}
        <span className={style.count__all}>108</span> товаров
      </div>
    </div>
  );
};
export default Sale;
