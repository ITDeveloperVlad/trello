import MenuItem from "./MenuItem";
import Icon from "../Icon/Icon";
import '../../styles/Menu.css'
import React from 'react'

const Menu = () => {
    const menuDropItem = {
        workspace: ["Текущее рабочее пространство", "Гостевое рабочее пространство"],
        recent: ["example"],
        favourite: ["Отметь важные доски"],
        templates: ["Выбери любой интересный шаблон"]
    }

    return(
        <nav>
            <Icon />
            <MenuItem textItem="Рабочие пространства" menuDropItem={menuDropItem.workspace}/>
            <MenuItem textItem="Недавние" menuDropItem={menuDropItem.recent}/>
            <MenuItem textItem="В избранном" menuDropItem={menuDropItem.favourite}/>
            <MenuItem textItem="Шаблоны" menuDropItem={menuDropItem.templates}/>
        </nav>
    )

}

export default Menu;