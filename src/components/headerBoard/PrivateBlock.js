import {useState, useRef} from 'react';
import '../../styles/Workspace.css';
import privateLogo from '../../images/private.png'
import React from 'react'

const PrivateBlock = () => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const [isPrivate, setIsPrivate] = useState(false);

    const onClick = () => setIsActive(!isActive);
    const btnPrivate = () => setIsPrivate(true);
    const btnPublic = () => setIsPrivate(false);

    return (
        <div className="workspace-container">
            <button onClick={onClick}  onBlur={()=>setIsActive(false)} className="workspace-trigger">
                <img src={privateLogo} alt="menuItem" />
                <span>{isPrivate ? 'Private' : 'Public'} </span>
            </button>
            <nav ref={dropdownRef} className={`workspace ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><span onClick={btnPrivate}>Сделать приватным</span></li>
                    <li><span onClick={btnPublic}>Сделать публичным</span></li>

                </ul>
            </nav>
        </div>
    );
};

export default PrivateBlock;