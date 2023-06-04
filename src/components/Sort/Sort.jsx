import ArrowSvg from '../../assets/svg/ArrowSvg';
import style from './Sort.module.sass';

import { useState } from 'react';
const Sort = ({ sort, setSort }) => {
  const filterItems = ['Сначала новые', 'По возрастанию цены', 'По убыванию цены'];
  const [selectShow, setSelectShow] = useState(false);
  return (
    <div
      className={style.wrap}
      onMouseOver={() => {
        setSelectShow(true);
      }}
      onMouseLeave={() => {
        setSelectShow(false);
      }}>
      <div className={style.filter__wrap}>
        <div className={style.filter}>{sort.value}</div>
        <div className={style.arrow + ' ' + (selectShow ? style.arrow__close : '')}>
          <ArrowSvg />
        </div>
      </div>
      <div className={style.select + ' ' + (selectShow ? style.select__show : '')}>
        {filterItems.map((item, i) => (
          <label
            key={i}
            className={style.select__item}
            htmlFor={'select0' + i}
            onClick={(event) => {
              setSort({ value: event.target.innerText, id: i });
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
  );
};
export default Sort;
