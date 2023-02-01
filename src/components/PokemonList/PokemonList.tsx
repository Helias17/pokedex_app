import type { TypeRootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "./pokemonlistPaginationSlice";
import { IPokemonListItem } from "../../store/pokemon/pokemon.types";
import { CardPokemon } from "../CardPokemon";
import { useGetPokemonsQuery } from "../../store/pokemon/pokemon.api";
import { Loader } from "../Loader";
import css from "./pokemonList.module.scss";

export const PokemonList = () => {
  const offset = useSelector(
    (state: TypeRootState) => state.pokemonListPagination.value
  );
  const dispatch = useDispatch();

  const { data, isLoading, error, isFetching } = useGetPokemonsQuery(offset);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (data) {
    const pokemonIdArr: number[] = data.results
      .map((pokemon: IPokemonListItem) => {
        const regrule = /pokemon\/(\d*)\/$/;
        const result = regrule.exec(pokemon.url);
        if (result?.[1]) {
          return parseInt(result?.[1], 10);
        }
        return 0;
      })
      .filter((item) => item);

    return (
      <>
        <div className={css.list}>
          {pokemonIdArr.map((id) => (
            <CardPokemon key={id} id={id} favourites={false} />
          ))}
        </div>
        <div className={css.list__pagination}>
          <button
            onClick={() => dispatch(prevPage(20))}
            disabled={offset === 0 ? true : false}
            className={css.list__btn}
          >
            Previous
          </button>
          <button
            onClick={() => dispatch(nextPage(20))}
            disabled={isLoading || isFetching}
            className={css.list__btn}
          >
            Next
          </button>
        </div>
      </>
    );
  }

  return (
    <div className={css.list}>
      {isLoading && "Loading..."}
      {error && "Error"}
    </div>
  );
};
