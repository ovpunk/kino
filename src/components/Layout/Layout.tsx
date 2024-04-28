import { FC } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AppRouter } from "../AppRouter";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};
