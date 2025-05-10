// 2048 React component, logic adapted from gamelogic.js
import React, { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";

const SIZE = 4;

function getEmptyBoard() {
  return Array(SIZE)
    .fill(0)
    .map(() => Array(SIZE).fill(0));
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function addRandomTile(board: number[][]) {
  const empty = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) empty.push([r, c]);
    }
  }
  if (empty.length === 0) return board;
  const [r, c] = empty[getRandomInt(empty.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
  return board;
}

function clone(board: number[][]) {
  return board.map(row => [...row]);
}

function transpose(board: number[][]) {
  return board[0].map((_, i) => board.map(row => row[i]));
}

function reverse(board: number[][]) {
  return board.map(row => [...row].reverse());
}

function compress(row: number[]) {
  const newRow = row.filter(x => x !== 0);
  while (newRow.length < SIZE) newRow.push(0);
  return newRow;
}

function merge(row: number[]) {
  let score = 0;
  for (let i = 0; i < SIZE - 1; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      row[i] *= 2;
      score += row[i];
      row[i + 1] = 0;
    }
  }
  return { row, score };
}

function moveLeft(board: number[][]) {
  let score = 0;
  let moved = false;
  const newBoard = board.map(row => {
    let compressed = compress(row);
    const merged = merge(compressed);
    score += merged.score;
    compressed = compress(merged.row);
    if (compressed.join() !== row.join()) moved = true;
    return compressed;
  });
  return { board: newBoard, moved, score };
}

function moveRight(board: number[][]) {
  const reversed = reverse(board);
  const { board: movedBoard, moved, score } = moveLeft(reversed);
  return { board: reverse(movedBoard), moved, score };
}

function moveUp(board: number[][]) {
  const transposed = transpose(board);
  const { board: movedBoard, moved, score } = moveLeft(transposed);
  return { board: transpose(movedBoard), moved, score };
}

function moveDown(board: number[][]) {
  const transposed = transpose(board);
  const { board: movedBoard, moved, score } = moveRight(transposed);
  return { board: transpose(movedBoard), moved, score };
}

function isGameOver(board: number[][]) {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) return false;
      if (c < SIZE - 1 && board[r][c] === board[r][c + 1]) return false;
      if (r < SIZE - 1 && board[r][c] === board[r + 1][c]) return false;
    }
  }
  return true;
}

export default function Game2048() {
  const [board, setBoard] = useState(() => addRandomTile(addRandomTile(getEmptyBoard())));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [best, setBest] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('best2048') || 0);
    }
    return 0;
  });
  const confettiRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load js-confetti only on the client
    if (typeof window !== 'undefined' && !confettiRef.current) {
      import('js-confetti').then(mod => {
        confettiRef.current = new mod.default();
      });
    }
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault(); // Prevent default scrolling
      }
      if (gameOver) return;
      let result;
      if (e.key === "ArrowLeft") result = moveLeft(board);
      else if (e.key === "ArrowRight") result = moveRight(board);
      else if (e.key === "ArrowUp") result = moveUp(board);
      else if (e.key === "ArrowDown") result = moveDown(board);
      else return;
      if (result.moved) {
        const newBoard = addRandomTile(result.board);
        setBoard(newBoard);
        setScore(s => s + result.score);
        if (isGameOver(newBoard)) setGameOver(true);
      }
    }
    window.addEventListener("keydown", handleKey, { passive: false });
    return () => window.removeEventListener("keydown", handleKey);
  }, [board, gameOver]);

  useEffect(() => {
    setBest(b => {
      if (score > b) {
        localStorage.setItem('best2048', score.toString());
        return score;
      }
      return b;
    });
  }, [score]);

  useEffect(() => {
    // Win: show confetti if 2048 tile is present
    if (confettiRef.current && board.flat().includes(2048)) {
      confettiRef.current.addConfetti({ emojis: ['🤓'], emojiSize: 75 });
    }
    // Lose: show confetti if game over
    if (confettiRef.current && isGameOver(board)) {
      confettiRef.current.addConfetti({ emojis: ['😔'], emojiSize: 75 });
    }
  }, [board]);

  function restart() {
    setBoard(addRandomTile(addRandomTile(getEmptyBoard())));
    setScore(0);
    setGameOver(false);
  }

  return (
    <div className={`${styles.rootVars} ${styles.container}`}>
      <div id="header" className={styles.header}>
        <h1>2048</h1>
        <div className={styles.scoreBox}>
          <p>SCORE</p>
          <p>{score}</p>
        </div>
        <div className={styles.scoreBox}>
          <p>BEST</p>
          <p>{best}</p>
        </div>
        <button id="restart" className={styles.restart} onClick={restart}>RESTART</button>
      </div>
      <div id="2048" className={styles.board}>
        {board.flat().map((cell, i) => (
          <div
            key={i}
            className={
              styles.cell + (cell ? ' ' + styles[`cell${cell}`] : '')
            }
          >
            {cell !== 0 ? cell : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
