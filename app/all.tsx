// "use client";
// import { useEffect, useState } from "react";
// import Cell from "./components/cell";

// const winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// export default function Home() {
//   const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
//   const [go, setGo] = useState("circle");
//   const [winningMessage, setWinningMessage] = useState("");

//   useEffect(() => {
//     winningCombos.forEach((combo) => {
//       const circleWins = combo.every((cell) => cells[cell] === "circle");
//       const crossWins = combo.every((cell) => cells[cell] === "cross");

//       if (circleWins) {
//         setWinningMessage("Circle Wins!");
//       } else if (crossWins) {
//         setWinningMessage("Cross Wins!");
//       }
//     });
//   }, [cells, winningMessage]);

//   useEffect(() => {
//     if (cells.every((cell) => cell !== "") && !winningMessage) {
//       setWinningMessage("Draw!");
//     }
//   }, [cells, winningMessage]);

//   return (
//     <div className="container">
//       <div className="gameboard">
//         {cells.map((cell, index) => (
//           <Cell
//             id={index}
//             go={go}
//             setGo={setGo}
//             key={index}
//             cells={cells}
//             setCells={setCells}
//             cell={cell}
//             winningMessage={winningMessage}
//           />
//         ))}
//       </div>
//       <div>{winningMessage}</div>
//       {!winningMessage && <div>{`its now ${go} turn!`}</div>}
//     </div>
//   );
// }



// Cell part***********===========





// import { Dispatch, SetStateAction } from "react";

// type CellProps = {
//   id: number;
//   go: string;
//   setGo: Dispatch<SetStateAction<string>>;
//   cells: string[];
//   setCells: Dispatch<SetStateAction<string[]>>;
//   cell: string;
//   winningMessage: string;
// };

// const Cell = ({
//   go,
//   setGo,
//   id,
//   cells,
//   setCells,
//   cell,
//   winningMessage,
// }: CellProps) => {
//   const handleClick = (e) => {
//     if (winningMessage) {
//       return;
//     }
//     const notTaken = !cells[id];

//     if (notTaken) {
//       if (go === "circle") {
//         handleCellChange("circle");
//         setGo("cross");
//       } else if (go === "cross") {
//         handleCellChange("cross");
//         setGo("circle");
//       }
//     }
//   };

//   const handleCellChange = (cellToChange: string) => {
//     let copyCells = [...cells];
//     copyCells[id] = cellToChange;
//     setCells(copyCells);
//   };

//   return (
//     <div className="square" onClick={handleClick}>
//       <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
//     </div>
//   );
// };

// export default Cell;