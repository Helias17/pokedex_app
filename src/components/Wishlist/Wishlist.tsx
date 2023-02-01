import React, { useState } from "react";
import type { TypeRootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CardPokemon } from "../CardPokemon";
import css from "./wishlist.module.scss";
import { iconSearch } from "../../assets/images";

export const Wishlist = () => {
  const wishlist = useSelector((state: TypeRootState) => state.wishlist.value);
  const [input, setInput] = useState("");

  const wishlistFiltered = wishlist.filter((wishlistItem) => {
    const regrule = new RegExp(`^${input}`, "i");
    if (input.length > 1) {
      return regrule.test(wishlistItem.name);
    }
    return true;
  });

  return (
    <>
      <header className={css.wishlist__header}>
        <h1 className={css.wishlist__title}>Pokedex</h1>
        <p className={css.wishlist__desc}>
          Search for Pokémon by name or by using the National Pokédex number.
        </p>
        <div className={css.wishlist__searchBox}>
          <input
            type="text"
            className={css.wishlist__search}
            placeholder="What Pokémon are you looking for?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <img
            src={iconSearch}
            alt="search"
            className={css.wishlist__searchIcon}
          />
        </div>
      </header>
      <section className={css.wishlist__list}>
        {!!wishlistFiltered.length &&
          wishlistFiltered.map((wishItem) => (
            <CardPokemon key={wishItem.name} id={wishItem.id} favourites />
          ))}
        {!wishlist.length && (
          <p className={css.wishlist__empty}>
            Wishlist is empty. You can add a pokemon to favourites on its page.
          </p>
        )}
        {!!wishlist.length && !wishlistFiltered.length && (
          <p className={css.wishlist__empty}>No pokemons were found</p>
        )}
      </section>
    </>
  );
};
