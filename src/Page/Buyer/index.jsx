import { Link } from 'react-router-dom';
import Line from '../../components/Line/Line';
import style from './Buyer.module.sass';

const Buyer = () => {
  return (
    <div className={style.container}>
      <div className={style.line}>
        <Line />
      </div>
      <div className={`wrap ${style.links}`}>
        <div className={style.link}>
          <Link to="payment">Оплата</Link>
        </div>
        <div className={style.link}>
          <Link to="delivery">Доставка</Link>
        </div>
        <div className={style.link}>
          <Link to="services">Гарантия и сервис</Link>
        </div>
      </div>
    </div>
  );
};
export default Buyer;
