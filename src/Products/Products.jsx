import style from './Products.module.sass';
import bread from '../Page/Sale/Breadcrumbs/Breadcrumbs.module.sass';

const Products = ({ products }) => {
  return (
    <div className={style.products}>
      {products.map(({ sale, img, type, price, subtitle, id, title }) => (
        <div className={style.product} key={id}>
          <div
            className={style.product__img}
            style={{ background: 'url(' + img + ') center/100% no-repeat' }}>
            {sale ? <div className={style.sale}>-{sale}</div> : ''}
          </div>
          {title ? <div className={style.title}>{title}</div> : ''}
          {type ? <div className={bread.breadcrumb + ' ' + style.type}>{type}</div> : ''}
          {price ? <div className={style.price}>{price}</div> : ''}
          {subtitle ? <div className={style.subtitle}>{subtitle}</div> : ''}
        </div>
      ))}
    </div>
  );
};
export default Products;
