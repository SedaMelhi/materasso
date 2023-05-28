import Button from './Button/Button';
import style from './Section.module.sass';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Section = ({ name, id, images, short_description, description }) => {
  const bg = {
    background: `url(${images[0].image}) no-repeat center/cover`,
    width: '100%',
    height: '387px',
    borderRadius: '15px',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className={`${style.section} ${id % 2 === 1 ? style.section__reverse : ''}`}>
        <div
          className={style.section__left}
          data-aos="fade-up"
          data-aos-easing="easy-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <div className={style.title}>Коллекция {name}</div>
          <div className={style.subtitle}>{short_description}</div>
          <div className={style.description}>{description}</div>
          <div className={style.btn}>
            <Button text="Подробнее" />
          </div>
        </div>
        <div
          className={style.section__right}
          data-aos={id % 2 === 1 ? 'fade-left' : 'fade-right'}
          data-aos-easing="easy-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <div className="img" style={bg}></div>
        </div>
        <div className={style.btn__mobile}>
          <Button text="Подробнее" />
        </div>
      </div>
    </section>
  );
};

export default Section;
