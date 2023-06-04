import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from './../../redux/catalogSlice/catalogSlice';
import Path from './../../components/Path/Path';
import qs from 'qs';
import Pagination from '../../components/Pagination';
import CatalogTop from './CatalogTop/CatalogTop';
import CatalogData from './CatalogData/CatalogData';
import style from './Catalog.module.sass';
const Catalog = ({ menu }) => {
  const filters = useSelector((state) => state.catalog.filters);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState(false);
  const [catalog, setCatalog] = useState({ results: [] });
  const [load, setLoad] = useState(false);
  const getData = () => {
    if (filters.categoryId !== false) {
      let params =
        `?page=${filters.page}&category=${filters.categoryId}` +
        (filters.subId !== false ? `&subcategory=${filters.subId}` : '');
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
          setCatalog(data);
          setLoad(true);
        });
      navigate(params);
    }
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      fetch('https://sadogroup.ru/api/alldata/')
        .then((res) => res.json())
        .then((data) => {
          const name = data.filter((item) => item.id === +params.category)[0].name_category;
          dispatch(
            setFilters({
              categoryId: +params.category,
              name: name,
              subId: +params.subcategory ? params.subcategory : false,
              page: +params.page ? params.page : 1,
              sort: params.ordering
                ? 'ordering'
                : params.min_price
                ? 'min'
                : params.max_price
                ? 'max'
                : '',
            }),
          );
        });
      getData();
      setLoad(false);
      setCategory(false);
    } else {
      navigate('/categories');
    }
  }, []);
  useEffect(() => {
    setLoad(false);
    !filters.subId && setCategory(false);
    getData();
  }, [filters]);
  return (
    <div className="wrap">
      <div className={style.path}>
        <Path
          path={[
            { text: 'Главная', link: '/' },
            { text: 'Каталог', link: '/categories' },
            { text: filters.name, link: `?page=1&category=${filters.categoryId}` },
          ]}
        />
      </div>
      <CatalogTop menu={menu} category={category} setCategory={setCategory} />
      <CatalogData catalog={catalog} load={load} />
      {catalog.count > 9 ? (
        <Pagination
          itemsPerPage={9}
          count={catalog.count}
          page={filters.page - 1}
          getData={getData}
          url="https://sadogroup.ru/api/product/"
        />
      ) : (
        ''
      )}
    </div>
  );
};
export default Catalog;
