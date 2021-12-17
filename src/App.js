import React, { useState } from 'react';
import Board from './components/Board';
import NewGame from './components/NewGame';
import calculatorWinner from './calculatorWinner';
import styled from 'styled-components';

const Title = styled.h1`
    color: #fff;
    text-align: center;
`

const App = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [xIsNext, setNext] = useState(true);
  const winner = calculatorWinner(squares); // get winner is returned from calculatorWinner function

  // handle if player click a square, parameter i to identify a square is clicked base on ar
  const handleClick = (i) => {
    if (winner || squares[i]) { //check if a person win or click on square is clicked
      return; // stop handleClick function
    }
    // _squares is array copy from squares state
    const _squares = [...squares];
    _squares[i] = `${xIsNext ? 'X' : 'O'}`;
    setSquares(_squares); // set again squares state to re-render component
    setNext(!xIsNext); // set next turn
  }

  // handle if user click new game button
  const handleNewGame = () => {
    setSquares(new Array(9).fill(null)); // set squares state is new array with all element is null
    setNext(true); // set isXNext is true
  }
  return (
    <React.Fragment>
      <Title>Tic-Tac-Toe</Title>
      <Board
        squares={squares}
        handleClick={handleClick}
        winner={winner}
        xIsNext={xIsNext}
      />
      {/* render NewGame component if winner is true */}
      {winner && <NewGame
        winner={winner}
        onClick={handleNewGame}
      />}
    </React.Fragment>
  );
};

export default App;