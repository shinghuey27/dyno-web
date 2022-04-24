import React from "react";
import './Button.css';

const HButton = (props: any) => {

  // const [state, setState] = React.useState('');

  const { name, id, item, error, managedCallback, } = props;
  const { action, label } = item || { label: 'Default' };

  const onClick = () => managedCallback(action?.actionURL)
  const disabled = error && Object.keys(error).length > 0 || props?.disabled;


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

export default HButton;
