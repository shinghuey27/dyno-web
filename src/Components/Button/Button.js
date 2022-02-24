
import React from 'react';
import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = (props) => {

  const { name, id, item, error, managedCallback, } = props;
  const { action, label } = item || { label: 'Default' };

  const onClick = () => managedCallback(action?.actionURL)
  const disabled = error && Object.keys(error).length > 0 || false;


  const className = disabled ? 'button-disabled' : 'button';

  return (
    <button
      name={name}
      id={id}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>);

};

export default Button;
