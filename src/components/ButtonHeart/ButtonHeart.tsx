import type { TypeRootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { togglePokemon } from "../Wishlist/wishlistSlice";
import { heartFull, heartEmpty } from "../../assets/images";
import css from "./buttonHeart.module.scss";

export const ButtonHeart = ({ id, name }: { id: number; name: string }) => {
  const wishlist = useSelector((state: TypeRootState) => state.wishlist.value);
  const dispatch = useDispatch();

  const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newWishlist = [...wishlist];

    if (wishlist.some((wishlistItem) => wishlistItem.id === id)) {
      newWishlist = newWishlist.filter(
        (wishlistItem) => wishlistItem.id !== id
      );
    } else {
      newWishlist.push({ name, id });
    }
    localStorage.setItem("pokedex_wishlist", JSON.stringify(newWishlist));

    dispatch(togglePokemon({ name, id }));
  };

  return (
    <button
      className={css.favourites}
      onClick={handleClick}
      title={isInWishlist ? "Remove from the wishlist" : "Add to the wishlist"}
    >
      <img
        src={isInWishlist ? heartFull : heartEmpty}
        width="30"
        height="30"
        alt="Favourites"
      />
    </button>
  );
};
