import React from 'react';

export default const Hello = ({text, changeText}) => {
    return (
        <h1 onClick={changeText}>{text}</h1>
    );
}
