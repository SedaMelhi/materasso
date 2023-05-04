import style from './Products.module.sass';
import bread from '../Page/Sale/Breadcrumbs/Breadcrumbs.module.sass';
import { useDispatch } from 'react-redux';
import { setFilters, setProduct } from './../redux/catalogSlice/catalogSlice';
import { Link } from 'react-router-dom';

const Products = ({ products, catalog }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.products}>
      {products.map(
        ({ sale, images, image, subcategory, price, short_description, id, name_category }) => (
          <Link
            to={catalog ? '../catalog' : '../product'}
            key={id}
            onClick={
              catalog
                ? () => {
                    dispatch({ categoryId: id, name: name_category, subId: false, page: 1 });
                  }
                : () => {
                    dispatch({ categoryId: id, name: '', subId: false, page: 1 });
                  }
            }>
            <div className={style.product}>
              {images && (
                <div
                  className={style.product__img}
                  style={{ background: 'url(' + images[0].image + ') center/100% no-repeat' }}>
                  {sale ? <div className={style.sale}>-{sale}</div> : ''}
                </div>
              )}
              {image && (
                <div
                  className={style.product__img}
                  style={{ background: 'url(' + image + ') center/100% no-repeat' }}>
                  {sale ? <div className={style.sale}>-{sale}</div> : ''}
                </div>
              )}
              {name_category ? <div className={style.title}>{name_category}</div> : ''}
              {subcategory
                ? subcategory.map(({ name, id }) => (
                    <div key={id} className={bread.breadcrumb + ' ' + style.type}>
                      {name}
                    </div>
                  ))
                : ''}
              {price ? <div className={style.price}>{price}</div> : ''}
              {short_description ? <div className={style.subtitle}>{short_description}</div> : ''}
            </div>
          </Link>
        ),
      )}
    </div>
  );
};
export default Products;
