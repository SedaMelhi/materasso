import style from './Filter.module.sass';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilters } from './../../redux/catalogSlice/catalogSlice';
import { useDispatch } from 'react-redux';
const Filter = ({ category, setCategory, menu }) => {
  const [selectShow, setSelectShow] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.catalog.filters);
  useEffect(() => {
    menu.forEach(({ products }) => {
      products.forEach((item) => {
        if (+filters.categoryId === item.id) {
          setFilterItems(item.subcategories);
        }
      });
    });
  }, [filters, menu]);

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
                  dispatch(
                    setFilters({
                      categoryId: filters.categoryId,
                      name: filters.name,
                      subId: id,
                      page: 1,
                    }),
                  );
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
