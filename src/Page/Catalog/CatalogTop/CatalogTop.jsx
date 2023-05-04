import Title from '../../../components/Title/Title';
import Breadcrumbs from '../../Sale/Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Line from '../../../components/Line/Line';
import Filter from '../../../components/Filter/Filter';
import Sort from '../../../components/Sort/Sort';
import style from './../Catalog.module.sass';
const CatalogTop = ({ menu, category, setCategory, setSubId }) => {
  const nameCategory = useSelector((state) => state.catalog.name);
  const [sort, setSort] = useState('Сначала новые');
  return (
    <div>
      <Title title={nameCategory} />
      {category && (
        <Breadcrumbs category={category} setCategory={setCategory} setSubId={setSubId} />
      )}
      <Line />
      <div className={style.top}>
        <Filter setCategory={setCategory} category={category} menu={menu} setSubId={setSubId} />
        <Sort sort={sort} setSort={setSort} />
      </div>
    </div>
  );
};
export default CatalogTop;
