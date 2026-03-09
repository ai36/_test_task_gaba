import { Logo, Search } from "@/components";
import s from "./header.module.css";
import clsx from "clsx";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx("container", s.box)}>
        <Logo />
        <Search />
      </div>
    </header>
  );
};
