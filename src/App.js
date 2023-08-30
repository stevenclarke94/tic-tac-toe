import React, { useState, useEffect } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  const [winningMessage, setwinningMessage] = useState(null);
  const [tie, setTie] = useState(false);

  const message = "Next player: " + go;

  const checkScore = () => {
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

    winningCombos.forEach((array) => {
      let xWins = array.every((cell) => cells[cell] === "x");
      if (xWins) {
        setwinningMessage("Winner: X");
        return;
      }
    });

    winningCombos.forEach((array) => {
      let oWins = array.every((cell) => cells[cell] === "o");
      if (oWins) {
        setwinningMessage("Winner: O");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  //Check if all of the squares have been clicked and if it is a draw
  const [numOfClicks, setNumOfClicks] = useState(0);

  //Reset Game function
  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("X");
    setwinningMessage(null);
    setNumOfClicks(0);
  };

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
            numOfClicks={numOfClicks}
            setNumOfClicks={setNumOfClicks}
            setTie={setTie}
          />
        ))}
      </div>
      <p className="status">
        {numOfClicks === 9 && !winningMessage
          ? "Tie"
          : winningMessage || message}
      </p>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default App;
