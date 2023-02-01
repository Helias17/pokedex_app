import { HeaderMenu } from "../HeaderMenu";
import css from "./homePageHeader.module.scss";

export const HomePageHeader = () => {
  return (
    <header className={css.pageHeader}>
      <HeaderMenu />
      <h1 className={css.pageHeader__title}>Pokedex</h1>
    </header>
  );
};
