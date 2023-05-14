import Path from './../../components/Path/Path';
import Line from './../../components/Line/Line';
import style from './Basket.module.sass';
import BasketItem from './BasketItem/BasketItem';
import { useSelector } from 'react-redux';
import { setBasket } from './../../redux/basketSlice/basketSlice';
import { useDispatch } from 'react-redux';
const Basket = () => {
  const products = useSelector((state) => state.basket.product);
  const dispatch = useDispatch();
  return (
    <div className={style.basket}>
      <div className="wrap">
        <Path />
        <h2 className={style.title}>Корзина</h2>
        <div className={style.subtitle}>2 товара</div>
        <Line />
        <div className={style.content}>
          <div className={style.left}>
            <div className={style.del__wrap}>
              <button className={style.del}>Удалить всё</button>
            </div>
            <div className={style.products}>
              <Line />
              <BasketItem />
              <Line />
            </div>
          </div>
          <div className={style.right}>
            <h3 className={style.headline}>Итого в корзине</h3>
            <div className={style.line}>
              <div className={style.subtitle}>2 товара</div>
            </div>
            <Line />
            <div className={style.line + ' ' + style.line__bottom}>
              Общая стоимость
              <div className={style.subtitle}>291 300 ₽</div>
            </div>
            <div className={style.btn}>Перейти к оформление</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
