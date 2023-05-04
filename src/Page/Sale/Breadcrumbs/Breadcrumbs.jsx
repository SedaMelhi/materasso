import { setFilters } from './../../../redux/catalogSlice/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './Breadcrumbs.module.sass';

const Breadcrumbs = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.catalog.filters);
  return (
    <div
      className={style.breadcrumbs}
      onClick={() => {
        setCategory(false);
        dispatch(
          setFilters({ categoryId: filters.categoryId, name: filters.name, subId: false, page: 1 }),
        );
      }}>
      <div className={style.breadcrumb + (category === '' ? ' hidden' : '')}>{category}</div>
    </div>
  );
};
export default Breadcrumbs;
