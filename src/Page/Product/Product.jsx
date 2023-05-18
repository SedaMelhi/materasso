import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setBasket } from './../../redux/basketSlice/basketSlice';
import { useDispatch } from 'react-redux';
import Slider from './Slider/Slider';
import BasketSvg from '../../assets/svg/BasketSvg';
import Path from '../../components/Path/Path';
import style from './Product.module.sass';
import 'swiper/css';

const Product = () => {
  const id = useSelector((state) => state.product.id);
  const filters = useSelector((state) => state.catalog.filters);
  const [product, setProduct] = useState({ images: [] });
  const [btnClick, setBtnClick] = useState(false);
  const [installment, setInstallment] = useState(false);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://storefurniture.pythonanywhere.com/api/product/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.results[0]);
      });
  }, [id]);
  const addProduct = (installment) => {
    for (let item of basket) {
      if (item.id === id) {
        dispatch(
          setBasket(
            basket.map((item) =>
              item.id === id
                ? {
                    id: id,
                    count: item.count + 1,
                    installment: installment,
                    sale: product.sale,
                    price: product.price,
                  }
                : item,
            ),
          ),
        );
        return true;
      }
    }
    dispatch(
      setBasket([
        ...basket,
        { id: id, count: 1, installment: installment, sale: product.sale, price: product.price },
      ]),
    );
  };

  return (
    <div className="wrap product">
      <div className={style.product}>
        <Path
          path={[
            { text: 'Главная', link: '/' },
            { text: filters.name, link: `/catalog/?page=1&category=${filters.categoryId}` },
            { text: product.name, link: '' },
          ]}
        />
        <div className={style.wrapper}>
          <div className={style.right}>
            <Slider product={product} />
            <h3 className={style.title}>Описание</h3>
            <p className={style.description}>{product.description}</p>
            <div className={style.details}>
              <div className={style.detail}>
                <div className={style.detail__title}>О товаре</div>
                <div className={style.detail__row}>
                  <div className={style.detail__subtitle}>Артикул</div>
                  <div className={style.detail__text}>{product.sku}</div>
                </div>
              </div>
              <div className={style.detail}>
                <div className={style.detail__title}>Детали</div>
                <div className={style.detail__row}>
                  <div className={style.detail__subtitle}>Состав-Каркас</div>
                  <div className={style.detail__text}>{product.frame_composition}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.left}>
            <h2 className={style.headline}>{product.name}</h2>
            <div className={style.priceText}>{product.price}</div>
            <div className={style.count}>На складе {product.quantity} шт.</div>
            <div
              className={style.btn + ' ' + style.btn_blue}
              onClick={(event) => {
                if (btnClick) {
                  event.preventDefault();
                } else {
                  setBtnClick(true);
                  addProduct(false);
                }
              }}>
              {btnClick ? (
                'Товар добавлен'
              ) : (
                <>
                  <span className={style.icon}>
                    <BasketSvg />
                  </span>
                  {(+product.price).toLocaleString('en-US').replace(',', ' ')}
                  <span className={style.sine}>₽</span>
                </>
              )}
            </div>
            <div
              className={style.btn}
              onClick={(event) => {
                if (installment) {
                  event.preventDefault();
                } else {
                  setInstallment(true);
                  addProduct(true);
                }
              }}>
              {installment ? (
                'Товар добавлен'
              ) : (
                <>
                  В Рассрочку {(+product.price / 10).toLocaleString('en-US').replace(',', ' ')}{' '}
                  ₽/мес
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
