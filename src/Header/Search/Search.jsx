import style from './Search.module.sass';
const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.icon}>
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
    </div>
  );
};
export default Search;
