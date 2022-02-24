import React from 'react';
import "./Label.css";
import Proptypes from 'prop-types';

const Description = (props) => {
  const {
    label = 'Default Description',
  } = props;

  return <label
    className='description'
    {...props}>{label}</label>;

};

Description.propTypes = {
  label: Proptypes.string,
  className: Proptypes.string,
};

export default Description;
