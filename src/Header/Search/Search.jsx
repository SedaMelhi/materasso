import { useEffect, useState } from 'react';
import style from './Search.module.sass';
import { useNavigate } from 'react-router-dom';
import { setSearch } from './../../redux/searchSlice/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const showInput = (event) => {
    if (event.target.tagName !== 'INPUT') {
      setShow(!show);
    }
  };
  const Search = () => {
    dispatch(setSearch({ value: value, page: 1 }));
    if (show && value.trim().length > 0) {
      navigate('/search');
    }
  };
  useEffect(() => {
    setShow(false);
    setValue('');
  }, [search]);
  return (
    <div className={style.search} onClick={showInput}>
      <div className={style.icon} onClick={Search}>
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7503 14.2499L11.4878 10.9874M13.25 6.75C13.25 10.0637 10.5637 12.75 7.25 12.75C3.93629 12.75 1.25 10.0637 1.25 6.75C1.25 3.43629 3.93629 0.75 7.25 0.75C10.5637 0.75 13.25 3.43629 13.25 6.75Z"
            stroke="#131F2E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text">Поиск</div>
      <input
        type="text"
        value={value}
        className={style.input + ' ' + (show ? style.input__active : '')}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => (event.key === 'Enter' ? Search() : '')}
      />
    </div>
  );
};
export default Search;
