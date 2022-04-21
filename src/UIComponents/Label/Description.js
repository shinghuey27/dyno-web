import React from 'react';
import "./Label.css";
import Proptypes from 'prop-types';

const Description = (props) => {
  const {
    label = 'Default Description',
  } = props;

  return <div
    className='description'
    {...props}>{label}</div>;

};

Description.propTypes = {
  label: Proptypes.string,
  className: Proptypes.string,
};

export default Description;
