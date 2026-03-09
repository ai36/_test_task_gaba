import s from './logo.module.css';

export const Logo = () => {
  return (
      <a className={s.logo} href="#">
        <span className={s.highlight}>GABA</span>TestTask
      </a>
  );
}