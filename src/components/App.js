import "../styles/App.css";
import Board from './Board/Board'
import Menu from "./Menu/Menu";
import NameBoard from "./headerBoard/NameBoard";
import Favourites from "./headerBoard/Favourites";
import Workspace from "./headerBoard/Workspace";
import PrivateBlock from "./headerBoard/PrivateBlock";
import React from 'react'

function App() {
    return (
      <div className="App">
          <header>
              <Menu />
          </header>
          <div id="info_board">
              <NameBoard />
              <Favourites />
              <Workspace textItem="Example_Workspace"  needImg={false}/>
              <PrivateBlock needImg={false}/>
          </div>
        <Board />
      </div>
    );
}

export default App;
