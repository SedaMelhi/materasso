import Path from './../../../components/Path/Path';
import style from './Payment.module.sass';
const Delivery = () => {
  return (
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Покупателям', link: '/buyer' },
          { text: 'Доставка', link: '' },
        ]}
      />
      <div className={style.wrap}>
        <div className={style.left}>
          <div className={style.title}>Доставка</div>
          <div className={style.text}>
            Cотрудники проходят ежедневный контроль температуры и при работе используют одноразовые
            медицинские маски и перчатки.
          </div>
        </div>
        <div className={style.right}>
          <div className={style.subtitle}>Курьерская доставка по Грозному</div>

          <p className={style.description}>В пределах города</p>
          <table className={style.table + ' ' + style.table__mobile}>
            <tr>
              <th>
                <div className={style.table__item}>Объем товара</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>до 3 куб.м.</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 3 до 5 куб.м.</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 5 до 10 куб.м.</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 10 до 16 куб.м.</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>свыше 16 куб.м.</div>
              </td>
            </tr>
          </table>
          <table className={style.table + ' ' + style.table__mobile}>
            <tr>
              <th>
                <div className={style.table__item}>Стоимость</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>1 500 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>3 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>4 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>6 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>рассчитывается индивидуально</div>
              </td>
            </tr>
          </table>
          <table className={style.table + ' ' + style.table__pc}>
            <tr>
              <th>
                <div className={style.table__item}>Объем товара</div>
              </th>
              <th>
                <div className={style.table__item}>Стоимость</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>до 3 куб.м.</div>
              </td>
              <td>
                <div className={style.table__item}>1 500 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 3 до 5 куб.м.</div>
              </td>
              <td>
                <div className={style.table__item}>3 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 5 до 10 куб.м.</div>
              </td>
              <td>
                <div className={style.table__item}>4 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>от 10 до 16 куб.м.</div>
              </td>
              <td>
                <div className={style.table__item}>6 000 ₽</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.table__item}>свыше 16 куб.м.</div>
              </td>
              <td>
                <div className={style.table__item}>рассчитывается индивидуально</div>
              </td>
            </tr>
          </table>
          <h4 className={style.right__title + ' ' + style.right__title_firts}>В пределах города</h4>
          <p className={style.description}>
            Выезд за пределы города оплачивается дополнительно из расчета 30 руб. за 1 км.
          </p>
          <h4 className={style.right__title}>Время доставки</h4>
          <p className={style.description}>
            Доставка осуществляется в рабочие дни с 10:00 до 18:00.
          </p>
          <h4 className={style.right__title}>
            Dantone Home предоставляет услугу доставки собственной курьерской службой
          </h4>
          <p className={style.description}>Наши сотрудники:</p>
          <ul className={style.list}>
            <li className={style.item}>
              пунктуально доставляют заказы в заранее назначенное время;
            </li>
            <li className={style.item}>
              полностью несут ответственность за сохранность товаров при транспортировке;
            </li>
            <li className={style.item}>обеспечивают высокое качество и оперативность сборки;</li>
            <li className={style.item}>
              регулярно работают именно с мебелью Dantone Home, то есть знают особенности
              определённых механизмов, имеют при себе все необходимые инструменты;
            </li>
            <li className={style.item}>
              надевают бахилы, а в условиях пандемии также маски и перчатки;
            </li>
            <li className={style.item}>
              убирают за собой упаковку и выносят её на лестничную площадку или территорию частного
              дома.
            </li>
          </ul>
          <p className={style.description}>
            В случае повреждений при перевозке гарантированно будет осуществлена замена
            повреждённого товара за счёт компании. В базовую стоимость доставки входит разгрузка,
            распаковка и вынос упаковки на лестничную площадку. Дополнительные услуги оплачиваются
            отдельно. Больше идей для интерьера мечты – в нашей рассылке Подписываясь, я принимаю
            пользовательское соглашение
          </p>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
