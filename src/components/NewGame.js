import React from 'react';
import styled from 'styled-components';

const Overplay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Winner = styled.h1`
    color: #f18f01;
`

const Button = styled.button`
    width: 170px;
    height: 75px;
    background-color: #99c24d;
    border-radius: 20px;
    outline: none;
    border: none;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
`
const NewGame = ({winner, onClick}) => {
    return (
        <Overplay>
            <div>
                <Winner>{winner === 'Draw' ? `Draw` : `${winner} is Winner`}</Winner>
                <Button onClick={onClick}>New Game</Button>
            </div>
        </Overplay>
    );
};

export default NewGame;