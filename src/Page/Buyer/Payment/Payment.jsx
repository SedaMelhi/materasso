import Line from '../../../components/Line/Line';
import Path from './../../../components/Path/Path';
import style from './Payment.module.sass';
const Payment = () => {
  return (
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Покупателям', link: '/buyer' },
          { text: 'Оплата', link: '' },
        ]}
      />
      <div className={style.wrap}>
        <div className={style.left}>
          <div className={style.title}>Оплата</div>
          <div className={style.text}>
            Оплата доставки и дополнительных услуг происходит по счёту или наличными при доставке.
          </div>
        </div>
        <div className={style.right}>
          <div className={style.subtitle}>В Materasso доступно 4 способа оплаты товара:</div>
          <ul className={style.list}>
            <li className={style.item}>Банковской картой на сайте;</li>
            <li className={style.item}>По счёту для физических и юридических лиц;</li>
            <li className={style.item}>Наличными или картой в шоуруме;</li>
            <li className={style.item}>В кредит без переплаты - подробнее.</li>
          </ul>
          <p className={style.description}>
            При оплате позиций из наличия необходима 100% оплата до отгрузки, при оплате товаров на
            заказ – 70% для запуска в производство или резервирования из прихода, а после
            поступления на склад – доплата 30% до отгрузки.
          </p>
          <p className={style.description}>
            Оплата доставки и дополнительных услуг происходит по счёту или наличными при доставке.
          </p>
          <div className={style.line}>
            <Line />
          </div>
          <p className={style.description}>Интернет-магазин ООО «Materasso»</p>
          <p className={style.description}>
            ИНН 7703427511 <br />
            КПП 770301001О <br />
            ГРН 1177746489843
          </p>
          <p className={style.description}>
            {' '}
            Юридический адрес: 123022, г. Грозный, ул.Джесси Волкер, дом 6, строение 1, этаж 1,
            помещение 1, комната 7
          </p>
        </div>
      </div>
    </div>
  );
};
export default Payment;
