import { Link } from 'react-router-dom';
import Line from '../../components/Line/Line';
import style from './Buyer.module.sass';
const Buyer = () => {
  return (
    <div className={style.container}>
      <Line />
      <div className={`wrap ${style.links}`}>
        <div className={style.link}>
          <Link>Оплата</Link>
        </div>
        <div className={style.link}>
          <Link>Доставка</Link>
        </div>
        <div className={style.link}>
          <Link>Возврат обмен</Link>
        </div>
        <div className={style.link}>
          <Link>Гарантия и сервис</Link>
        </div>
        <div className={style.link}>
          <Link>Инструкции по эксплуатации </Link>
        </div>
      </div>
    </div>
  );
};
export default Buyer;
