function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { TextField } from "@mui/material";
import "./Text.css";

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

export default Text;