import { useState } from "react";
import Button from "../Components/Button";

import Hamburger from "../libs/icons/hamburger.svg";
import Close from "../libs/icons/close.svg";

import s from "./Header.module.css";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import Logo from "../Components/Logo/Logo";
import SignInPage from "../AutorizationForm/SignInPage/SignInPage";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleSignInClick = () => {
    setSignIn(!signIn);
  };

  const handleCategoriesClick = () => {
    console.log("Enver");
    setShowCategories(!showCategories);
  };

  return (
    <header className={s.header}>
      <div className={s.left}>
        <Logo />
        <Button
          size="16"
          variant="primary"
          text="Все категории"
          width={150}
          height={40}
          radius="10px"
          icon1={showCategories ? Close : Hamburger}
          onClick={handleCategoriesClick}
          hoverBackgroundColor="rgba(13, 44, 59, 1)"
        />

        <div className={s.inputBlock}>
          <input
            className={s.input}
            type="text"
            placeholder="Поиск по объявлениям"
          />
          <Button
            size="16"
            variant="primary"
            text="Найти"
            width={77}
            height={40}
            radius="0 10px 10px 0"
            hoverBackgroundColor="rgba(13, 44, 59, 1)"
          />
        </div>
      </div>
      <div className={s.btnBlock}>
        <Button
          size="16"
          variant="primary"
          text="Разместить объявление"
          width={200}
          height={40}
          radius="10px"
          hoverBackgroundColor="rgba(13, 44, 59, 1)"
        />
        <Button
          size="16"
          variant="primary"
          text="Вход и регистрация "
          width={170}
          height={40}
          radius="10px"
          hoverBackgroundColor="rgba(13, 44, 59, 1)"
          onClick={handleSignInClick}
        />
      </div>
      {showCategories && <CategoryMenu />}
      {signIn && <SignInPage />}
    </header>
  );
};

export default Header;
