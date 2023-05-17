import CloseSvg from '../../../assets/svg/CloseSvg';
import MinusSvg from '../../../assets/svg/MinusSvg';
import PlusSvg from '../../../assets/svg/PlusSvg';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBasket } from '../../../redux/basketSlice/basketSlice';

import style from './../Basket.module.sass';

const BasketItem = ({ name, id, count, image, price, sale, installment }) => {
  const [value, setValue] = useState(count);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
      const arr = basket.map((item) =>
        item.id === id
          ? {
              id: item.id,
              count: item.count - 1,
              installment: item.installment,
              sale: item.sale,
              price: item.price,
            }
          : item,
      );
      dispatch(setBasket(arr));
      console.log(arr);
    }
  };

  const increment = () => {
    setValue(value + 1);
    const arr = basket.map((item) =>
      item.id === id
        ? {
            id: item.id,
            count: item.count + 1,
            installment: item.installment,
            sale: item.sale,
            price: item.price,
          }
        : item,
    );
    dispatch(setBasket(arr));
    console.log(arr);
  };

  const deleteElemnet = (productId) => {
    dispatch(setBasket(basket.filter(({ id }) => id !== productId)));
  };

  return (
    <div className={style.product}>
      <div className={style.product__left}>
        <div className={style.image__wrap}>
          <div className={style.image}>
            <img src={image} alt="" />
          </div>
          <div className={style.count__wrap + ' ' + style.count__mobile}>
            <button onClick={decrement} className={style.count__action}>
              <MinusSvg />
            </button>
            <input
              type="number"
              className={style.count}
              min="1"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={increment} className={style.count__action}>
              <PlusSvg />
            </button>
          </div>
        </div>
        <div className={style.text}>
          <div className={style.name}>{name}</div>
          <div className={style.size}>
            {installment ? 'товар с рассрочкой' : 'товар без рассрочки'}
          </div>
          <div className={style.price__all + ' ' + style.price__mobile}>
            <span className={style.text__all}>{((+price * (100 - sale)) / 100) * value}</span> ₽
          </div>
        </div>
        <div className={style.close + ' ' + style.close__mobile} onClick={() => deleteElemnet(id)}>
          <CloseSvg />
        </div>
      </div>
      <div className={style.product__right}>
        <div className={style.count__price + ' ' + style.count__pc}>
          <div className={style.count__wrap}>
            <button onClick={decrement} className={style.count__action}>
              <MinusSvg />
            </button>
            <input
              type="number"
              className={style.count}
              min="1"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={increment} className={style.count__action}>
              <PlusSvg />
            </button>
          </div>
          <div className={style.price}>
            <span className={sale > 0 ? style.lineThrough : ''}>{price}</span> ₽/ШТ.
            {sale > 0 ? `(-${sale}%)` : ''}
          </div>
        </div>
        <div className={style.price__all + ' ' + style.price__pc}>
          <span className={style.text__all}>{((+price * (100 - sale)) / 100) * value}</span> ₽
        </div>
        <div className={style.close + ' ' + style.close__pc} onClick={() => deleteElemnet(id)}>
          <CloseSvg />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
