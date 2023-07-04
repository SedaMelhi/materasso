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
import Filter from './Filter/Filter';

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
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [styles, setStyles] = useState([]);
  const [image, setImages] = useState('');
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
    if (filters.price.max !== '') {
      params += `&max_price=${filters.price.max}`;
    }
    if (filters.price.min !== '') {
      params += `&min_price=${filters.price.min}`;
    }
    if (filters.quantity !== '') {
      if (filters.quantity === 'В наличии') {
        params += `&quantity=1`;
      }
    }
    fetch('https://sadogroup.ru/api/product/' + params)
      .then((res) => res.json())
      .then((data) => {
        setCatalog(data);
        setLoad(true);
      });
    fetch('https://sadogroup.ru/api/collection/')
      .then((res) => res.json())
      .then((data) => {
        setImages(data.filter(({ id }) => id === filters.collection)[0].images[0].image);
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
          quantity: params.quantity ? 1 : '',
          page: +params.page ? params.page : 1,
          price: { min: params.min_price ?? '', max: params.max_price ?? '' },
        }),
      );
      setLoad(false);
    }
    fetch('https://sadogroup.ru/api/colors')
      .then((res) => res.json())
      .then((data) => {
        data.pop();
        setColors(data);
      });
    fetch('https://sadogroup.ru/api/materials')
      .then((res) => res.json())
      .then((data) => {
        data.pop();
        setMaterials(data);
      });
    fetch('https://sadogroup.ru/api/style')
      .then((res) => res.json())
      .then((data) => {
        data.pop();
        setStyles(data);
      });
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
        quantity: filters.quantity,
        style: filters.style,
        price: { min: filters.price.min, max: filters.price.max },
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
          backgroundImage: `url(${image})`,
        }}></div>
      <div className={collection.title}>Коллекция {collectionObj.name}</div>
      <div className={collection.description}>{collectionObj.description}</div>
      <div className={collection.filters__wrap}>
        <div className={collection.filters}>
          <Filter filterItems={colors} type={{ en: 'color', ru: 'Цвет' }} />
          <Filter filterItems={materials} type={{ en: 'material', ru: 'Материал' }} />
          <Filter filterItems={styles} type={{ en: 'style', ru: 'Стиль' }} />
          <Filter filterItems={['Все', 'В наличии']} type={{ en: 'quantity', ru: 'Все' }} />
        </div>
        <div className={collection.price}>
          <div className={collection.filter}>
            Цена от:
            <input
              type="number"
              name="priceFrom"
              className={collection.filter__number}
              value={filters.price.min}
              onChange={(event) => {
                dispatch(
                  setFilters({
                    ...filters,
                    price: { min: event.target.value, max: filters.price.max },
                  }),
                );
              }}
            />
          </div>
          <div className={collection.filter}>
            Цена до:
            <input
              type="number"
              name="priceTo"
              className={collection.filter__number}
              value={filters.price.max}
              onChange={(event) => {
                dispatch(
                  setFilters({
                    ...filters,
                    price: { max: event.target.value, min: filters.price.min },
                  }),
                );
              }}
            />
          </div>
        </div>
      </div>
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
