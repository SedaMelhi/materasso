import Line from '../../../components/Line/Line';
import Path from './../../../components/Path/Path';
import style from './Payment.module.sass';

const Services = () => {
  return (
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Покупателям', link: '/buyer' },
          { text: 'Гарантия и сервис', link: '' },
        ]}
      />
      <div className={style.wrap}>
        <div className={style.left}>
          <div className={style.title}>Гарантия и сервис</div>
          <div className={style.text}>
            Гарантийный срок на мебель Materasso составляет 18 месяцев и вступает в силу со дня
            передачи товара покупателю.
          </div>
        </div>
        <div className={style.right}>
          <div className={style.subtitle}>Условия гарантии</div>
          <p className={style.description}>
            Мы несём ответственность по гарантийным обязательствам при условии соблюдения клиентом.
          </p>
          <p className={style.description}>
            <b>В случае отказа покупателя от услуг доставки и сборки,</b> Materasso не несёт
            ответственности за недостатки и повреждения товара, которые могут возникнуть вследствие
            самостоятельной транспортировки или самостоятельной сборки.
          </p>
          <p className={style.description}>
            <b>Если гарантийный случай подтверждается,</b> товар будет заменён таким же или
            аналогичным.
          </p>
          <p className={style.description}>
            <b>Если товар вышел из ассортимента бренда,</b> мы предложим подходящую замену или
            возместим стоимость неисправного товара.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
