import Button from './Button/Button';
import style from './Section.module.sass';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Section = ({ title, subtitle, description, url, id }) => {
  const bg = {
    background: `url(${url}) no-repeat center/cover`,
    width: '100%',
    height: '387px',
    borderRadius: '15px',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className={`${style.section} ${id % 2 == 1 ? style.section__reverse : ''}`}>
        <div
          className={style.section__left}
          data-aos="fade-up"
          data-aos-easing="easy-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <div className={style.title}>{title}</div>
          <div className={style.subtitle}>{subtitle}</div>
          <div className={style.description}>{description}</div>
          <Button text="Подробнее" />
        </div>
        <div
          className={style.section__right}
          data-aos={id % 2 == 1 ? 'fade-left' : 'fade-right'}
          data-aos-easing="easy-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <div className="img" style={bg}></div>
        </div>
      </div>
    </section>
  );
};

export default Section;
