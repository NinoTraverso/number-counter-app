import React from "react";

const playerNumber = Math.floor(Math.random() * 10) + 1;
const pcNumber = Math.floor(Math.random() * 10) + 1;

function numberCheck() {
  if (pcNumber > playerNumber) {
    return <h1>PC Won...</h1>;
  } else if (pcNumber === playerNumber) {
    return <h1>Tie... :/</h1>;
  } else {
    return <h1>YOU WON!</h1>;
  }
}

function NumberCounter() {
  return (
    <div>
      <h1>Your number is: {playerNumber}</h1>
      <h1>Your number is: {pcNumber}</h1>
      <h1>{numberCheck()}</h1>
    </div>
  );
}

export default NumberCounter;
