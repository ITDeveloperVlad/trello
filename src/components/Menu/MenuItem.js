import {useState, useRef} from 'react';
import '../../styles/Menu.css';
import imgMenuItem from '../../images/menuItem.png';
import React from 'react'

const MenuItem = (props) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className="menu-container">
            <button onClick={onClick} onBlur={()=>setIsActive(false)} className="menu-trigger">
                <span>{props.textItem}</span>
                <img src={imgMenuItem} alt="menuItem" />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    {props.menuDropItem.map((item, index) => (
                        <li key={index}><a href={`/${item}`}>{item}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MenuItem