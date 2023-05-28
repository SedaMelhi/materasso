import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './Collection.module.sass';

const SliderLoader = () => (
  <div className={style.collection}>
    <ContentLoader
      speed={2}
      width={1300}
      height={387}
      viewBox="0 0 1300 387"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...[]}>
      <rect x="0" y="0" rx="25" ry="25" width="746" height="387" />
      <rect className={style.mobile__none} x="800" y="0" rx="8" ry="8" width="274" height="32" />
      <rect className={style.mobile__none} x="800" y="60" rx="6" ry="6" width="82" height="20" />
      <rect
        className={style.mobile__none}
        x="800"
        y="108"
        rx="25"
        ry="25"
        width="477"
        height="160"
      />
    </ContentLoader>
  </div>
);

export default SliderLoader;
