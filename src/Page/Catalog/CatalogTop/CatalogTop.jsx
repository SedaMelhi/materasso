import Title from '../../../components/Title/Title';
import Breadcrumbs from '../../Sale/Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Line from '../../../components/Line/Line';
import Filter from '../../../components/Filter/Filter';
import Sort from '../../../components/Sort/Sort';
import style from './../Catalog.module.sass';
import qs from 'qs';
import { setFilters } from '../../../redux/catalogSlice/catalogSlice';
const CatalogTop = ({ menu, category, setCategory }) => {
  const filters = useSelector((state) => state.catalog.filters);
  const [sort, setSort] = useState({
    value: 'Сначала новые',
    id: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (sort.id === 0) {
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
    }
  }, []);
  return (
    <div>
      <Title title={filters.name} />
      {category && filters.subId && <Breadcrumbs category={category} setCategory={setCategory} />}
      <Line />
      <div className={style.top}>
        <Filter setCategory={setCategory} category={category} menu={menu} />
        <Sort sort={sort} setSort={setSort} />
      </div>
    </div>
  );
};
export default CatalogTop;
