import style from './Breadcrumbs.module.sass';
const Breadcrumbs = ({ category, setCategory, setSubId }) => {
  return (
    <div
      className={style.breadcrumbs}
      onClick={() => {
        setCategory(false);
        setSubId(false);
      }}>
      <div className={style.breadcrumb + (category === '' ? ' hidden' : '')}>{category}</div>
    </div>
  );
};
export default Breadcrumbs;
