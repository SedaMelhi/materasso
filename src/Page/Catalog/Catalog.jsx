import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategoryId, setName } from './../../redux/catalogSlice/catalogSlice';
import ContentLoader from 'react-content-loader';
import qs from 'qs';
import Products from '../../Products/Products';
import Title from '../../components/Title/Title';
// import Breadcrumbs from '../Sale/Breadcrumbs/Breadcrumbs';
import Line from '../../components/Line/Line';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';

import style from './Catalog.module.sass';
import Pagination from '../../components/Pagination';
import Breadcrumbs from '../Sale/Breadcrumbs/Breadcrumbs';

const Catalog = ({ menu }) => {
  const id = useSelector((state) => state.catalog.categoryId);
  const nameCategory = useSelector((state) => state.catalog.name);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const [subId, setSubId] = useState(false);
  const [catalog, setCatalog] = useState({ results: [] });
  const [category, setCategory] = useState(false);
  const [sort, setSort] = useState('Сначала новые');
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const getData = (url, id, page, type, subId) => {
    const params = `?page=${page}&category=${id}` + (type ? `&${type}=${subId}` : '');
    fetch(url + params)
      .then((res) => res.json())
      .then((data) => {
        setCatalog(data);
        setLoad(true);
      });

    navigate(params);
  };
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(setCategoryId(params.category));

      fetch('https://storefurniture.pythonanywhere.com/api/alldata/')
        .then((res) => res.json())
        .then((data) =>
          dispatch(setName(data.filter((item) => item.id === +params.category)[0].name_category)),
        );

      getData('https://storefurniture.pythonanywhere.com/api/product/', params.category, 1, false);

      setLoad(false);
      setCategory(false);
      setSubId(false);

      setUpdate(true);
    }
  }, []);

  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    if (subId) {
      getData(
        'https://storefurniture.pythonanywhere.com/api/product/',
        id,
        1,
        'subcategory',
        subId,
      );
    } else if (update) {
      getData('https://storefurniture.pythonanywhere.com/api/product/', id, 1, false);
    } else if (!params.categoryId) {
      setUpdate(true);
    }
    console.log(id);
  }, [id, subId, update]);

  return (
    <div className="wrap">
      <Title title={nameCategory} />

      {category && (
        <Breadcrumbs category={category} setCategory={setCategory} setSubId={setSubId} />
      )}
      <Line />
      <div className={style.top}>
        <Filter setCategory={setCategory} category={category} menu={menu} setSubId={setSubId} />
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {load ? (
          catalog.count > 0 ? (
            <Products products={catalog.results} />
          ) : (
            <div className={style.none}>Товара нет в наличии...</div>
          )
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
      {catalog.count > 9 && (
        <Pagination
          itemsPerPage={9}
          count={catalog.count}
          getData={getData}
          url="https://storefurniture.pythonanywhere.com/api/product/"
        />
      )}
    </div>
  );
};
export default Catalog;
