import React from "react";
import css from "./cardPokemon.module.scss";
import { Link } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "../../store/pokemon/pokemon.api";
import { ButtonHeart } from "../ButtonHeart";
import { loadingGif } from "../../assets/images";

const chooseBgStyle = (type: string) => {
  switch (type.toLowerCase()) {
    case "grass":
      return css.card_green;
    case "water":
      return css.card_blue;
    case "fire":
      return css.card_red;
    default:
      return css.card_green;
  }
};

export const CardPokemon = ({
  id,
  favourites,
}: {
  id: number;
  favourites: boolean;
}) => {
  const { data, isLoading, error } = useGetPokemonDetailsQuery(id);

  if (isLoading) {
    return (
      <div className={`${css.card} ${css.card_loading}`}>
        <img src={loadingGif} alt="Loading" height="50" width="50" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${css.card} ${css.card_loading}`}>
        {"Error when loading pokemon data..."}
      </div>
    );
  }

  if (data && favourites) {
    return (
      <Link
        to={`/pokemon/${id}`}
        className={`${css.card} ${
          data.types.length ? chooseBgStyle(data.types[0].type.name) : ""
        }`}
      >
        <div className={css.card__favBox}>
          <ButtonHeart id={data.id} name={data.name} />
        </div>
        <p className={css.card__id}>#{data.id}</p>
        <h2 className={css.card__title}>{data.name}</h2>
        {data?.types?.length && (
          <ul className={`${css.card__typeList} ${css.card__typeList_row}`}>
            {data?.types.map((typeItem) => (
              <li key={typeItem.type.name}>
                <span
                  className={`${css.card__typeListItem} ${css.card__typeListItem_mr10}`}
                >
                  {typeItem.type.name}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className={`${css.card__pokemon} ${css.card__pokemon_center}`}>
          <img
            src={data?.sprites.front_default || data?.sprites.front_shiny}
            alt={data.name}
          />
        </div>
      </Link>
    );
  }

  if (data && !favourites) {
    return (
      <Link
        to={`/pokemon/${id}`}
        className={`${css.card} ${
          data.types.length ? chooseBgStyle(data.types[0].type.name) : ""
        }`}
      >
        <h2 className={css.card__title}>{data.name}</h2>
        {data?.types?.length && (
          <ul className={css.card__typeList}>
            {data?.types.map((typeItem) => (
              <li key={typeItem.type.name}>
                <span className={css.card__typeListItem}>
                  {typeItem.type.name}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className={css.card__pokemon}>
          <img
            src={data?.sprites.front_default || data?.sprites.front_shiny}
            alt={data.name}
          />
        </div>
      </Link>
    );
  }

  return null;
};
