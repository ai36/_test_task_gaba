
import { Header, Footer } from "."
import s from "./appLayout.module.css";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.layoutBox}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
