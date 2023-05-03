import style from './Filter.module.sass';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Filter = ({ category, setCategory, menu, setSubId }) => {
  const [selectShow, setSelectShow] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const id = useSelector((state) => state.catalog.categoryId);
  useEffect(() => {
    menu.forEach(({ products }) => {
      products.forEach((item) => {
        if (+id === item.id) {
          setFilterItems(item.subcategories);
        }
      });
    });
  }, [id, menu]);

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
        <div
          className={
            style.arrow +
            ' ' +
            (filterItems.length > 0 ? (selectShow ? style.arrow__close : '') : '')
          }>
          <ArrowSvg />
        </div>
        {filterItems.length > 0 && (
          <div className={style.select + ' ' + (selectShow ? style.select__show : '')}>
            {filterItems.map(({ name, id }) => (
              <label
                key={id}
                className={style.select__item}
                htmlFor={'select0' + id}
                onClick={(event) => {
                  setCategory(event.target.innerText);
                  setSubId(id);
                  //https://storefurniture.pythonanywhere.com/api/product/?subcategory=5
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
        )}
      </div>
    </div>
  );
};

export default Filter;
