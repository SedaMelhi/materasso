import ContentLoader from 'react-content-loader';
import Products from '../../../Products/Products';
import style from '../Catalog.module.sass';

const CatalogData = ({ catalog, load }) => {
  return (
    <div>
      {load ? (
        catalog.count > 0 ? (
          <Products products={catalog.results} />
        ) : (
          <div className={style.none}>Товара нет в наличии...</div>
        )
      ) : (
        <div className={style.skeleton}>
          {[...new Array(9)].map((item, i) => (
            <ContentLoader
              speed={2}
              key={i}
              width={'100%'}
              height={'100%'}
              viewBox="0 0 420 505"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="0" y="0" rx="16" ry="16" width="417" height="502" />
              <rect x="31" y="51" rx="0" ry="0" width="166" height="114" />
            </ContentLoader>
          ))}
        </div>
      )}
    </div>
  );
};
export default CatalogData;
