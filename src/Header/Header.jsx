import Button from "../Components/Button";
import Logo from "../libs/icons/logo.svg";
import Hamburger from "../libs/icons/hamburger.svg";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <div className={s.logo}>
          <img src={Logo} alt="logo" />
          <p>Glamly</p>
        </div>
        <Button
          size="16"
          variant="primary"
          text="Все категории"
          width={150}
          height={40}
          radius="10px"
          icon={Hamburger}
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
        />
        <Button
          size="16"
          variant="primary"
          text="Вход и регистрация "
          width={170}
          height={40}
          radius="10px"
        />
      </div>
    </header>
  );
};

export default Header;
