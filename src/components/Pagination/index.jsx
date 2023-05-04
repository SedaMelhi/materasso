import style from './Pagination.module.sass';
import ReactPaginate from 'react-paginate';
import NextSvg from '../../assets/svg/NextSvg';
import PreviousSvg from '../../assets/svg/PreviousSvg';
import { setFilters } from './../../redux/catalogSlice/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
const Pagination = ({ itemsPerPage, count, getData, url }) => {
  const filters = useSelector((state) => state.catalog.filters);
  const pageCount = Math.ceil((count || 0) / itemsPerPage);
  const dispatch = useDispatch();
  const handlePageClick = (event) => {
    dispatch(
      setFilters({
        categoryId: filters.categoryId,
        name: filters.name,
        subId: filters.subId,
        page: event.selected + 1,
      }),
    );
  };
  return (
    <div className="wrap">
      <div className={style.pagination__wrap}>
        <ReactPaginate
          breakLabel="..."
          className={style.pagination}
          previousClassName={style.previous}
          nextClassName={style.next}
          key={filters.categoryId}
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
