"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// 2.1 Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// 2.1 Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// 2.1 Game state
let playerRow = 0;
let playerCol = 0;
let playing = true


// 2.1 Print board
function printBoard(board) {
  console.clear();
  for (let row of board) {
    console.log(row.join(""));
  }
}

//3. input
function getInput() {
  const Inputs = prompt("Which way? (w/a/s/d): ").toLowerCase();
  if (!["w", "a", "s", "d"].includes(Inputs)) {
    return null;
  } else
  return Inputs;
}

// 4. Move
function movePlayer(direction) {
  if (direction === "w") playerRow--;
  if (direction === "s") playerRow++;
  if (direction === "a") playerCol--;
  if (direction === "d") playerCol++;

  return { row: playerRow, col: playerCol };
}

// 5. Rule
function ruleGame() {
ruleGame
  if (
    playerRow < 0 ||
    playerRow >= board.length ||
    playerCol < 0 ||
    playerCol >= board[0].length
  ) {
    console.log("You stepped outside the field! Game Over.");
    playing = false;
    return;
  }

//  5. hole
  if (board[playerRow][playerCol] === HOLE) {
    console.log("You fell into a hole! Game Over.");
    playing = false;
    return;
  }

//   hat
  if (board[playerRow][playerCol] === HAT) {
    console.log("You found your hat! You Win!");
    playing = false;
    return;
  }

//   safe path
  board[playerRow][playerCol] = PLAYER;
}

// Game play loop
while (playing) {
printBoard(board);

  const input = getInput();
  if (!input) continue; 

  movePlayer(input);
  ruleGame();
}
