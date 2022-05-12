import '../../styles/NameEdit.css';
import {useState} from 'react';
import React from 'react'

const NameBoard = () => {

    const [name,setName] = useState('example');
    const [isActive, setIsActive] = useState(false);


    const handleInput = (event) => {
        event.target.select();
    }

    return(

        <div id="name_board">
            {!isActive
                ? <span
                    onClick={() => setIsActive(true)}
                    className="name_span"><b>{name}</b></span>

                : <input className="name_input"
                     value={name}
                     onClick={handleInput}
                     onChange={event => setName(event.target.value)}
                     onBlur={()=>setIsActive(false)}/>
            }
        </div>
    )

}

export default NameBoard;