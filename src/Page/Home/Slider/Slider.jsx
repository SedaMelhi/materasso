import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import style from './Slider.module.sass';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Slider = () => {
  return (
    <div className={style.sliders}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        speed={800}
        navigation={{ prevEl: '.arrow-prev', nextEl: '.arrow-next' }}>
        <SwiperSlide>
          <div className={`${style.slider} ${style.slider__one}`}>
            <div className={style.subtitle}>Коллекция</div>
            <div className={style.title}>МОНТЕ-КАРЛО</div>
            <Link to="/" className={style.button}>
              Просмотр
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slider} ${style.slider__two}`}>
            <div className={style.subtitle}>Коллекция</div>
            <div className={style.title}>Сидней</div>
            <div className={style.button}>Просмотр</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slider} ${style.slider__three}`}>
            <div className={style.subtitle}>Коллекция</div>
            <div className={style.title}>Бруклин</div>
            <div className={style.button}>Просмотр</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slider} ${style.slider__four}`}>
            <div className={style.subtitle}>Коллекция</div>
            <div className={style.title}>Венеция</div>
            <div className={style.button}>Просмотр</div>
          </div>
        </SwiperSlide>
        <div className={style.arrows}>
          <div className={`${style.arrow} arrow-prev`}>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.2222 20.6666L1.5555 11L11.2222 1.33331"
                stroke="white"
                strokeWidth="2.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={`${style.arrow} arrow-next`}>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.77816 20.6666L11.4448 11L1.77816 1.33331"
                stroke="white"
                strokeWidth="2.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
