import React from 'react';

function Input(props) {
    return (
        <input value={props.inputValue} onChange={(e) => props.onChangeValue(e.target.value)}/>
    );
}

export default Input;