import React from "react";
import s from "./SignInPage.module.css";
import LogoIcon from "../../libs/icons/logo.svg";
import Input from "../../Components/Input/Input";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Button from "../../Components/Button";

const SignInPage = () => {
  return (
    <div className={s.signIn}>
      <div className={s.container}>
        <img className={s.logo} src={LogoIcon} alt="LogoIcon" />

        <h1>Вход</h1>
        <Input
          type="text"
          // value={password}
          // onChange={handlePasswordChange}
          placeholder="Телефон или почта"
          // label="Пароль"
          name="passwordInput"
          required
          inputSizeWidth={300}
          inputSizeHeight={40}
          fontSize={18}
        />
        <Input
          type="password"
          // value={password}
          // onChange={handlePasswordChange}
          placeholder="Пароль"
          // label="Пароль"
          name="passwordInput"
          required
          inputSizeWidth={300}
          inputSizeHeight={40}
          fontSize={18}
        />
        <div className={s.check}>
          <Checkbox /> <span>Сохранить вход?</span>
        </div>
        <Button
          size="16"
          text="Войти"
          width={300}
          height={40}
          radius="10px"
          backgroundColor="#13B0F5"
          variant="primary"
          hoverBackgroundColor="dodgerblue"
          justifyContent="center"
        />
        <div className={s.footer}>
          <div className={s.line}></div>
          <span>Нет профиля?</span>
        </div>
        <Button
          size="16"
          variant="primary"
          text="Зарегестрироваться "
          width={300}
          height={40}
          radius="10px"
          backgroundColor="#4ECD00"
          hoverBackgroundColor="green"
          justifyContent="center"
        />
      </div>
    </div>
  );
};

export default SignInPage;
