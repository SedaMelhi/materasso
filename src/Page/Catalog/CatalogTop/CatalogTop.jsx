import Title from '../../../components/Title/Title';
import Breadcrumbs from '../../Sale/Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Line from '../../../components/Line/Line';
import Filter from '../../../components/Filter/Filter';
import Sort from '../../../components/Sort/Sort';
import style from './../Catalog.module.sass';
const CatalogTop = ({ menu, category, setCategory }) => {
  const filters = useSelector((state) => state.catalog.filters);
  const [sort, setSort] = useState('Сначала новые');
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
