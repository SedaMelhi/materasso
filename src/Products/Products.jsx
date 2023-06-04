import style from './Products.module.sass';
import bread from '../Page/Sale/Breadcrumbs/Breadcrumbs.module.sass';
import { useDispatch } from 'react-redux';
import { setFilters } from './../redux/catalogSlice/catalogSlice';
import { setProductId } from './../redux/productSlice/productSlice';
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
                    dispatch(
                      setFilters({
                        categoryId: id,
                        name: name_category,
                        subId: false,
                        page: 1,
                        sort: '',
                      }),
                    );
                  }
                : () => {
                    dispatch(setProductId(id));
                  }
            }>
            <div className={style.product}>
              {images &&
                (images[0] ? (
                  <div
                    className={style.product__img}
                    style={{ background: 'url(' + images[0].image + ') center/100% no-repeat' }}>
                    {sale ? (
                      <div className={style.sale}>-{sale}</div>
                    ) : (
                      <div className={style.basket + ' ' + style.basket__right}>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.30922 4.9674L4.34699 5.4264H4.80754H23.2797C23.4066 5.4264 23.5416 5.48991 23.6379 5.62445C23.7359 5.76149 23.7751 5.94919 23.7337 6.13007L21.7622 14.7333C21.7622 14.7333 21.7622 14.7333 21.7622 14.7333C21.7029 14.9919 21.5109 15.1346 21.3333 15.146L21.3332 15.146L5.82726 16.1403L5.14367 16.1841L5.39377 16.8218C5.73651 17.6957 6.54801 18.3312 7.51575 18.3312H18.3515C19.6572 18.3312 20.7931 19.5052 20.7931 21.0406C20.7931 22.576 19.6572 23.75 18.3515 23.75C17.0457 23.75 15.9099 22.576 15.9099 21.0406C15.9099 20.7114 15.9632 20.397 16.0599 20.1063L16.2789 19.4484H15.5855H10.2752H9.58189L9.80072 20.1062C9.89745 20.397 9.95078 20.7115 9.95078 21.0406C9.95078 22.576 8.81492 23.75 7.50919 23.75C6.20351 23.75 5.06766 22.576 5.06766 21.0406C5.06766 20.4018 5.26842 19.8183 5.59908 19.3575L5.86543 18.9864L5.51982 18.6877C4.86287 18.1199 4.40006 17.2716 4.29524 16.2807L4.29501 16.2786L4.29379 16.2656L4.29376 16.2654L4.25488 15.793L4.25335 15.7743L4.25042 15.7558C4.24649 15.731 4.24414 15.7109 4.24299 15.6936L4.24301 15.6902L4.24306 15.6831L4.24297 15.6614L4.24272 15.6447L4.24135 15.628L3.17786 2.70118L3.14009 2.24218H2.67954H1.59526C1.37566 2.24218 1.125 2.03399 1.125 1.68359C1.125 1.33319 1.37566 1.125 1.59526 1.125H3.56658C3.77327 1.125 4.00805 1.30684 4.03464 1.62997C4.03464 1.62997 4.03464 1.62997 4.03464 1.62998L4.30922 4.9674Z"
                            stroke="#131F2E"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={style.product__img}>
                    {sale ? (
                      <div className={style.sale}>-{sale}</div>
                    ) : (
                      <div className={style.basket + ' ' + style.basket__left}>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.30922 4.9674L4.34699 5.4264H4.80754H23.2797C23.4066 5.4264 23.5416 5.48991 23.6379 5.62445C23.7359 5.76149 23.7751 5.94919 23.7337 6.13007L21.7622 14.7333C21.7622 14.7333 21.7622 14.7333 21.7622 14.7333C21.7029 14.9919 21.5109 15.1346 21.3333 15.146L21.3332 15.146L5.82726 16.1403L5.14367 16.1841L5.39377 16.8218C5.73651 17.6957 6.54801 18.3312 7.51575 18.3312H18.3515C19.6572 18.3312 20.7931 19.5052 20.7931 21.0406C20.7931 22.576 19.6572 23.75 18.3515 23.75C17.0457 23.75 15.9099 22.576 15.9099 21.0406C15.9099 20.7114 15.9632 20.397 16.0599 20.1063L16.2789 19.4484H15.5855H10.2752H9.58189L9.80072 20.1062C9.89745 20.397 9.95078 20.7115 9.95078 21.0406C9.95078 22.576 8.81492 23.75 7.50919 23.75C6.20351 23.75 5.06766 22.576 5.06766 21.0406C5.06766 20.4018 5.26842 19.8183 5.59908 19.3575L5.86543 18.9864L5.51982 18.6877C4.86287 18.1199 4.40006 17.2716 4.29524 16.2807L4.29501 16.2786L4.29379 16.2656L4.29376 16.2654L4.25488 15.793L4.25335 15.7743L4.25042 15.7558C4.24649 15.731 4.24414 15.7109 4.24299 15.6936L4.24301 15.6902L4.24306 15.6831L4.24297 15.6614L4.24272 15.6447L4.24135 15.628L3.17786 2.70118L3.14009 2.24218H2.67954H1.59526C1.37566 2.24218 1.125 2.03399 1.125 1.68359C1.125 1.33319 1.37566 1.125 1.59526 1.125H3.56658C3.77327 1.125 4.00805 1.30684 4.03464 1.62997C4.03464 1.62997 4.03464 1.62997 4.03464 1.62998L4.30922 4.9674Z"
                            stroke="#131F2E"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              {image ? (
                <div
                  className={style.product__img}
                  style={{ background: 'url(' + image + ') center/100% no-repeat' }}>
                  {sale ? <div className={style.sale}>-{sale}</div> : ''}
                </div>
              ) : (
                ''
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
