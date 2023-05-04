import { setSubId } from './../../../redux/catalogSlice/catalogSlice';
import { useDispatch } from 'react-redux';
import style from './Breadcrumbs.module.sass';

const Breadcrumbs = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={style.breadcrumbs}
      onClick={() => {
        setCategory(false);
        dispatch(setSubId(false));
      }}>
      <div className={style.breadcrumb + (category === '' ? ' hidden' : '')}>{category}</div>
    </div>
  );
};
export default Breadcrumbs;
