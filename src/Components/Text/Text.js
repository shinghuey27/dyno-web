import React from 'react';
import "./Text.css";
import Proptypes from 'prop-types';

const Text = (props) => {

  const {
    id,
    name,
    placeholder,
  } = props;

  return (
    <input
      type="text"
      id={id}
      name={name}      
      placeholder={placeholder}            
      {...props}
    ></input>
  );
};

Text.defaultProps = {
  className: "text",
};

Text.propTypes = {
  type: Proptypes.string,
  name: Proptypes.string,
  placeholder: Proptypes.string
};


export default Text;
