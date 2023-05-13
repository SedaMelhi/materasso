import CloseSvg from '../../../assets/svg/CloseSvg';
import MinusSvg from '../../../assets/svg/MinusSvg';
import PlusSvg from '../../../assets/svg/PlusSvg';
import style from './../Basket.module.sass';
import { useState } from 'react';
const BasketItem = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };
  return (
    <div className={style.product}>
      <div className={style.product__left}>
        <div className={style.image}>
          <img src="./img/products/product3.png" alt="" />
        </div>
        <div className={style.text}>
          <div className={style.name}>Кресло Naomi букле</div>
          <div className={style.size}>
            Размер: <span className={style.width}>94.1</span>x{' '}
            <span className={style.lenght}>100.5</span> x{' '}
            <span className={style.height}>108.3</span> см
          </div>
        </div>
      </div>
      <div className={style.product__right}>
        <div className={style.count__price}>
          <div className={style.count__wrap}>
            <button onClick={decrement} className={style.count__action}>
              <MinusSvg />
            </button>
            <input
              type="number"
              className={style.count}
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={increment} className={style.count__action}>
              <PlusSvg />
            </button>
          </div>
          <div className={style.price}>
            <span className={style.text}>73 500</span> ₽/ШТ.
          </div>
        </div>
        <div className={style.price__all}>
          <span className={style.text__all}>73 500</span> ₽
        </div>
        <div className={style.close}>
          <CloseSvg />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
