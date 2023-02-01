import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./menuButton.module.scss";

type Props = {
  label: string;
  link: string;
  iconUrl: string;
  iconHoverUrl: string;
  size: number;
};

export const MenuButton = ({
  label,
  link,
  iconUrl,
  iconHoverUrl,
  size,
}: Props) => {
  const [hover, setHover] = useState(false);

  const handleOnMouseEnter = () => setHover(true);
  const handleOnMouseLeave = () => setHover(false);

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? `${css.button} ${css.button_active}` : css.button
      }
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className={css.button__iconBox}>
        <img
          src={iconHoverUrl}
          alt={label}
          width={size}
          height={size}
          style={{
            left: `calc(50% - ${size / 2}px)`,
            top: `calc(50% - ${size / 2}px)`,
          }}
        />
        {!hover && (
          <img
            src={iconUrl}
            alt={label}
            width={size}
            height={size}
            style={{
              left: `calc(50% - ${size / 2}px)`,
              top: `calc(50% - ${size / 2}px)`,
            }}
          />
        )}
      </div>
      {label}
    </NavLink>
  );
};
