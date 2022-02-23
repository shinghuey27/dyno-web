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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Components.DatePicker // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: "Calendar",
    datePicker: {
      showYearDropdown: false // style: {},
      // calendarClassName: 'datepick2',
      // calendarContainer: ({ className, children }) =>
      //   renderCalendar({ className, children })

    }
  }), /*#__PURE__*/React.createElement(_Components.Textbox, (_React$createElement = {
    label: true,
    text: true,
    name: "amount",
    description: true,
    error: _SampleErrorForm.error
  }, _defineProperty(_React$createElement, "label", {
    label: "ID Number 2",
    className: "labelClass"
  }), _defineProperty(_React$createElement, "tooltip", {
    label: "abc"
  }), _defineProperty(_React$createElement, "text", {
    className: "textClass"
  }), _defineProperty(_React$createElement, "description", {
    label: "description 2"
  }), _defineProperty(_React$createElement, "error", {
    label: "*Please enter valid ID number",
    className: "errorClass"
  }), _React$createElement))));
}

var _default = App;
exports.default = _default;