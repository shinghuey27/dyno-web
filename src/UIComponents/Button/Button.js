
import React from 'react';
import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = (props) => {

  const { name, id, item, error, managedCallback, disabled, text } = props;
  const { action, label } = item || { label: 'Default' };

  const onClick = () => managedCallback(action?.actionURL)
  const disabled_dynamo = error && Object.keys(error).length > 0 || false;


  const className = (disabled || disabled_dynamo) ? 'button-disabled' : 'button';

  const renderText = ()=> text? text : label

  return (
    <button
      name={name}
      id={id}
      className={className}
      disabled={(disabled || disabled_dynamo)}
      onClick={onClick}
      {...props}
    >
      {renderText()}
    </button>);

};

export default Button;
