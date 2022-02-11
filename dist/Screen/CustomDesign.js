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

var _reactDatepicker = require("react-datepicker");

var _Checkbox = _interopRequireDefault(require("../Components/Checkbox/Checkbox"));

var _RadioButton = _interopRequireDefault(require("../Components/RadioButton/RadioButton"));

var _List = require("../SampleData/List");

var _Switch = _interopRequireDefault(require("../Components/Switch/Switch"));

var _Components = require("../Components");

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

var CustomDesign = function CustomDesign() {
  var _React$createElement, _React$createElement2, _React$createElement3;

  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field",
    style: {
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement(_Textbox.default, (_React$createElement = {
    label: true,
    text: true,
    description: true,
    error: true
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
  }), _React$createElement)), /*#__PURE__*/React.createElement(_Searchbar.default, (_React$createElement2 = {
    label: true,
    text: true
  }, _defineProperty(_React$createElement2, "label", {
    label: "Search"
  }), _defineProperty(_React$createElement2, "description", {
    label: "this is search bar"
  }), _defineProperty(_React$createElement2, "data", _List.optionsSample), _defineProperty(_React$createElement2, "text", {
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
  }), _defineProperty(_React$createElement2, "listBox", {
    style: {
      backgroundColor: "#44444F",
      margin: 0,
      zIndex: 200,
      position: "absolute",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      borderRadius: 8,
      boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
      padding: 10,
      width: 260,
      top: -40,
      overflow: "scroll",
      height: 50,
      overflowX: "hidden"
    },
    className: "listBox"
  }), _defineProperty(_React$createElement2, "item", {
    style: {
      backgroundColor: "#44444F"
    },
    className: "itemList"
  }), _defineProperty(_React$createElement2, "icon", {
    style: {
      marginTop: 50
    }
  }), _React$createElement2)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60
    }
  }), /*#__PURE__*/React.createElement(_Stepper.default, (_React$createElement3 = {
    stepOne: true,
    stepTwo: true // stepThree
    // label
    ,
    stepper: {
      style: {
        display: "flex",
        flex: 1
      }
    }
  }, _defineProperty(_React$createElement3, "stepOne", {
    style: {
      backgroundColor: "white",
      flex: 1,
      fontSize: 14,
      height: 20
    },
    text: "Select your goal"
  }), _defineProperty(_React$createElement3, "stepTwo", {
    style: {
      backgroundColor: "white",
      flex: 1,
      fontSize: 14,
      height: 20,
      marginLeft: 20
    },
    text: "Define your goal"
  }), _defineProperty(_React$createElement3, "hr", true), _defineProperty(_React$createElement3, "hr", {
    style: {
      border: "1px solid black",
      flex: 1,
      height: 0.1,
      marginTop: 22
    }
  }), _React$createElement3)), /*#__PURE__*/React.createElement(_DatePicker.default // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: "Calendar",
    datePicker: {
      showYearDropdown: true,
      // style: {},
      // calendarClassName: 'datepick2',
      calendarContainer: function calendarContainer(_ref2) {
        var className = _ref2.className,
            children = _ref2.children;
        return renderCalendar({
          className: className,
          children: children
        });
      }
    }
  }), /*#__PURE__*/React.createElement(_RadioButton.default, {
    label: "new label"
  }), /*#__PURE__*/React.createElement(_Switch.default, {
    label: "new label"
  }), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: true,
    checkMark: {
      style: {
        backgroundColor: "red"
      }
    },
    container: {
      style: {
        color: "green",
        "&::after": {}
      }
    }
  }));
};

var _default = CustomDesign;
exports.default = _default;