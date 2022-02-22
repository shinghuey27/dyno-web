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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Components.DatePicker // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: "Calendar",
    datePicker: {
      showYearDropdown: false // style: {},
      // calendarClassName: 'datepick2',
      // calendarContainer: ({ className, children }) =>
      //   renderCalendar({ className, children })

    }
  }), /*#__PURE__*/React.createElement(_Button.default, {
    style: {
      marginTop: 40
    },
    label: "Pay Now",
    managedCallback: function managedCallback() {
      console.log('button click');
    }
  })));
}

var _default = App;
exports.default = _default;