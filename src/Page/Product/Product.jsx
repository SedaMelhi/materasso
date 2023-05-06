import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Path from '../../components/Path/Path';
import style from './Product.module.sass';
//import 'swiper/swiper-bundle.css';
import 'swiper/css';
SwiperCore.use([Navigation, Pagination]);
const Product = () => {
  const id = useSelector((state) => state.product.id);
  const swiperRef = useRef(null);
  const [product, setProduct] = useState([{ images: [] }]);
  useEffect(() => {
    fetch(`https://storefurniture.pythonanywhere.com/api/product/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.results);
      });
  }, [id]);
  return (
    <div className="wrap product">
      <div className={style.product}>
        <Path />
        <div className={style.right}>
          <Swiper
            spaceBetween={0}
            ref={swiperRef}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              bulletClass: style.bullet,
              bulletActiveClass: style.active,
              wrapper: style.wrapper,
              renderBullet: function (index) {
                if (product[0].images[index]) {
                  return `
                  <div class="${style.bullet} ${
                    swiperRef.current?.activeIndex === index ? style.active : ''
                  }"  style='background-image: url(${product[0].images[index].image})'>
                  </div>
                `;
                } else {
                  return '';
                }
              },
              onClick: function (swiper, event) {
                swiper.slideTo(event.target.getAttribute('data-swiper-slide-index'));
              },
            }}
            navigation={{ prevEl: '.arrow-prev', nextEl: '.arrow-next' }}>
            {product[0].images.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <div className={style.slide} style={{ backgroundImage: `url(${image})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
          {product[0].images.length > 1 ? (
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
          ) : (
            ''
          )}
          <h3 className={style.title}>Описание</h3>
        </div>
        <div className={style.left}></div>
      </div>
    </div>
  );
};
export default Product;
