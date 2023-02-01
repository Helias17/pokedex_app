import { useNavigate } from "react-router-dom";
import { arrowLeft } from "../../assets/images";
import css from "./buttonPrev.module.scss";

export const ButtonPrev = () => {
  const navigate = useNavigate();

  return (
    <button className={css.button} onClick={() => navigate(-1)}>
      <img src={arrowLeft} alt="Return" />
    </button>
  );
};
