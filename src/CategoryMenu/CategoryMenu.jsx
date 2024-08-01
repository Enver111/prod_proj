import Button from "../Components/Button";

import Cloth from "../libs/icons/category/cloth.svg";
import Electronics from "../libs/icons/category/electronics.svg";
import ForHome from "../libs/icons/category/forHome.svg";
import RealEstate from "../libs/icons/category/realEstate.svg";
import SpareParts from "../libs/icons/category/spareParts.svg";
import Transport from "../libs/icons/category/transport.svg";

import Arrow from "../libs/icons/arrow.svg";
import s from "./CategoryMenu.module.css";
const CategoryMenu = () => {
  return (
    <div className={s.categoryMenu}>
      <div className={s.category}>
        <Button
          size="16"
          text="Транспорт"
          width={250}
          height={40}
          radius="10px"
          icon1={Transport}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
        <Button
          size="16"
          text="Недвижимость"
          width={250}
          height={40}
          radius="10px"
          icon1={RealEstate}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
        <Button
          size="16"
          text="Электроника"
          width={250}
          height={40}
          radius="10px"
          icon1={Electronics}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
        <Button
          size="16"
          text="Запчасти"
          width={250}
          height={40}
          radius="10px"
          icon1={SpareParts}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
        <Button
          size="16"
          text="Для дома"
          width={250}
          height={40}
          radius="10px"
          icon1={ForHome}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
        <Button
          size="16"
          text="Одежда"
          width={250}
          height={40}
          radius="10px"
          icon1={Cloth}
          icon2={Arrow}
          backgroundColor="white"
          hoverBackgroundColor="#f2f1f0"
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
