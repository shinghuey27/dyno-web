function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import "./Tooltips.css";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PropTypes from "prop-types";

const Tooltips = props => {
  const {
    label,
    icon,
    tooltip
  } = props;
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    title: label
  }, tooltip), /*#__PURE__*/React.createElement(HelpOutlineIcon, _extends({
    fontSize: "10px",
    style: {
      marginLeft: 5
    }
  }, icon)));
};

Tooltips.defaultProps = {
  label: ""
};
Tooltips.propTypes = {
  label: PropTypes.string
};
export default Tooltips;