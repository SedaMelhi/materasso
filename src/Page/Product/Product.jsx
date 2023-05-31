import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBasket } from './../../redux/basketSlice/basketSlice';
import { useDispatch } from 'react-redux';
import { setProductId } from '../../redux/productSlice/productSlice';
import Slider from './Slider/Slider';
import qs from 'qs';
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
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setProductId(params.id));
      fetch(`https://sadogroup.ru/api/product/?id=${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.results[0]);
          setLoad(true);
        });
    } else {
      getData();
    }
  }, []);
  useEffect(() => {
    if (!window.location.search) {
      fetch(`https://sadogroup.ru/api/product/?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.results[0]);
        });
    }
  }, [id]);
  //   {
  //     "phone": "123456789",
  //     "name": "John Doe",
  //      "networks": "telegram "
  //     "products": [
  //         {
  //             "name": "Product 1",
  //             "price": 10.99,
  //             "quantity": 2,
  //             "sale": 2,
  //             "installment": true
  //         },
  //         {
  //             "name": "Product 2",
  //             "price": 19.99,
  //             "quantity": 1,
  //             "sale": 0,
  //             "installment": true
  //         }
  //     ],
  //     "order_total": 41.97

  // }
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
                    name: product.name,
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
        {
          id: id,
          count: 1,
          installment: installment,
          sale: product.sale,
          price: product.price,
          name: product.name,
        },
      ]),
    );
  };
  const getData = () => {
    const params = `?id=${id}`;
    fetch('https://sadogroup.ru/api/product/' + params)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.results[0]);
        setLoad(true);
      });
    navigate(params);
  };
  return (
    <div className="wrap product">
      {load ? (
        <div className={style.product}>
          <Path
            path={
              filters.name
                ? [
                    { text: 'Главная', link: '/' },
                    { text: filters.name, link: `/catalog/?page=1&category=${filters.categoryId}` },
                    { text: product.name, link: '' },
                  ]
                : [
                    { text: 'Главная', link: '/' },

                    { text: product.name, link: '' },
                  ]
            }
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
                    <div className={style.detail__text}>{product.about_product.sku}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Ширина</div>
                    <div className={style.detail__text}>{product.about_product.width}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Высота</div>
                    <div className={style.detail__text}>{product.about_product.height}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Страна</div>
                    <div className={style.detail__text}>{product.about_product.country}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Цвет</div>
                    <div className={style.detail__text}>{product.about_product.color}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Материал</div>
                    <div className={style.detail__text}>{product.about_product.material}</div>
                  </div>
                  <div className={style.detail__row}>
                    <div className={style.detail__subtitle}>Стиль</div>
                    <div className={style.detail__text}>{product.about_product.style}</div>
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
      ) : (
        <div className="load">
          <div className="lds-spinner">
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
  );
};
export default Product;
