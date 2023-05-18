import { useEffect, useState } from 'react';
import Products from '../../Products/Products';
import Line from '../../components/Line/Line';
import Path from '../../components/Path/Path';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination';
import ContentLoader from 'react-content-loader';
import style from './Categories.module.sass';
import { useSelector } from 'react-redux';
const Categories = () => {
  const [categories, setCategories] = useState({ results: [] });
  const [load, setLoad] = useState(false);
  const filters = useSelector((state) => state.catalog.filters);
  const getData = (url) => {
    fetch(url + '?page=' + filters.page)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoad(true);
      });
  };

  useEffect(() => {
    getData('https://storefurniture.pythonanywhere.com/api/categories/');
  }, [filters]);
  return (
    <div className={style.catalog + ' wrap'}>
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Каталог', link: '/categories' },
        ]}
      />
      <Title title="Каталог" />
      <p className={style.description}>Более 60 категорий товаров и сотни материалов</p>
      <Line />
      <div className={style.products}>
        {load ? (
          <Products products={categories.results} catalog={true} />
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
      </div>
      <Pagination itemsPerPage={9} count={categories.count} getData={getData} />
    </div>
  );
};
export default Categories;
