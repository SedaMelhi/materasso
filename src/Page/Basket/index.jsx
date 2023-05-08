import Path from './../../components/Path/Path';
import Title from './../../components/Title/Title';
import style from './Basket.module.sass';
const Basket = () => {
  return (
    <div className={style.basket}>
      <div className="wrap">
        <Path />
        <Title title="Корзина" />
        <div className={style.count}>2 товара</div>
      </div>
    </div>
  );
};
export default Basket;
