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
  const [data, setData] = useState({
    name: '',
    phone: '',
    networks: '',
  });
  const [err, setErr] = useState(false);
  const changeData = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sendData = (event) => {
    event.preventDefault();
    for (let key in data) {
      if (data[key] === '') {
        setErr(true);
        return false;
      }
    }
    const newData = {
      client: data,
      basket: basket,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    };
    fetch('https://storefurniture.pythonanywhere.com/api/send_emai/', requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log('Данные успешно отправлены');
        } else {
          console.log('Произошла ошибка при отправке данных');
        }
      })
      .catch((error) => {
        console.log('Произошла ошибка при отправке данных:', error);
      });
    setErr(false);
    console.log(newData);
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
      <div className={style.content}>
        <div className={style.content__left}>
          <h2 className={style.subtitle}>Осталось совсем чуть-чуть!</h2>
          <div className={style.description}>
            Спасибо, что выбрали нас Materasso. Оставьте заявку, и наш менеджер непременно с вами
            свяжется.
          </div>
        </div>
        <div className={style.content__right}>
          <form className={style.window}>
            <h3 className={style.window__title}>ЛИЧНЫЕ ДАННЫЕ</h3>
            <div className={style.window__text}>
              Введите свои данные и выберите удобный способ связи
            </div>
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
              Оставьте заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Order;
