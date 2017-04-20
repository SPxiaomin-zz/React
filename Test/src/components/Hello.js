import React from 'react';

const Hello = ({text, changeText}) => {
    return (
        <h1 onClick={changeText}>{text}</h1>
    );
};

export default Hello;
