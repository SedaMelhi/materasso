import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './Slider.module.sass';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'react-loading-skeleton/dist/skeleton.css';

const Slider = ({ collections, load }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.sliders}>
      {load ? (
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
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}>
          {collections.map(({ id, images, name }) => (
            <SwiperSlide key={id}>
              <div
                className={`${style.slider}`}
                style={{
                  backgroundImage: `url(${images ? images[0].image : ''})`,
                }}>
                <div className={style.center}>
                  <div className={style.subtitle}>Коллекция</div>
                  <div className={style.title}>{name ? name : ''}</div>
                  <Link to="/collection" className={style.button}>
                    Просмотр
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={style.arrows}>
            <div ref={prevRef} className={style.arrow}>
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
            <div ref={nextRef} className={style.arrow}>
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
      ) : (
        <Skeleton className={style.sliderSceleton} />
      )}
    </div>
  );
};

export default Slider;
