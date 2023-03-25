import { Link } from 'react-router-dom';

import logo from '../assets/img/logo-footer.svg';

import style from './Footer.module.sass';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className={style.footer}>
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="Materasso" />
            </Link>
          </div>
          <div className={style.footer__right}>
            <div className={style.column}>
              <Link to="/" className={style.link}>
                Каталог
              </Link>
              <Link to="/" className={style.link}>
                Коллекции
              </Link>
              <Link to="/" className={style.link}>
                Покупателям
              </Link>
            </div>
            <div className={style.column}>
              <Link to="/" className={style.link}>
                Партнерам
              </Link>
              <Link to="/" className={style.link}>
                О нас
              </Link>
              <Link to="/" className={style.link}>
                Контакты
              </Link>
            </div>
            <div className={style.column}>
              <Link to="/" className={style.link}>
                alievmagomed@info.com
              </Link>
              <Link to="/" className={style.link}>
                + 7 (929) 898 - 15 - 65
              </Link>
              <div className={style.networks}>
                <a href="#" className={style.network + ' ' + style.inst}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.64642 0.71026C5.42842 0.67426 5.67776 0.66626 7.66976 0.66626C9.66176 0.66626 9.91109 0.674926 10.6924 0.71026C11.4738 0.745593 12.0071 0.87026 12.4738 1.05093C12.9624 1.23559 13.4058 1.52426 13.7724 1.89759C14.1458 2.26359 14.4338 2.70626 14.6178 3.19559C14.7991 3.66226 14.9231 4.19559 14.9591 4.97559C14.9951 5.75893 15.0031 6.00826 15.0031 7.99959C15.0031 9.99159 14.9944 10.2409 14.9591 11.0229C14.9238 11.8029 14.7991 12.3363 14.6178 12.8029C14.4338 13.2923 14.1453 13.7357 13.7724 14.1023C13.4058 14.4756 12.9624 14.7636 12.4738 14.9476C12.0071 15.1289 11.4738 15.2529 10.6938 15.2889C9.91109 15.3249 9.66176 15.3329 7.66976 15.3329C5.67776 15.3329 5.42842 15.3243 4.64642 15.2889C3.86643 15.2536 3.33309 15.1289 2.86643 14.9476C2.37704 14.7636 1.93364 14.4751 1.56709 14.1023C1.19401 13.736 0.905302 13.2929 0.721092 12.8036C0.540426 12.3369 0.416426 11.8036 0.380426 11.0236C0.344426 10.2403 0.336426 9.99093 0.336426 7.99959C0.336426 6.00759 0.345092 5.75826 0.380426 4.97693C0.415759 4.19559 0.540426 3.66226 0.721092 3.19559C0.905574 2.70631 1.1945 2.26314 1.56776 1.89693C1.93379 1.52393 2.37674 1.23522 2.86576 1.05093C3.33243 0.87026 3.86576 0.74626 4.64576 0.71026H4.64642ZM10.6331 2.03026C9.85976 1.99493 9.62776 1.98759 7.66976 1.98759C5.71176 1.98759 5.47976 1.99493 4.70642 2.03026C3.99109 2.06293 3.60309 2.18226 3.34443 2.28293C3.00243 2.41626 2.75776 2.57426 2.50109 2.83093C2.25779 3.06763 2.07055 3.35578 1.95309 3.67426C1.85243 3.93293 1.73309 4.32093 1.70043 5.03626C1.66509 5.80959 1.65776 6.04159 1.65776 7.99959C1.65776 9.95759 1.66509 10.1896 1.70043 10.9629C1.73309 11.6783 1.85243 12.0663 1.95309 12.3249C2.07043 12.6429 2.25776 12.9316 2.50109 13.1683C2.73776 13.4116 3.02643 13.5989 3.34443 13.7163C3.60309 13.8169 3.99109 13.9363 4.70642 13.9689C5.47976 14.0043 5.71109 14.0116 7.66976 14.0116C9.62842 14.0116 9.85976 14.0043 10.6331 13.9689C11.3484 13.9363 11.7364 13.8169 11.9951 13.7163C12.3371 13.5829 12.5818 13.4249 12.8384 13.1683C13.0818 12.9316 13.2691 12.6429 13.3864 12.3249C13.4871 12.0663 13.6064 11.6783 13.6391 10.9629C13.6744 10.1896 13.6818 9.95759 13.6818 7.99959C13.6818 6.04159 13.6744 5.80959 13.6391 5.03626C13.6064 4.32093 13.4871 3.93293 13.3864 3.67426C13.2531 3.33226 13.0951 3.08759 12.8384 2.83093C12.6017 2.58764 12.3136 2.4004 11.9951 2.28293C11.7364 2.18226 11.3484 2.06293 10.6331 2.03026ZM6.73309 10.2603C7.2562 10.478 7.83868 10.5074 8.38104 10.3434C8.92341 10.1794 9.39202 9.8322 9.70683 9.36109C10.0216 8.88997 10.1631 8.32417 10.1071 7.76033C10.0511 7.19649 9.80109 6.66958 9.39976 6.26959C9.14392 6.01391 8.83457 5.81813 8.49398 5.69636C8.15339 5.57458 7.79004 5.52983 7.43009 5.56534C7.07013 5.60084 6.72253 5.71571 6.41229 5.90168C6.10206 6.08765 5.83692 6.34009 5.63596 6.64083C5.435 6.94157 5.30322 7.28312 5.2501 7.6409C5.19699 7.99868 5.22386 8.36379 5.32878 8.70994C5.43371 9.05609 5.61408 9.37467 5.8569 9.64274C6.09973 9.91082 6.39897 10.1217 6.73309 10.2603ZM5.00442 5.33426C5.35444 4.98424 5.76997 4.70659 6.22729 4.51717C6.68461 4.32774 7.17476 4.23024 7.66976 4.23024C8.16476 4.23024 8.65491 4.32774 9.11222 4.51717C9.56954 4.70659 9.98507 4.98424 10.3351 5.33426C10.6851 5.68428 10.9628 6.09981 11.1522 6.55713C11.3416 7.01444 11.4391 7.5046 11.4391 7.99959C11.4391 8.49459 11.3416 8.98474 11.1522 9.44206C10.9628 9.89938 10.6851 10.3149 10.3351 10.6649C9.6282 11.3718 8.66945 11.7689 7.66976 11.7689C6.67006 11.7689 5.71131 11.3718 5.00442 10.6649C4.29753 9.95804 3.90041 8.99929 3.90041 7.99959C3.90041 6.9999 4.29753 6.04115 5.00442 5.33426ZM12.2751 4.79159C12.3618 4.70977 12.4313 4.61138 12.4793 4.50224C12.5273 4.3931 12.553 4.27544 12.5547 4.15621C12.5564 4.03699 12.5342 3.91862 12.4894 3.80813C12.4446 3.69764 12.378 3.59727 12.2937 3.51295C12.2094 3.42864 12.109 3.3621 11.9986 3.31727C11.8881 3.27245 11.7697 3.25024 11.6505 3.25198C11.5312 3.25372 11.4136 3.27936 11.3044 3.32739C11.1953 3.37542 11.0969 3.44486 11.0151 3.53159C10.856 3.70028 10.7688 3.92434 10.7722 4.15621C10.7756 4.38809 10.8692 4.60951 11.0332 4.77349C11.1972 4.93746 11.4186 5.03108 11.6505 5.03446C11.8823 5.03784 12.1064 4.95072 12.2751 4.79159Z"
                    />
                  </svg>
                </a>
                <a href="#" className={style.network + ' ' + style.telega}>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4455 0.478368L0.625512 5.03637C-0.181154 5.36037 -0.176488 5.81037 0.477512 6.01103L3.51218 6.9577L10.5335 2.5277C10.8655 2.3257 11.1688 2.43437 10.9195 2.6557L5.23085 7.7897H5.22951L5.23085 7.79037L5.02151 10.9184C5.32818 10.9184 5.46351 10.7777 5.63551 10.6117L7.10951 9.17837L10.1755 11.443C10.7408 11.7544 11.1468 11.5944 11.2875 10.9197L13.3002 1.43437C13.5062 0.608368 12.9848 0.234368 12.4455 0.478368Z" />
                  </svg>
                </a>
                <a href="#" className={style.network + ' ' + style.in}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.9904 3.79819C2.796 3.79819 3.44907 3.14513 3.44907 2.33953C3.44907 1.53393 2.796 0.880859 1.9904 0.880859C1.18481 0.880859 0.531738 1.53393 0.531738 2.33953C0.531738 3.14513 1.18481 3.79819 1.9904 3.79819Z" />
                    <path d="M4.82367 4.90361V12.9963H7.33634V8.99428C7.33634 7.93828 7.535 6.91561 8.84434 6.91561C10.1357 6.91561 10.1517 8.12295 10.1517 9.06095V12.9969H12.6657V8.55895C12.6657 6.37895 12.1963 4.70361 9.64834 4.70361C8.425 4.70361 7.605 5.37495 7.26967 6.01028H7.23567V4.90361H4.82367ZM0.729004 4.90361H3.24567V12.9963H0.729004V4.90361Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
