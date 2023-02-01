import { useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "../../store/pokemon/pokemon.api";

import { ButtonHeart } from "../ButtonHeart";
import { ButtonPrev } from "../ButtonPrev";
import { PokemonInfo } from "../PokemonInfo";
import css from "./pokemonPage.module.scss";
import { Loader } from "../Loader";

const chooseBgStyle = (type: string) => {
  switch (type.toLowerCase()) {
    case "grass":
      return css.pokemon_green;
    case "water":
      return css.pokemon_blue;
    case "fire":
      return css.pokemon_red;
    default:
      return css.pokemon_green;
  }
};

export const PokemonPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPokemonDetailsQuery(id!);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error has occured when loading pokamon info</p>;
  }

  if (data) {
    const baseStats = data.stats.map((statItem) => ({
      name: statItem.stat.name,
      value: statItem.base_stat,
    }));

    const about = [
      { name: "Name", value: data.name },
      { name: "Experience", value: data.base_experience },
      { name: "Height", value: data.height },
      { name: "Weight", value: data.weight },
    ];

    const moves = data.moves.map((moveItem) => moveItem.move.name);

    return (
      <>
        <div
          className={`${css.pokemon} ${
            data.types.length ? chooseBgStyle(data.types[0].type.name) : ""
          }`}
        >
          <div className={css.pokemon__container}>
            <div className={css.pokemon__header}>
              <ButtonPrev />
              <ButtonHeart id={data.id} name={data.name} />
            </div>
            <div className={css.pokemon__details}>
              <div className={`${css.pokemon__flex} ${css.pokemon__flex_mb15}`}>
                <h1 className={css.pokemon__name}>{data.name}</h1>
                <p className={css.pokemon__id}>#{data.id}</p>
              </div>
              <div className={css.pokemon__flex}>
                <ul className={css.pokemon__typeList}>
                  <li className={css.pokemon__typeListItem}>grass</li>
                  <li className={css.pokemon__typeListItem}>poison</li>
                </ul>
                <p className={css.pokemon__sort}>seed pokemon</p>
              </div>
              <div className={css.pokemon__imageBox}>
                <div className={css.pokemon__circle}>
                  <img
                    src={data.sprites.front_default || data.sprites.front_shiny}
                    alt={data.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PokemonInfo baseStats={baseStats} about={about} moves={moves} />
      </>
    );
  }

  return null;
};
