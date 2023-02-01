import { MenuButton } from "../MenuButton";
import css from "./mainmenu.module.scss";
import {
  iconHome,
  iconHomeHover,
  iconMyAccount,
  iconMyAccountHover,
  iconWishlist,
  iconWishlistHover,
} from "../../assets/images";

export const MainMenu = () => {
  return (
    <menu className={css.menu}>
      <MenuButton
        label="Home"
        link="/"
        iconUrl={iconHome}
        iconHoverUrl={iconHomeHover}
        size={25}
      />
      <MenuButton
        label="Wishlist"
        link="/wishlist"
        iconUrl={iconWishlist}
        iconHoverUrl={iconWishlistHover}
        size={25}
      />
      <MenuButton
        label="My account"
        link="/account"
        iconUrl={iconMyAccount}
        iconHoverUrl={iconMyAccountHover}
        size={25}
      />
    </menu>
  );
};
