import style from './About.module.sass';
import Path from './../../components/Path/Path';
const About = () => {
  return (
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '/' },
          { text: 'О нас', link: '' },
        ]}
      />
      <h2 className={style.title}>О нас</h2>
      <p className={style.text}>
        Наша компания "Sadogroup", которая включает в себя сеть мебельных салонов "Materasso" и
        "Elgrozny" является опытным игроком на рынке мебели с 2014 года. За это время мы приобрели
        огромный опыт работы с лучшими российскими производителями мебели.{' '}
      </p>
      <p className={style.text}>
        Со стороны клиентов мы получили много отзывов о качественной продукции и безукоризненном
        сервисе.
      </p>
      <p className={style.text}>
        Мы предлагаем только тщательно отобранную мебель для наших клиентов, проверенную нашими
        экспертами на соответствие высочайшим стандартам качества и стиля. Важным аспектом нашей
        работы является уверенность в долговечности продукции, которую мы предлагаем.
      </p>
      <p className={style.text}>
        Мы убеждены, что наша мебель будет радовать вас и комфортно служить многие годы, и поэтому
        мы предоставляем гарантию на весь наш ассортимент.
      </p>
      <p className={style.text}>
        Мы полагаем, что наша главная миссия - это обеспечение наших клиентов лидирующими товарными
        марками, доступными на рынке. Мы постоянно работаем над поиском лучших и качественных
        товаров, чтобы предоставлять нашим клиентам самые передовые решения на рынке. Мы стремимся
        предложить нашим клиентам безукоризненное обслуживание и подбор оптимальных товаров, которые
        соответствуют их потребностям. Мы придерживаемся принципов прозрачности, честности,
        ответственности и профессионализма, обеспечивая нашим клиентам высочайший уровень сервиса по
        всем вопросам, связанным с нашими продуктами и услугами.
      </p>
    </div>
  );
};
export default About;
