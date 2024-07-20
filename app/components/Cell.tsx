import { Dispatch, SetStateAction } from "react";
import style from "../page.module.css";

type cellprops ={
    go: string;
    setgo: Dispatch<SetStateAction<string>>;
    id: number;
    cells: string[];
    setcells:Dispatch<React.SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
}

const cell =  ({go , setgo , id , cells, setcells, cell,winningMessage}: cellprops ) => {
    
    const handleclick =  (e: any) => {
        if(winningMessage){
          return
        }
      const taken = !!cells[id]
      if(!taken) {
              if(go === "circal"){
         handelcellchange("circal")
         setgo("cross")
        }else if (go === "cross"){
        handelcellchange("cross")
        setgo("circal")
        }
        }
    }

    const handelcellchange = (celltochange: string) => {
      let copycells = [...cells];
      copycells[id] = celltochange;
      setcells(copycells)
    }
    return(
        <div className={style.square} onClick={handleclick}>
          <div className={cell}>{ cell ?( cell === "circal" ? "O" : "X") : ""}</div>
        </div>
    );
}
export default cell;


