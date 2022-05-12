import '../../styles/Favourites.css';
import {useState} from 'react';
import React from 'react'

const Favourites = () => {

    const [favourite,setFavourite] = useState(false);

    const onClick = () => setFavourite(!favourite);

    return(
           <div className={`favourite${favourite ? 'On' : 'Off'}`} onClick={onClick} />
    )

}

export default Favourites;