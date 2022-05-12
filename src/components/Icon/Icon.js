import '../../styles/Icon.css';
import logo from '../../images/TrelloLogo.png';
import React from 'react'


const Icon = () => {

    return(
       <div id="icon">
           <img src={logo} alt="Logo"/>
           <h4>Trello</h4>
       </div>
    )

}

export default Icon;