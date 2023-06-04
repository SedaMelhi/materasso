import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ContentLoader from 'react-content-loader';
import Path from '../../components/Path/Path';
import Sort from '../../components/Sort/Sort';
import Products from '../../Products/Products';
import Title from '../../components/Title/Title';
import Line from '../../components/Line/Line';
import style from './Sale.module.sass';
import qs from 'qs';
import { setPage } from '../../redux/saleSlice/saleSlice';
import { setFilters } from './../../redux/catalogSlice/catalogSlice';

const Sale = ({ menu }) => {
  const [data, setData] = useState({ results: [] });
  const [sort, setSort] = useState({ value: 'Сначала новые', id: 0 });
  const [load, setLoad] = useState(false);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const page = useSelector((state) => state.sale.page);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.catalog.filters);
  const getData = () => {
    setUpdate(false);
    let params = `?sale__gt=0&page=${page}`;
    if (filters.sort === 'ordering') {
      params += '&ordering=-date';
    }
    if (filters.sort === 'max') {
      params += '&max_price=999999999';
    }
    if (filters.sort === 'min') {
      params += '&max_price=999999999&min_price=0';
    }
    fetch('https://sadogroup.ru/api/product/' + params)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(true);
      });
    navigate(params);
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if (params.min_price) {
        setSort({
          value: 'По убыванию цены',
          id: 2,
        });
      } else if (params.max_price) {
        setSort({
          value: 'По возрастанию цены',
          id: 1,
        });
      }
      dispatch(setPage(+params.page));
      dispatch(
        setFilters({
          categoryId: false,
          name: '',
          subId: false,
          page: 1,
          sort: params.ordering
            ? 'ordering'
            : params.min_price
            ? 'min'
            : params.max_price
            ? 'max'
            : '',
        }),
      );
    } else {
      setUpdate(true);
      return () => {
        dispatch(setPage(1));
      };
    }
  }, []);
  useEffect(() => {
    setLoad(false);
    if (update) {
      getData();
    }
  }, [page, update, filters]);

  useEffect(() => {
    if (sort.id === 0) {
      setUpdate(true);
      dispatch(
        setFilters({
          categoryId: filters.categoryId,
          name: filters.name,
          subId: filters.subId,
          page: 1,
          sort: 'ordering',
        }),
      );
    }
    if (sort.id === 1) {
      setUpdate(true);
      dispatch(
        setFilters({
          categoryId: filters.categoryId,
          name: filters.name,
          subId: filters.subId,
          page: 1,
          sort: 'max',
        }),
      );
    }
    if (sort.id === 2) {
      setUpdate(true);
      dispatch(
        setFilters({
          categoryId: filters.categoryId,
          name: filters.name,
          subId: filters.subId,
          page: 1,
          sort: 'min',
        }),
      );
    }
  }, [sort]);

  return (
    <div className={style.sale + ' wrap'}>
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Sale', link: '/sale' },
        ]}
      />
      <Title title="Распродажа" />
      <Line />
      <div className={style.top}>
        <Sort sort={sort} setSort={setSort} />
      </div>
      {load ? (
        <Products products={data.results} />
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
      {data.count > 9 ? <button className={style.btn}>Показать ещё</button> : ''}

      {data.count > 9 ? (
        <Pagination
          itemsPerPage={9}
          count={data.count}
          getData={getData}
          page={page - 1}
          sale={true}
        />
      ) : (
        ''
      )}
    </div>
  );
};
export default Sale;
