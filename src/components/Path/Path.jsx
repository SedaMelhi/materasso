import { Link } from 'react-router-dom';
import style from './Path.module.sass';
const Path = ({ path }) => {
  return (
    <div className={style.path}>
      {path.map(({ text, link }, i) => (
        <Link to={link} className={style.path__item} key={i}>
          {text}
        </Link>
      ))}
    </div>
  );
};
export default Path;
