import React from 'react';

const CustomButton = props => {
    return (
        <div onClick={props.onClick}>
            <button>Click me</button>
        </div>
    );
};

export default CustomButton;