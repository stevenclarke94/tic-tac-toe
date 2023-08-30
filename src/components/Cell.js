import React from "react";

const Cell = ({
  id,
  cell,
  setCells,
  go,
  setGo,
  cells,
  winningMessage,
  numOfClicks,
  setNumOfClicks,
  setTie,
}) => {
  const handleClick = (e) => {
    setNumOfClicks(numOfClicks + 1);
    if (numOfClicks === 9) {
      setTie(true);
    }
    const targetClass = e.target.firstChild.classList;
    const target = targetClass.contains("x") || targetClass.contains("o");

    if (!target) {
      if (go === "X") {
        targetClass.add("x");
        handleCellChange("x");
        setGo("O");
      }
      if (go === "O") {
        targetClass.add("o");
        handleCellChange("o");

        setGo("X");
      }
    }
  };

  //handle cell change
  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div
      className={`square ${!winningMessage ? "" : "disable"}`}
      id={id}
      onClick={!winningMessage && numOfClicks < 9 && handleClick}
    >
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
