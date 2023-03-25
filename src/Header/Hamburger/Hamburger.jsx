import style from './Hamburger.module.sass';
const Hamburger = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={style.hamburger__wrap} onClick={() => setMenuOpen(!menuOpen)}>
      <div className={style.hamburger + ' ' + (menuOpen ? style.open : '')}>
        <div className={style.line + ' ' + style.line__one}></div>
        <div className={style.line + ' ' + style.line__middle}></div>
        <div className={style.line + ' ' + style.line__three}></div>
      </div>
    </div>
  );
};

export default Hamburger;
