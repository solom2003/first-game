'use client'

import style from "./page.module.css"
import Cell from "./components/Cell"
import { useEffect, useState } from "react";


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Home() {
  const [Cells , setcells] = useState(["","","","","","","","",""]);
  const [go , setgo] = useState("circal"); 
  const [winningMessage , setWinningMessage] = useState("");

    useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => Cells[cell] ==="circle");
      const crossWins = combo.every((cell) => Cells[cell] ==="cross")

      if(circleWins){
        setWinningMessage("circle wins!")
      }else if(crossWins){
        setWinningMessage("cross wins!")
      }

    });
  },[Cells])
  
  return(
    <main>
      <div className={style.root}>
        <div className={style.gameboard}>
           {Cells.map((cell ,index) => (
             <Cell winningMessage={winningMessage} cell={cell} cells={Cells} setcells={setcells} key={index} id={index} go={go} setgo={setgo}/>
           ))}
        </div>
      <div className={style.winn}>{winningMessage}</div>
      {!winningMessage && <div>{`it is now ${go} turn`}</div> }
      </div>

   
      

    </main>
  );
}
export default Home;
