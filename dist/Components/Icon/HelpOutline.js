"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HelpOutline = _interopRequireDefault(require("@mui/icons-material/HelpOutline"));

require("./Icon.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelpOutline = function HelpOutline() {
  return /*#__PURE__*/_react.default.createElement("i", {
    className: "tooltipIcon"
  }, /*#__PURE__*/_react.default.createElement(_HelpOutline.default, {
    fontSize: "13px"
  }));
};

var _default = HelpOutline;
exports.default = _default;