import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    width:150px;
    height:150px;
    margin: 5px;
    cursor: pointer;
    font-size: 80px;
    border-radius: 15px;
    border:none;
    outline:none;
    color: #f18f01;
    background-color:#2f2d2e;
`

const Square = ({ value, onClick}) => {
    return (
        <Button onClick={onClick}>
            {value}
        </Button>
    );
};

export default Square;