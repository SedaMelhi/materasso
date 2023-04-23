import style from './Breadcrumbs.module.sass';
const Breadcrumbs = ({ category }) => {
  return (
    <div className={style.breadcrumbs}>
      <div className={style.breadcrumb + (category === '' ? ' hidden' : '')}>{category}</div>
    </div>
  );
};
export default Breadcrumbs;
