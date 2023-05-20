import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import style from './../Product.module.sass';
SwiperCore.use([Navigation, Pagination]);
const Slider = ({ product }) => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={style.slider__wrap}>
      <div className={style.imageCount}>{product.images.length} фото</div>
      <Swiper
        spaceBetween={0}
        ref={swiperRef}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          bulletClass: style.bullet,
          bulletActiveClass: style.active,
          wrapper: style.wrapper,
          renderBullet: function (index) {
           if(product.images.length > 1){
            if (product.images[index]) {
              return `
                  <div class="${style.bullet} ${
                swiperRef.current?.activeIndex === index ? style.active : ''
              }"  style='background-image: url(${product.images[index].image})'>
                  </div>
                `;
            } else {
              return '';
            }
           }else{
            return ''
           }
          },
          onClick: function (swiper, event) {
            swiper.slideTo(event.target.getAttribute('data-swiper-slide-index'));
          },
        }}>
        {product.images.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <div className={style.slide} style={{ backgroundImage: `url(${image})` }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {product.images.length > 1 ? (
        <div className={style.arrows}>
          <div className={'arrow-prev'} onClick={handlePrevClick}>
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
          <div className={'arrow-next'} onClick={handleNextClick}>
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
    </div>
  );
};

export default Slider;
