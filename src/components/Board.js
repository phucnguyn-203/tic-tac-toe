import React from 'react';
import Square from './Square';
import styled from 'styled-components';

// style component
const Status = styled.h1`
    color: #f18f01;
    text-align: center;
`
const BoardRow = styled.div`
    display: flex;
`

const Board = ({squares, handleClick, xIsNext}) => {
    const renderSquare = (i) => {
        // import square from ./square.js
        return <Square
            value={squares[i]}
            onClick={() => handleClick(i)}
        />
    }
    

    return (
        <div>
            {/* 
                if winner is Truthy
                    if winner === draw, it will return draw  
                    else it will return a winner
                if winner is Falsy, it will return next player
                    if xIsNext is Truthy it will return X player
                    else it will return O player
            */}
            <Status>{xIsNext ? "X's Turn" : "O's Turn"}</Status>
            <div>
                <BoardRow>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </BoardRow>

                <BoardRow>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </BoardRow>

                <BoardRow>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </BoardRow>
            </div>
        </div>
    );
};

export default Board;