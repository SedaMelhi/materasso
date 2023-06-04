import style from './Contacts.module.sass';
import Path from '../../components/Path/Path';
const Contacts = () => {
  return (
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'Контакты', link: '' },
        ]}
      />
      <h2 className={style.title}>Контакты</h2>

      <div className={style.subtitle}>Телефон</div>
      <p className={style.text}>
        <a href="tel:+79639811288">+7 (963) 981-12-88</a> <br />
        <a href="tel:+79635873457">+7 (963) 587-34-57</a>
      </p>
      <div className={style.subtitle}>E-mail:</div>
      <p className={style.text}>
        <a href="mailto:sadogroup@mail.ru">sadogroup@mail.ru</a>
      </p>
      <div className={style.subtitle}>Режим работы</div>
      <p className={style.text}>пн-вс: 10:00 - 18:00</p>
      <div className={style.subtitle}>Мы в соцсетях:</div>
      <p className={style.link}>
        <a
          href="https://instagram.com/materasso_official?igshid=MzRlODBiNWFlZA=="
          className={style.network + ' ' + style.inst}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64642 0.71026C5.42842 0.67426 5.67776 0.66626 7.66976 0.66626C9.66176 0.66626 9.91109 0.674926 10.6924 0.71026C11.4738 0.745593 12.0071 0.87026 12.4738 1.05093C12.9624 1.23559 13.4058 1.52426 13.7724 1.89759C14.1458 2.26359 14.4338 2.70626 14.6178 3.19559C14.7991 3.66226 14.9231 4.19559 14.9591 4.97559C14.9951 5.75893 15.0031 6.00826 15.0031 7.99959C15.0031 9.99159 14.9944 10.2409 14.9591 11.0229C14.9238 11.8029 14.7991 12.3363 14.6178 12.8029C14.4338 13.2923 14.1453 13.7357 13.7724 14.1023C13.4058 14.4756 12.9624 14.7636 12.4738 14.9476C12.0071 15.1289 11.4738 15.2529 10.6938 15.2889C9.91109 15.3249 9.66176 15.3329 7.66976 15.3329C5.67776 15.3329 5.42842 15.3243 4.64642 15.2889C3.86643 15.2536 3.33309 15.1289 2.86643 14.9476C2.37704 14.7636 1.93364 14.4751 1.56709 14.1023C1.19401 13.736 0.905302 13.2929 0.721092 12.8036C0.540426 12.3369 0.416426 11.8036 0.380426 11.0236C0.344426 10.2403 0.336426 9.99093 0.336426 7.99959C0.336426 6.00759 0.345092 5.75826 0.380426 4.97693C0.415759 4.19559 0.540426 3.66226 0.721092 3.19559C0.905574 2.70631 1.1945 2.26314 1.56776 1.89693C1.93379 1.52393 2.37674 1.23522 2.86576 1.05093C3.33243 0.87026 3.86576 0.74626 4.64576 0.71026H4.64642ZM10.6331 2.03026C9.85976 1.99493 9.62776 1.98759 7.66976 1.98759C5.71176 1.98759 5.47976 1.99493 4.70642 2.03026C3.99109 2.06293 3.60309 2.18226 3.34443 2.28293C3.00243 2.41626 2.75776 2.57426 2.50109 2.83093C2.25779 3.06763 2.07055 3.35578 1.95309 3.67426C1.85243 3.93293 1.73309 4.32093 1.70043 5.03626C1.66509 5.80959 1.65776 6.04159 1.65776 7.99959C1.65776 9.95759 1.66509 10.1896 1.70043 10.9629C1.73309 11.6783 1.85243 12.0663 1.95309 12.3249C2.07043 12.6429 2.25776 12.9316 2.50109 13.1683C2.73776 13.4116 3.02643 13.5989 3.34443 13.7163C3.60309 13.8169 3.99109 13.9363 4.70642 13.9689C5.47976 14.0043 5.71109 14.0116 7.66976 14.0116C9.62842 14.0116 9.85976 14.0043 10.6331 13.9689C11.3484 13.9363 11.7364 13.8169 11.9951 13.7163C12.3371 13.5829 12.5818 13.4249 12.8384 13.1683C13.0818 12.9316 13.2691 12.6429 13.3864 12.3249C13.4871 12.0663 13.6064 11.6783 13.6391 10.9629C13.6744 10.1896 13.6818 9.95759 13.6818 7.99959C13.6818 6.04159 13.6744 5.80959 13.6391 5.03626C13.6064 4.32093 13.4871 3.93293 13.3864 3.67426C13.2531 3.33226 13.0951 3.08759 12.8384 2.83093C12.6017 2.58764 12.3136 2.4004 11.9951 2.28293C11.7364 2.18226 11.3484 2.06293 10.6331 2.03026ZM6.73309 10.2603C7.2562 10.478 7.83868 10.5074 8.38104 10.3434C8.92341 10.1794 9.39202 9.8322 9.70683 9.36109C10.0216 8.88997 10.1631 8.32417 10.1071 7.76033C10.0511 7.19649 9.80109 6.66958 9.39976 6.26959C9.14392 6.01391 8.83457 5.81813 8.49398 5.69636C8.15339 5.57458 7.79004 5.52983 7.43009 5.56534C7.07013 5.60084 6.72253 5.71571 6.41229 5.90168C6.10206 6.08765 5.83692 6.34009 5.63596 6.64083C5.435 6.94157 5.30322 7.28312 5.2501 7.6409C5.19699 7.99868 5.22386 8.36379 5.32878 8.70994C5.43371 9.05609 5.61408 9.37467 5.8569 9.64274C6.09973 9.91082 6.39897 10.1217 6.73309 10.2603ZM5.00442 5.33426C5.35444 4.98424 5.76997 4.70659 6.22729 4.51717C6.68461 4.32774 7.17476 4.23024 7.66976 4.23024C8.16476 4.23024 8.65491 4.32774 9.11222 4.51717C9.56954 4.70659 9.98507 4.98424 10.3351 5.33426C10.6851 5.68428 10.9628 6.09981 11.1522 6.55713C11.3416 7.01444 11.4391 7.5046 11.4391 7.99959C11.4391 8.49459 11.3416 8.98474 11.1522 9.44206C10.9628 9.89938 10.6851 10.3149 10.3351 10.6649C9.6282 11.3718 8.66945 11.7689 7.66976 11.7689C6.67006 11.7689 5.71131 11.3718 5.00442 10.6649C4.29753 9.95804 3.90041 8.99929 3.90041 7.99959C3.90041 6.9999 4.29753 6.04115 5.00442 5.33426ZM12.2751 4.79159C12.3618 4.70977 12.4313 4.61138 12.4793 4.50224C12.5273 4.3931 12.553 4.27544 12.5547 4.15621C12.5564 4.03699 12.5342 3.91862 12.4894 3.80813C12.4446 3.69764 12.378 3.59727 12.2937 3.51295C12.2094 3.42864 12.109 3.3621 11.9986 3.31727C11.8881 3.27245 11.7697 3.25024 11.6505 3.25198C11.5312 3.25372 11.4136 3.27936 11.3044 3.32739C11.1953 3.37542 11.0969 3.44486 11.0151 3.53159C10.856 3.70028 10.7688 3.92434 10.7722 4.15621C10.7756 4.38809 10.8692 4.60951 11.0332 4.77349C11.1972 4.93746 11.4186 5.03108 11.6505 5.03446C11.8823 5.03784 12.1064 4.95072 12.2751 4.79159Z"
            />
          </svg>
          materasso_official
        </a>
      </p>
      <p className={style.link}>
        <a
          href="https://instagram.com/materasso_astana?igshid=MzRlODBiNWFlZA=="
          className={style.network + ' ' + style.inst}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64642 0.71026C5.42842 0.67426 5.67776 0.66626 7.66976 0.66626C9.66176 0.66626 9.91109 0.674926 10.6924 0.71026C11.4738 0.745593 12.0071 0.87026 12.4738 1.05093C12.9624 1.23559 13.4058 1.52426 13.7724 1.89759C14.1458 2.26359 14.4338 2.70626 14.6178 3.19559C14.7991 3.66226 14.9231 4.19559 14.9591 4.97559C14.9951 5.75893 15.0031 6.00826 15.0031 7.99959C15.0031 9.99159 14.9944 10.2409 14.9591 11.0229C14.9238 11.8029 14.7991 12.3363 14.6178 12.8029C14.4338 13.2923 14.1453 13.7357 13.7724 14.1023C13.4058 14.4756 12.9624 14.7636 12.4738 14.9476C12.0071 15.1289 11.4738 15.2529 10.6938 15.2889C9.91109 15.3249 9.66176 15.3329 7.66976 15.3329C5.67776 15.3329 5.42842 15.3243 4.64642 15.2889C3.86643 15.2536 3.33309 15.1289 2.86643 14.9476C2.37704 14.7636 1.93364 14.4751 1.56709 14.1023C1.19401 13.736 0.905302 13.2929 0.721092 12.8036C0.540426 12.3369 0.416426 11.8036 0.380426 11.0236C0.344426 10.2403 0.336426 9.99093 0.336426 7.99959C0.336426 6.00759 0.345092 5.75826 0.380426 4.97693C0.415759 4.19559 0.540426 3.66226 0.721092 3.19559C0.905574 2.70631 1.1945 2.26314 1.56776 1.89693C1.93379 1.52393 2.37674 1.23522 2.86576 1.05093C3.33243 0.87026 3.86576 0.74626 4.64576 0.71026H4.64642ZM10.6331 2.03026C9.85976 1.99493 9.62776 1.98759 7.66976 1.98759C5.71176 1.98759 5.47976 1.99493 4.70642 2.03026C3.99109 2.06293 3.60309 2.18226 3.34443 2.28293C3.00243 2.41626 2.75776 2.57426 2.50109 2.83093C2.25779 3.06763 2.07055 3.35578 1.95309 3.67426C1.85243 3.93293 1.73309 4.32093 1.70043 5.03626C1.66509 5.80959 1.65776 6.04159 1.65776 7.99959C1.65776 9.95759 1.66509 10.1896 1.70043 10.9629C1.73309 11.6783 1.85243 12.0663 1.95309 12.3249C2.07043 12.6429 2.25776 12.9316 2.50109 13.1683C2.73776 13.4116 3.02643 13.5989 3.34443 13.7163C3.60309 13.8169 3.99109 13.9363 4.70642 13.9689C5.47976 14.0043 5.71109 14.0116 7.66976 14.0116C9.62842 14.0116 9.85976 14.0043 10.6331 13.9689C11.3484 13.9363 11.7364 13.8169 11.9951 13.7163C12.3371 13.5829 12.5818 13.4249 12.8384 13.1683C13.0818 12.9316 13.2691 12.6429 13.3864 12.3249C13.4871 12.0663 13.6064 11.6783 13.6391 10.9629C13.6744 10.1896 13.6818 9.95759 13.6818 7.99959C13.6818 6.04159 13.6744 5.80959 13.6391 5.03626C13.6064 4.32093 13.4871 3.93293 13.3864 3.67426C13.2531 3.33226 13.0951 3.08759 12.8384 2.83093C12.6017 2.58764 12.3136 2.4004 11.9951 2.28293C11.7364 2.18226 11.3484 2.06293 10.6331 2.03026ZM6.73309 10.2603C7.2562 10.478 7.83868 10.5074 8.38104 10.3434C8.92341 10.1794 9.39202 9.8322 9.70683 9.36109C10.0216 8.88997 10.1631 8.32417 10.1071 7.76033C10.0511 7.19649 9.80109 6.66958 9.39976 6.26959C9.14392 6.01391 8.83457 5.81813 8.49398 5.69636C8.15339 5.57458 7.79004 5.52983 7.43009 5.56534C7.07013 5.60084 6.72253 5.71571 6.41229 5.90168C6.10206 6.08765 5.83692 6.34009 5.63596 6.64083C5.435 6.94157 5.30322 7.28312 5.2501 7.6409C5.19699 7.99868 5.22386 8.36379 5.32878 8.70994C5.43371 9.05609 5.61408 9.37467 5.8569 9.64274C6.09973 9.91082 6.39897 10.1217 6.73309 10.2603ZM5.00442 5.33426C5.35444 4.98424 5.76997 4.70659 6.22729 4.51717C6.68461 4.32774 7.17476 4.23024 7.66976 4.23024C8.16476 4.23024 8.65491 4.32774 9.11222 4.51717C9.56954 4.70659 9.98507 4.98424 10.3351 5.33426C10.6851 5.68428 10.9628 6.09981 11.1522 6.55713C11.3416 7.01444 11.4391 7.5046 11.4391 7.99959C11.4391 8.49459 11.3416 8.98474 11.1522 9.44206C10.9628 9.89938 10.6851 10.3149 10.3351 10.6649C9.6282 11.3718 8.66945 11.7689 7.66976 11.7689C6.67006 11.7689 5.71131 11.3718 5.00442 10.6649C4.29753 9.95804 3.90041 8.99929 3.90041 7.99959C3.90041 6.9999 4.29753 6.04115 5.00442 5.33426ZM12.2751 4.79159C12.3618 4.70977 12.4313 4.61138 12.4793 4.50224C12.5273 4.3931 12.553 4.27544 12.5547 4.15621C12.5564 4.03699 12.5342 3.91862 12.4894 3.80813C12.4446 3.69764 12.378 3.59727 12.2937 3.51295C12.2094 3.42864 12.109 3.3621 11.9986 3.31727C11.8881 3.27245 11.7697 3.25024 11.6505 3.25198C11.5312 3.25372 11.4136 3.27936 11.3044 3.32739C11.1953 3.37542 11.0969 3.44486 11.0151 3.53159C10.856 3.70028 10.7688 3.92434 10.7722 4.15621C10.7756 4.38809 10.8692 4.60951 11.0332 4.77349C11.1972 4.93746 11.4186 5.03108 11.6505 5.03446C11.8823 5.03784 12.1064 4.95072 12.2751 4.79159Z"
            />
          </svg>
          materasso_astana
        </a>
      </p>
      <p className={style.link}>
        <a
          href="https://instagram.com/elgrozny?igshid=MzRlODBiNWFlZA=="
          className={style.network + ' ' + style.inst}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64642 0.71026C5.42842 0.67426 5.67776 0.66626 7.66976 0.66626C9.66176 0.66626 9.91109 0.674926 10.6924 0.71026C11.4738 0.745593 12.0071 0.87026 12.4738 1.05093C12.9624 1.23559 13.4058 1.52426 13.7724 1.89759C14.1458 2.26359 14.4338 2.70626 14.6178 3.19559C14.7991 3.66226 14.9231 4.19559 14.9591 4.97559C14.9951 5.75893 15.0031 6.00826 15.0031 7.99959C15.0031 9.99159 14.9944 10.2409 14.9591 11.0229C14.9238 11.8029 14.7991 12.3363 14.6178 12.8029C14.4338 13.2923 14.1453 13.7357 13.7724 14.1023C13.4058 14.4756 12.9624 14.7636 12.4738 14.9476C12.0071 15.1289 11.4738 15.2529 10.6938 15.2889C9.91109 15.3249 9.66176 15.3329 7.66976 15.3329C5.67776 15.3329 5.42842 15.3243 4.64642 15.2889C3.86643 15.2536 3.33309 15.1289 2.86643 14.9476C2.37704 14.7636 1.93364 14.4751 1.56709 14.1023C1.19401 13.736 0.905302 13.2929 0.721092 12.8036C0.540426 12.3369 0.416426 11.8036 0.380426 11.0236C0.344426 10.2403 0.336426 9.99093 0.336426 7.99959C0.336426 6.00759 0.345092 5.75826 0.380426 4.97693C0.415759 4.19559 0.540426 3.66226 0.721092 3.19559C0.905574 2.70631 1.1945 2.26314 1.56776 1.89693C1.93379 1.52393 2.37674 1.23522 2.86576 1.05093C3.33243 0.87026 3.86576 0.74626 4.64576 0.71026H4.64642ZM10.6331 2.03026C9.85976 1.99493 9.62776 1.98759 7.66976 1.98759C5.71176 1.98759 5.47976 1.99493 4.70642 2.03026C3.99109 2.06293 3.60309 2.18226 3.34443 2.28293C3.00243 2.41626 2.75776 2.57426 2.50109 2.83093C2.25779 3.06763 2.07055 3.35578 1.95309 3.67426C1.85243 3.93293 1.73309 4.32093 1.70043 5.03626C1.66509 5.80959 1.65776 6.04159 1.65776 7.99959C1.65776 9.95759 1.66509 10.1896 1.70043 10.9629C1.73309 11.6783 1.85243 12.0663 1.95309 12.3249C2.07043 12.6429 2.25776 12.9316 2.50109 13.1683C2.73776 13.4116 3.02643 13.5989 3.34443 13.7163C3.60309 13.8169 3.99109 13.9363 4.70642 13.9689C5.47976 14.0043 5.71109 14.0116 7.66976 14.0116C9.62842 14.0116 9.85976 14.0043 10.6331 13.9689C11.3484 13.9363 11.7364 13.8169 11.9951 13.7163C12.3371 13.5829 12.5818 13.4249 12.8384 13.1683C13.0818 12.9316 13.2691 12.6429 13.3864 12.3249C13.4871 12.0663 13.6064 11.6783 13.6391 10.9629C13.6744 10.1896 13.6818 9.95759 13.6818 7.99959C13.6818 6.04159 13.6744 5.80959 13.6391 5.03626C13.6064 4.32093 13.4871 3.93293 13.3864 3.67426C13.2531 3.33226 13.0951 3.08759 12.8384 2.83093C12.6017 2.58764 12.3136 2.4004 11.9951 2.28293C11.7364 2.18226 11.3484 2.06293 10.6331 2.03026ZM6.73309 10.2603C7.2562 10.478 7.83868 10.5074 8.38104 10.3434C8.92341 10.1794 9.39202 9.8322 9.70683 9.36109C10.0216 8.88997 10.1631 8.32417 10.1071 7.76033C10.0511 7.19649 9.80109 6.66958 9.39976 6.26959C9.14392 6.01391 8.83457 5.81813 8.49398 5.69636C8.15339 5.57458 7.79004 5.52983 7.43009 5.56534C7.07013 5.60084 6.72253 5.71571 6.41229 5.90168C6.10206 6.08765 5.83692 6.34009 5.63596 6.64083C5.435 6.94157 5.30322 7.28312 5.2501 7.6409C5.19699 7.99868 5.22386 8.36379 5.32878 8.70994C5.43371 9.05609 5.61408 9.37467 5.8569 9.64274C6.09973 9.91082 6.39897 10.1217 6.73309 10.2603ZM5.00442 5.33426C5.35444 4.98424 5.76997 4.70659 6.22729 4.51717C6.68461 4.32774 7.17476 4.23024 7.66976 4.23024C8.16476 4.23024 8.65491 4.32774 9.11222 4.51717C9.56954 4.70659 9.98507 4.98424 10.3351 5.33426C10.6851 5.68428 10.9628 6.09981 11.1522 6.55713C11.3416 7.01444 11.4391 7.5046 11.4391 7.99959C11.4391 8.49459 11.3416 8.98474 11.1522 9.44206C10.9628 9.89938 10.6851 10.3149 10.3351 10.6649C9.6282 11.3718 8.66945 11.7689 7.66976 11.7689C6.67006 11.7689 5.71131 11.3718 5.00442 10.6649C4.29753 9.95804 3.90041 8.99929 3.90041 7.99959C3.90041 6.9999 4.29753 6.04115 5.00442 5.33426ZM12.2751 4.79159C12.3618 4.70977 12.4313 4.61138 12.4793 4.50224C12.5273 4.3931 12.553 4.27544 12.5547 4.15621C12.5564 4.03699 12.5342 3.91862 12.4894 3.80813C12.4446 3.69764 12.378 3.59727 12.2937 3.51295C12.2094 3.42864 12.109 3.3621 11.9986 3.31727C11.8881 3.27245 11.7697 3.25024 11.6505 3.25198C11.5312 3.25372 11.4136 3.27936 11.3044 3.32739C11.1953 3.37542 11.0969 3.44486 11.0151 3.53159C10.856 3.70028 10.7688 3.92434 10.7722 4.15621C10.7756 4.38809 10.8692 4.60951 11.0332 4.77349C11.1972 4.93746 11.4186 5.03108 11.6505 5.03446C11.8823 5.03784 12.1064 4.95072 12.2751 4.79159Z"
            />
          </svg>
          elgrozny
        </a>
      </p>
      <p className={style.link}>
        <a href="https://t.me/elgrozny" className={style.network + ' ' + style.telega}>
          <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4455 0.478368L0.625512 5.03637C-0.181154 5.36037 -0.176488 5.81037 0.477512 6.01103L3.51218 6.9577L10.5335 2.5277C10.8655 2.3257 11.1688 2.43437 10.9195 2.6557L5.23085 7.7897H5.22951L5.23085 7.79037L5.02151 10.9184C5.32818 10.9184 5.46351 10.7777 5.63551 10.6117L7.10951 9.17837L10.1755 11.443C10.7408 11.7544 11.1468 11.5944 11.2875 10.9197L13.3002 1.43437C13.5062 0.608368 12.9848 0.234368 12.4455 0.478368Z" />
          </svg>
          elgrozny
        </a>
      </p>
      <p className={style.link}>
        <a href="https://t.me/materasso_official" className={style.network + ' ' + style.telega}>
          <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4455 0.478368L0.625512 5.03637C-0.181154 5.36037 -0.176488 5.81037 0.477512 6.01103L3.51218 6.9577L10.5335 2.5277C10.8655 2.3257 11.1688 2.43437 10.9195 2.6557L5.23085 7.7897H5.22951L5.23085 7.79037L5.02151 10.9184C5.32818 10.9184 5.46351 10.7777 5.63551 10.6117L7.10951 9.17837L10.1755 11.443C10.7408 11.7544 11.1468 11.5944 11.2875 10.9197L13.3002 1.43437C13.5062 0.608368 12.9848 0.234368 12.4455 0.478368Z" />
          </svg>
          materasso_official
        </a>
      </p>
      <p className={style.link}>
        <a
          href="https://api.whatsapp.com/send?phone=79635873457"
          className={style.network + ' ' + style.wa}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" />
          </svg>
          materasso_official
        </a>
      </p>
      <p className={style.link}>
        <a
          href="https://api.whatsapp.com/send?phone=79639811288"
          className={style.network + ' ' + style.wa}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" />
          </svg>
          Malika Selmurzaeva
        </a>
      </p>
      <p className={style.link}>
        <a
          href="https://www.tiktok.com/@sado_mebel?_t=8cV6Wirm9pp&_r=1"
          className={style.network + ' ' + style.telega}>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 512 512"
            id="icons"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
          </svg>
          sado_mebel
        </a>
      </p>
    </div>
  );
};
export default Contacts;
