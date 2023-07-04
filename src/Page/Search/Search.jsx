import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './../../redux/searchSlice/searchSlice';
import Path from './../../components/Path/Path';
import Title from './../../components/Title/Title';
import Line from './../../components/Line/Line';
import Pagination from '../../components/Pagination';
import CatalogData from './../Catalog/CatalogData/CatalogData';

import style from './../Catalog/Catalog.module.sass';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const [load, setLoad] = useState(true);
  const [catalog, setCatalog] = useState({ results: [] });
  const search = useSelector((state) => state.search.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getData = () => {
    if (search.value.trim().length > 0) {
      fetch('https://sadogroup.ru/api/product/?name__icontains=' + search.value)
        .then((res) => res.json())
        .then((data) => {
          setCatalog(data);
          setLoad(true);
        });
      navigate('?name__icontains=' + search.value);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="wrap">
      <div className={style.path}>
        <Path
          path={[
            { text: 'Главная', link: '/' },
            { text: 'Поиск', link: '/search' },
          ]}
        />
      </div>
      <Title title="Результаты поиска" />
      <Line />

      <div className="search">
        <CatalogData catalog={catalog} load={load} />
      </div>
    </div>
  );
};
export default Search;
