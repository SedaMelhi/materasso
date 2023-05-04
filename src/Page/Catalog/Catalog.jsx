import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategoryId, setName } from './../../redux/catalogSlice/catalogSlice';

import qs from 'qs';
import Pagination from '../../components/Pagination';

import CatalogTop from './CatalogTop/CatalogTop';
import CatalogData from './CatalogData/CatalogData';

const Catalog = ({ menu }) => {
  const id = useSelector((state) => state.catalog.categoryId);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(false);
  const [subId, setSubId] = useState(false);
  const [catalog, setCatalog] = useState({ results: [] });
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const getData = (url, id, type, subId) => {
    const params = `?page=${1}&category=${id}` + (type ? `&${type}=${subId}` : '');
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
      getData('https://storefurniture.pythonanywhere.com/api/product/', params.category, false);
      setLoad(false);
      setCategory(false);
      setSubId(false);
      setUpdate(true);
    }
  }, []);

  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    if (subId) {
      getData('https://storefurniture.pythonanywhere.com/api/product/', id, 'subcategory', subId);
    } else if (update) {
      getData('https://storefurniture.pythonanywhere.com/api/product/', id, false);
    } else if (!params.categoryId) {
      setUpdate(true);
    }
    console.log(id);
  }, [id, subId, update]);

  return (
    <div className="wrap">
      <CatalogTop menu={menu} category={category} setCategory={setCategory} setSubId={setSubId} />
      <CatalogData catalog={catalog} load={load} />
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
