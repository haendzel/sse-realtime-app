import React from 'react';
import './Button.scss';

const Button = (props) => {

    const { type, value, myclass } = props;

    return (

    <input className={myclass} type={type} value={value} />

    )

}

export default Button;