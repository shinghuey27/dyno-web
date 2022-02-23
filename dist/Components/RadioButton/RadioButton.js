"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _RadioButtonModule = _interopRequireDefault(require("./RadioButton.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isErrorForm = require("../../Utils/isErrorForm");

var _ErrorMessage = _interopRequireDefault(require("../Label/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RadioButton = function RadioButton(props) {
  var name = props.name,
      container = props.container,
      checkMark = props.checkMark,
      item = props.item,
      field = props.field,
      error = props.error,
      classNameContainer = props.classNameContainer,
      classNameCheckMark = props.classNameCheckMark;

  var _ref = item || {
    label: ""
  },
      label = _ref.label;

  var defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    className: classNameContainer,
    label: defaultLabel
  }, container), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "radio",
    name: "radio"
  }, field)), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: classNameCheckMark
  }, checkMark))), (0, _isErrorForm.renderError)(name, error) && /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, props));
};

RadioButton.defaultProps = {
  classNameContainer: _RadioButtonModule.default.container,
  classNameCheckMark: _RadioButtonModule.default.checkmark
};
RadioButton.propTypes = {
  label: _propTypes.default.string
};
var _default = RadioButton;
exports.default = _default;