"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Searchbar = _interopRequireDefault(require("./Components/Searchbar/Searchbar"));

var _CustomDesign = _interopRequireDefault(require("./Screen/CustomDesign"));

var _DefaultDesign = _interopRequireDefault(require("./Screen/DefaultDesign"));

var _Button = _interopRequireDefault(require("./Components/Button/Button"));

var _Components = require("./Components");

var _SampleErrorForm = require("./SampleData/SampleErrorForm");

var _SamplePropsIntegration = require("./SampleData/SamplePropsIntegration");

var _reactDatepicker = require("react-datepicker");

var _Select = _interopRequireDefault(require("./Components/Select/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderCalendar = function renderCalendar(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      background: "#216ba5",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(_reactDatepicker.CalendarContainer, {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#f0f0f0"
    }
  }, "What is your favorite day?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children)));
};

function App(props) {
  var _React$createElement;

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Searchbar.default, (_React$createElement = {
    name: "paymentType",
    label: true,
    text: true // error={error}

  }, _defineProperty(_React$createElement, "label", {
    label: "Search"
  }), _defineProperty(_React$createElement, "description", {
    label: "this is search bar"
  }), _defineProperty(_React$createElement, "text", {
    style: {
      border: "1px solid #ddd",
      borderRadius: "4px",
      height: 40,
      width: 278,
      margin: 0,
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Lato",
      boxSizing: "border-box"
    }
  }), _React$createElement)), /*#__PURE__*/React.createElement(_Components.Checkbox, {
    name: "checkbox2" // error={error}
    ,
    item: {
      label: 'my label'
    } // checkMark={{ style: { backgroundColor: "red" } }}
    // container={{ style: { color: "green", "&::after": {} } }}

  }), /*#__PURE__*/React.createElement(_Select.default, null)));
}

var _default = App;
exports.default = _default;