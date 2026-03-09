import clsx from "clsx";
import s from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx("container", s.box)}>
        <span>2026 Андрей Федоров</span>
      </div>
    </footer>
  );
};
