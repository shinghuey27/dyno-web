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

var _List = require("./SampleData/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Components.Textbox, {
    item: {
      label: 'My Account',
      description: 'desc'
    },
    labelStyle: {
      style: {
        color: 'black'
      }
    },
    textboxStyle: {
      className: "textClass"
    },
    errorStyle: {
      style: {
        color: 'blue'
      }
    },
    descriptionStyle: {
      style: {
        color: 'yellow'
      }
    },
    error: true
  })));
}

var _default = App;
exports.default = _default;