import { ButtonPrev } from "../ButtonPrev";
import { HomePageHeader } from "../HomePageHeader";
import css from "./userAccount.module.scss";

export const UserAccount = () => {
  return (
    <>
      <HomePageHeader />
      <div className={css.account}>
        <h2 className={css.account__title}>My Account</h2>
        <p>
          <center>Sorry, but this page is under construction :-)</center>
          <div className={css.account__circle}>
            <ButtonPrev />
          </div>
        </p>
      </div>
    </>
  );
};
