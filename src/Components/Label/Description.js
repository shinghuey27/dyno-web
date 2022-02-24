import React from 'react';
import "./Label.css";
import Proptypes from 'prop-types';

const Description = (props) => {
  const {
    label,    
  } = props;

  return <label
    {...props}>{label}</label>;

};

Description.defaultProps = {
  label: "Default Description",
  className: "description"
};

Description.propTypes = {
  label: Proptypes.string,
  className: Proptypes.string,
};

export default Description;
