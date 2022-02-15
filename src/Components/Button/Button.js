
import React from 'react';
import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = (props) => {

  // const {
  //   disabled,
  //   label
  // } = props;

  const { item, error, managedCallback, disabled } = props;
  const { action, label } = item 

  const onClick = () => managedCallback(action?.actionURL)

  const className = disabled ? 'button-disabled' : 'button';

  return <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    {...props}>{label}</button>;

};

Button.defaultProps = {
  item: { label: 'Default' },
  disabled: false
}


Button.propTypes = {
  label: PropTypes.string.isRequired,
  managedCallback: PropTypes.func,
  onMouseOver: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
