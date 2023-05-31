import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from './../../redux/collectionSlice/collectionSlice';
import NextSvg from '../../assets/svg/NextSvg';
import PreviousSvg from '../../assets/svg/PreviousSvg';
import Path from './../../components/Path/Path';
import qs from 'qs';
import ReactPaginate from 'react-paginate';
import CatalogData from './../Catalog/CatalogData/CatalogData';
import style from './../Catalog/Catalog.module.sass';
import collection from './Collection.module.sass';
import Line from '../../components/Line/Line';
import Title from '../../components/Title/Title';
// import Filter from './Filter/Filter';

const CollectionCatalog = () => {
  const filters = useSelector((state) => state.collection.filters);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState({ results: [] });
  const [collectionObj, setCollectionObj] = useState({
    name: '',
    description: '',
    images: [{ image: '' }],
  });
  const [load, setLoad] = useState(false);
  const getData = () => {
    let params = `?page=${filters.page}&collection=${filters.collection}`;
    if (filters.material !== '') {
      params += `&material=${filters.material}`;
    }
    if (filters.color !== '') {
      params += `&color=${filters.color}`;
    }
    if (filters.style !== '') {
      params += `&style=${filters.style}`;
    }
    fetch('https://sadogroup.ru/api/product/' + params)
      .then((res) => res.json())
      .then((data) => {
        setCatalog(data);
        setLoad(true);
      });
    navigate(params);
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          collection: +params.collection,
          color: params.color ?? '',
          style: params.style ?? '',
          material: params.material ?? '',
          page: +params.page ? params.page : 1,
        }),
      );
      setLoad(false);
    }
  }, []);
  useEffect(() => {
    if (catalog.results[0]) {
      setCollectionObj(catalog.results[0].collection);
    }
  }, [catalog]);
  useEffect(() => {
    if (filters.page !== '') {
      getData();
    }
  }, [filters]);
  const handlePageClick = (event) => {
    dispatch(
      setFilters({
        page: event.selected + 1,
        collection: filters.collection,
        material: filters.material,
        color: filters.color,
        style: filters.style,
      }),
    );
  };
  return (
    <div className={collection.wrap + ' wrap'}>
      <div className={style.path}>
        <Path
          path={[
            { text: 'Главная', link: '/' },
            { text: 'Коллекции', link: '/collection' },
            {
              text: `${collectionObj.name}`,
              link: `?page=1&collection=${filters.collection}`,
            },
          ]}
        />
      </div>
      <Title title={'Коллекция ' + collectionObj.name} />
      <Line />
      <div
        className={collection.image}
        style={{
          backgroundImage: `url(${collectionObj.images[0].image})`,
        }}></div>
      <div className={collection.title}>Коллекция {collectionObj.name}</div>
      <div className={collection.description}>{collectionObj.description}</div>
      {/* <Filter category={'sasdas'} menu={catalog} /> */}
      <CatalogData catalog={catalog} load={load} />
      {catalog.count > 9 ? (
        <div className={style.pagination__wrap}>
          <ReactPaginate
            breakLabel="..."
            className={style.pagination}
            previousClassName={style.previous}
            nextClassName={style.next}
            key={filters.collection}
            initialPage={filters.page - 1 > 0 ? filters.page - 1 : 0}
            pageClassName={style.number}
            activeClassName={style.active}
            nextLabel={<NextSvg />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil((catalog.count || 0) / 9)}
            previousLabel={<PreviousSvg />}
            renderOnZeroPageCount={null}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default CollectionCatalog;
