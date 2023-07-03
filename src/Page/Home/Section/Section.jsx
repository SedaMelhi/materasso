import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Button from './Button/Button';
import 'aos/dist/aos.css';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './Section.module.sass';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../redux/collectionSlice/collectionSlice';

const Section = ({ name, id, images, step, short_description, description, load, link }) => {
  const dispatch = useDispatch();
  const bg = load
    ? {
        background: `url(${images[0].image}) no-repeat center/cover`,
        width: '100%',
        height: '387px',
        borderRadius: '15px',
      }
    : '';
  useEffect(() => {
    AOS.init();
  }, []);
  const changeFilters = () => {
    console.log('asdsad');
    dispatch(
      setFilters({
        page: 1,
        collection: id,
        material: '',
        color: '',
        style: '',
        quantity: '',
        price: { min: '', max: '' },
      }),
    );
  };
  return load ? (
    <section>
      <div className={`${style.section} ${step % 2 === 1 ? style.section__reverse : ''}`}>
        <div
          className={style.section__left}
          data-aos="fade-up"
          data-aos-easing="easy-out"
          data-aos-duration="1500"
          data-aos-once="true">
          {load ? (
            <div className={style.title}>Коллекция {name}</div>
          ) : (
            <Skeleton className={style.title} />
          )}
          <div className={style.subtitle}>{short_description}</div>
          <div className={style.description}>{description}</div>
          <div className={style.btn}>
            <Link to="../collcatalog" onClick={changeFilters}>
              <Button text="Подробнее" />
            </Link>
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
          <Link to="../collcatalog" onClick={changeFilters}>
            <Button text="Подробнее" />
          </Link>
        </div>
      </div>
    </section>
  ) : (
    <section>
      <div className={style.section}>
        <div className={style.section__left}>
          <Skeleton className={style.title + ' ' + style.title__skeleton} />
          <Skeleton className={style.subtitle + ' ' + style.subtitle__skeleton} />
          <Skeleton className={style.description} />
          <Skeleton className={style.btn + ' ' + style.btn__skeleton} />
        </div>
        <div className={style.section__right}>
          <Skeleton className={style.bg} style={bg} />
        </div>
        <Skeleton className={style.btn__mobile + ' ' + style.btn__mobile__skeleton} />
      </div>
    </section>
  );
};

export default Section;
