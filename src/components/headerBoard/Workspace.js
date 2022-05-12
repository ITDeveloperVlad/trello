import {useState, useRef} from 'react';
import '../../styles/Workspace.css';
import imgMenuItem from '../../images/menuItem.png';
import React from 'react'

const Workspace = (props) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className="workspace-container">
            <button onClick={onClick}  onBlur={()=>setIsActive(false)} className="workspace-trigger">
                {props.needImg && <img src={imgMenuItem} alt="menuItem" />}
                <span>{props.textItem}</span>
            </button>
            <nav ref={dropdownRef} className={`workspace ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><span>Сменить рабочее пространство</span></li>
                    <li><span>Открыть страницу рабочего пространства</span></li>

                </ul>
            </nav>
        </div>
    );
};

export default Workspace;