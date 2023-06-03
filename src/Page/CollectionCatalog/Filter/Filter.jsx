import style from './Filter.module.sass';
import ArrowSvg from '../../../assets/svg/ArrowSvg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilters } from './../../../redux/collectionSlice/collectionSlice';
import { useDispatch } from 'react-redux';
const Filter = ({ filterItems, type }) => {
  const [selectShow, setSelectShow] = useState(false);
  const [valueSelect, setValueSelect] = useState(type.ru);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.collection.filters);
  const objFilter = { ...filters };
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
        <div className={style.filter}>{valueSelect}</div>
        <div className={style.arrow + ' ' + (selectShow ? style.arrow__close : '')}>
          <ArrowSvg />
        </div>
        <div className={style.select + ' ' + (selectShow ? style.select__show : '')}>
          {filterItems &&
            filterItems.map((name, id) => (
              <label
                key={id}
                className={style.select__item}
                htmlFor={'select0' + id}
                onClick={(event) => {
                  setValueSelect(event.target.innerText.substring(0, 9).trim());
                  objFilter[type.en] = event.target.innerText;
                  objFilter.page = 1;

                  dispatch(setFilters(objFilter));
                }}>
                <input
                  type="radio"
                  name="filter"
                  value={name}
                  id={'select0' + id}
                  className={style.input + ' hidden'}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                />
                <div className={style.text}>{name}</div>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
