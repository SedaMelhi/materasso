import Path from './../../components/Path/Path';
import Line from './../../components/Line/Line';
import style from './Basket.module.sass';
import BasketItem from './BasketItem/BasketItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setBasket } from '../../redux/basketSlice/basketSlice';
import { Link } from 'react-router-dom';
import { setOrderTotal } from '../../redux/basketSlice/basketSlice';

const Basket = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const basket = useSelector((state) => state.basket.basket);
  const order_total = useSelector((state) => state.basket.order_total);
  const dispatch = useDispatch();
  useEffect(() => {
    let sum = 0;
    setLoad(false);
    const fetchData = async () => {
      const data = [];
      for (const item of basket) {
        const response = await fetch(`https://sadogroup.ru/api/product/?id=${item.id}`);
        const result = await response.json();
        const product = {
          ...result.results[0],
          countProducts: item.count,
          installment: item.installment,
        };
        console.log(result);
        setLoad(true);
        data.push(product);
      }
      setProducts(data);
    };
    fetchData();
    basket.forEach(({ price, count, sale }) => {
      sum += (count * (+price * (100 - sale))) / 100;
    });
    dispatch(setOrderTotal(sum));
    if (basket.length === 0) {
      setLoad(true);
    }
  }, [basket]);
  const getGoodsText = (quantity) => {
    let text = 'товар';
    if (quantity % 10 === 1 && quantity % 100 !== 11) {
      text += '';
    } else if (
      quantity % 10 >= 2 &&
      quantity % 10 <= 4 &&
      !(quantity % 100 >= 12 && quantity % 100 <= 14)
    ) {
      text += 'а';
    } else {
      text += 'ов';
    }
    return `${quantity} ${text}`;
  };
  console.log(order_total, basket);
  return (
    <div className={style.basket}>
      <div className="wrap">
        <Path
          path={[
            { text: 'Главная', link: '/' },
            { text: 'Корзина', link: '/basket' },
          ]}
        />
        <h2 className={style.title}>Корзина</h2>
        <div className={style.subtitle}>{getGoodsText(products.length)}</div>
        <Line />
        {load ? (
          <div className={style.content}>
            <div className={style.left}>
              <div className={style.del__wrap}>
                {products.length > 0 && (
                  <button className={style.del} onClick={() => dispatch(setBasket([]))}>
                    Удалить всё
                  </button>
                )}
              </div>
              <div className={style.products}>
                {products.length > 0 && <Line />}
                {products.length > 0
                  ? products.map(
                      ({ name, id, countProducts, images, price, sale, installment }) => (
                        <div key={id}>
                          <BasketItem
                            name={name}
                            id={id}
                            count={countProducts}
                            image={images[0].image}
                            price={price}
                            sale={sale}
                            installment={installment}
                          />
                          <Line />
                        </div>
                      ),
                    )
                  : ''}
              </div>
            </div>
            <div className={style.right}>
              <h3 className={style.headline}>Итого в корзине</h3>
              <div className={style.line}>
                <div className={style.subtitle}>{getGoodsText(products.length)}</div>
              </div>
              <Line />
              <div className={style.line + ' ' + style.line__bottom}>
                Общая стоимость
                <div className={style.subtitle}>{order_total} ₽</div>
              </div>
              <Link to={basket.length > 0 ? '../basket/order' : ''}>
                <div className={style.btn}>Перейти к оформление</div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="load load__small">
            <div className="lds-spinner lds-spinner__small">
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
        )}
      </div>
    </div>
  );
};
export default Basket;
