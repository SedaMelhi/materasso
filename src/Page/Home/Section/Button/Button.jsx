import style from './Button.module.sass';
const Button = ({ text }) => {
  return <div className={style.btn}>{text}</div>;
};

export default Button;
