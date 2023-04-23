import style from './Filter.module.sass';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import { useState } from 'react';

const Filter = ({ category, setCategory }) => {
  const filterItems = ['Модульные диваны', 'Угловые диваны', 'Прямые диваны', 'Все'];
  const [selectShow, setSelectShow] = useState(false);
  return (
    <div className={style.wrap}>
      <div
        className={style.filter__wrap}
        onMouseOver={() => {
          setSelectShow(true);
        }}
        onMouseLeave={() => {
          setSelectShow(false);
        }}
        onClick={() => {
          setSelectShow(!selectShow);
        }}>
        <div className={style.filter}>
          {category
            ? category.length > 8
              ? `${category.substring(0, 8).trim()}...`
              : category
            : 'Фильтры'}
        </div>
        <div className={style.arrow + ' ' + (selectShow ? style.arrow__close : '')}>
          <ArrowSvg />
        </div>
        <div className={style.select + ' ' + (selectShow ? style.select__show : '')}>
          {filterItems.map((item, i) => (
            <label
              key={i}
              className={style.select__item}
              htmlFor={'select0' + i}
              onClick={(event) => {
                setCategory(event.target.innerText);
              }}>
              <input
                type="radio"
                name="filter"
                value={item}
                id={'select0' + i}
                className={style.input + ' hidden'}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              />
              <div className={style.text}>{item}</div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
