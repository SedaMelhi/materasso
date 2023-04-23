import style from './Title.module.sass';
const Title = ({ title }) => {
  return <h2 className={style.title}>{title}</h2>;
};
export default Title;
