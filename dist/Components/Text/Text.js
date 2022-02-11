function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import "./Text.css";
import Proptypes from 'prop-types';

const Text = props => {
  const {
    id,
    name,
    placeholder
  } = props;
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    id: id,
    name: name,
    placeholder: placeholder
  }, props));
};

Text.defaultProps = {
  className: "text"
};
Text.propTypes = {
  type: Proptypes.string,
  name: Proptypes.string,
  placeholder: Proptypes.string
};
export default Text;