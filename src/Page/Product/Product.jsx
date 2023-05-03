import Path from '../../components/Path/Path';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import style from './Product.module.sass';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { setProduct } from './../../redux/catalogSlice/catalogSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
const Product = () => {
  const id = useSelector((state) => state.catalog.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([{ images: [] }]);
  useEffect(() => {
    fetch(`https://storefurniture.pythonanywhere.com/api/product/?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.results));
    // navigate('?id=' + id);
  }, [id]);
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     // fetch('https://storefurniture.pythonanywhere.com/api/product/')
  //     //   .then((res) => res.json())
  //     //   .then((data) =>
  //     //     dispatch(
  //     //       setProduct(data.filter((item) => item.id === +params.category)[0].name_category),
  //     //     ),
  //     //   );
  //     // dispatch(setProduct(params.category));
  //     console.log(params);
  //   }
  // }, [dispatch]);

  return (
    <div className="wrap product">
      <div className={style.product}>
        <Path />
        <div className={style.right}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.arrow-prev', nextEl: '.arrow-next' }}>
            {product[0].images.map(({ id, image }) => (
              <SwiperSlide>
                <div className={style.slide}></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={'arrows ' + style.arrows}>
            <div className="arrow-prev">
              <svg
                width="60"
                height="59"
                viewBox="0 0 60 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="29.7999" cy="29.4258" r="29.4258" fill="#1F2E36" fillOpacity="0.5" />
                <path
                  d="M33.0686 39.052L23.2594 29.3041L33.0686 19.5562"
                  stroke="white"
                  strokeWidth="2.4523"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="arrow-next">
              <svg
                width="60"
                height="59"
                viewBox="0 0 60 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.1207" cy="29.4258" r="29.4258" fill="#1F2E36" fillOpacity="0.5" />
                <path
                  d="M26.8497 39.052L36.6589 29.3041L26.8497 19.5562"
                  stroke="white"
                  strokeWidth="2.4523"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h3 className={style.title}>Описание</h3>
        </div>
        <div className={style.left}></div>
      </div>
    </div>
  );
};
export default Product;
