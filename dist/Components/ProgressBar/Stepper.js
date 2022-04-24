"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Stepper.css");

var _Label = _interopRequireDefault(require("../Label/Label"));

var _Step = _interopRequireDefault(require("./Step"));

var _Line = _interopRequireDefault(require("./Line"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// for stepper , it kinda needs few steps to work with, cannot work with just one stepper
var Stepper = function Stepper(props) {
  var container = props.container,
      stepper = props.stepper,
      stepOne = props.stepOne,
      stepTwo = props.stepTwo,
      stepThree = props.stepThree,
      label = props.label,
      hr = props.hr,
      containerClassName = props.containerClassName,
      stepperClassName = props.stepperClassName;
  return (
    /*#__PURE__*/
    // << we are limited with only 2 or 3 stepper with this code design
    _react.default.createElement("div", _extends({
      className: containerClassName
    }, container), /*#__PURE__*/_react.default.createElement("div", _extends({
      className: stepperClassName
    }, stepper), stepOne && /*#__PURE__*/_react.default.createElement(_Step.default, stepOne), hr && /*#__PURE__*/_react.default.createElement(_Line.default, hr), stepTwo && /*#__PURE__*/_react.default.createElement(_Step.default, stepTwo), hr && /*#__PURE__*/_react.default.createElement(_Line.default, hr), stepThree && /*#__PURE__*/_react.default.createElement(_Step.default, stepThree)), label && /*#__PURE__*/_react.default.createElement(_Label.default, label))
  );
};

Stepper.defaultProps = {
  labelStyle: {
    marginLeft: 15
  },
  containerClassName: "progressContainer",
  stepperClassName: "progressBar"
};
Stepper.propTypes = {
  label: _propTypes.default.string
};
var _default = Stepper;
exports.default = _default;