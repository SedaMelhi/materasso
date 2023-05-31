import style from './Order.module.sass';
import Path from '../../../components/Path/Path';
import Line from '../../../components/Line/Line';
import WhatsApp from '../../../assets/svg/WhatsApp';
import Telegram from '../../../assets/svg/Telegram';
import CallSvg from '../../../assets/svg/CallSvg';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Order = () => {
  const basket = useSelector((state) => state.basket.basket);
  const order_total = useSelector((state) => state.basket.order_total);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: '',
    phone: '',
    products: [],
    order_total: 0,
  });
  const [err, setErr] = useState(false);
  const [errCount, setErrCount] = useState(false);
  const [status, setStatus] = useState(false);
  const changeData = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendData = (event) => {
    event.preventDefault();
    setLoad(true);
    if (basket.length === 0) {
      setLoad(false);
      setErrCount(true);
      return false;
    }
    for (let key in data) {
      if (data[key] === '') {
        setErr(true);
        return false;
      }
    }

    const arrBasket = [];
    for (let item of basket) {
      arrBasket.push({
        name: item.name,
        price: item.price,
        quantity: item.count,
        sale: item.sale,
        installment: item.installment,
      });
    }
    const newData = {
      phone: data.phone,
      name: data.name,
      networks: data.networks,
      products: [...arrBasket],
      order_total: order_total,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    };
    console.log(order_total, basket);
    console.log(newData);
    fetch('https://sadogroup.ru/api/send_email/', requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoad(false);
          setStatus('yes');
        } else {
          setLoad(false);
          setStatus(true);
        }
      })
      .catch(() => {
        setLoad(false);
        setStatus(true);
      });
    fetch('https://sadogroup.ru/api/send_telegram/', requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoad(false);
          setStatus('yes');
        } else {
          setLoad(false);
          setStatus(true);
        }
      })
      .catch((error) => {
        setLoad(false);
        setStatus(true);
      });
    setErr(false);
  };

  return (
    <div className={style.order + ' wrap'}>
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Корзина', link: '/basket' },
          { text: 'Оформление заказа', link: '/basket/order' },
        ]}
      />
      <h2 className={style.title}>Оформление заказа</h2>
      <Line />
      {status !== 'yes' ? (
        <div className={style.content}>
          <div className={style.content__left}>
            <h2 className={style.subtitle}>Осталось совсем чуть-чуть!</h2>
            <div className={style.description}>
              Спасибо, что выбрали нас Materasso. Оставьте заявку, и наш менеджер непременно с вами
              свяжется.
            </div>
          </div>
          <form className={style.window}>
            <h3 className={style.window__title}>ЛИЧНЫЕ ДАННЫЕ</h3>
            <div className={style.window__text}>
              Введите свои данные и выберите удобный способ связи
            </div>
            {errCount ? <div className={style.error}>В корзине нет товара!</div> : ''}
            {status ? <div className={style.error}>Ошибка сети. Попробуйте чуть позже.</div> : ''}
            <input
              type="text"
              className={style.input}
              placeholder="ФИО"
              name="name"
              value={data.name}
              onChange={changeData}
            />
            <InputMask
              className={style.input}
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              name="phone"
              onChange={changeData}
              value={data.phone}
            />

            <div className={style.networks}>
              <input
                className={style.radio}
                type="radio"
                id="WhatsApp"
                name="networks"
                value="WhatsApp"
                onChange={changeData}
                checked={data.networks === 'WhatsApp'}
              />
              <label className={style.networks__item} htmlFor="WhatsApp">
                <WhatsApp />
              </label>
              <input
                className={style.radio}
                type="radio"
                id="telegram"
                name="networks"
                value="telegram"
                onChange={changeData}
                checked={data.networks === 'telegram'}
              />
              <label className={style.networks__item} htmlFor="telegram">
                <Telegram />
              </label>
              <input
                className={style.radio}
                type="radio"
                id="call"
                name="networks"
                value="call"
                onChange={changeData}
                checked={data.networks === 'call'}
              />
              <label className={style.networks__item} htmlFor="call">
                <CallSvg />
              </label>
            </div>
            {err ? <p className={style.error}>Заполните все поля!</p> : ''}
            <button className={style.btn} onClick={sendData}>
              {load ? (
                <div className="load load_width">
                  <div className="lds-spinner lds-spinner_width">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                'Оставьте заявку'
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className={style.center}>
          <h2 className={style.subtitle}>Заявка отправлена!</h2>
          <div className={style.description}>
            Спасибо, что выбрали нас Materasso. Ваша заявка отправлена, и наш менеджер непременно с
            вами свяжется.
          </div>
        </div>
      )}
    </div>
  );
};
export default Order;
