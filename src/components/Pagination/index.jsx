import style from './Pagination.module.sass';
import ReactPaginate from 'react-paginate';
import NextSvg from '../../assets/svg/NextSvg';
import PreviousSvg from '../../assets/svg/PreviousSvg';

import { useSelector } from 'react-redux';

const Pagination = ({ itemsPerPage, count, getData, url }) => {
  const id = useSelector((state) => state.catalog.categoryId);
  const pageCount = Math.ceil((count || 0) / itemsPerPage);

  const handlePageClick = (event) => {
    getData(url, id, event.selected + 1);
  };
  return (
    <div className="wrap">
      <div className={style.pagination__wrap}>
        <ReactPaginate
          breakLabel="..."
          className={style.pagination}
          previousClassName={style.previous}
          nextClassName={style.next}
          key={id}
          pageClassName={style.number}
          activeClassName={style.active}
          nextLabel={<NextSvg />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<PreviousSvg />}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
export default Pagination;
