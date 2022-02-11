"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../App.css");

var _Textbox = _interopRequireDefault(require("../Components/Textbox/Textbox"));

var _Searchbar = _interopRequireDefault(require("../Components/Searchbar/Searchbar"));

var _DatePicker = _interopRequireDefault(require("../Components/DatePicker/DatePicker"));

var _Stepper = _interopRequireDefault(require("../Components/ProgressBar/Stepper"));

var _Checkbox = _interopRequireDefault(require("../Components/Checkbox/Checkbox"));

var _RadioButton = _interopRequireDefault(require("../Components/RadioButton/RadioButton"));

var _Switch = _interopRequireDefault(require("../Components/Switch/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultDesign = function DefaultDesign() {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field",
    style: {
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement(_Textbox.default, {
    label: true,
    text: true,
    description: true,
    error: true
  }), /*#__PURE__*/React.createElement(_Searchbar.default, {
    label: true,
    text: true,
    data: true,
    listBox: true,
    item: true,
    icon: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60
    }
  }), /*#__PURE__*/React.createElement(_Stepper.default, {
    stepOne: true,
    stepTwo: true,
    label: true
  }), /*#__PURE__*/React.createElement(_DatePicker.default // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: 'Calendar',
    datePicker: {
      showYearDropdown: true
    }
  }), /*#__PURE__*/React.createElement(_RadioButton.default, {
    label: true
  }), /*#__PURE__*/React.createElement(_Switch.default, {
    label: true
  }), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: true
  }));
};

var _default = DefaultDesign;
exports.default = _default;