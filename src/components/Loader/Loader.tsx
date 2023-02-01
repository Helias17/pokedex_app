import { loadingGif } from "../../assets/images";
import css from "./loader.module.scss";

export const Loader = () => {
  return <img src={loadingGif} alt="Loading" className={css.loader} />;
};
