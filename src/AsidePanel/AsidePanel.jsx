import React from "react";
import s from "./AsidePanel.module.css";
import Button from "../Components/Button";

const AsidePanel = () => {
  return (
    <aside className={s.asidePanel}>
      <Button
        size="16"
        variant="primary"
        text="Все товары"
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Моя страница"
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Сообщения  "
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Избранное "
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Мои объявления"
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Статистика "
        width={300}
        height={50}
        radius="10px"
      />
      <Button
        size="16"
        variant="primary"
        text="Настройки"
        width={300}
        height={50}
        radius="10px"
      />
    </aside>
  );
};

export default AsidePanel;
