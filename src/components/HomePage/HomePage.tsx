import { HomePageHeader } from "../HomePageHeader";
import { PokemonList } from "../PokemonList";
import css from "./homePage.module.scss";

export const HomePage = () => {
  return (
    <div className={css.homePage}>
      <HomePageHeader />
      <PokemonList />
    </div>
  );
};
