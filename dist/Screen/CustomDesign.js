"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../App.css");

var _Textbox = _interopRequireDefault(require("../UIComponents/Textbox/Textbox"));

var _DatePicker = _interopRequireDefault(require("../UIComponents/DatePicker/DatePicker"));

var _Stepper = _interopRequireDefault(require("../UIComponents/ProgressBar/Stepper"));

var _reactDatepicker = require("react-datepicker");

var _Checkbox = _interopRequireDefault(require("../UIComponents/Checkbox/Checkbox"));

var _RadioButton = _interopRequireDefault(require("../UIComponents/RadioButton/RadioButton"));

var _Switch = _interopRequireDefault(require("../UIComponents/Switch/Switch"));

var _SampleErrorForm = require("../SampleData/SampleErrorForm");

var _UIComponents = require("../UIComponents");

var _FieldModule = _interopRequireDefault(require("../Field.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderCalendar = function renderCalendar(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      background: "#fbf1ab",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(_reactDatepicker.CalendarContainer, {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fbf1ab"
    }
  }, "What is your favorite day?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children)));
};

var CustomDesign = function CustomDesign() {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: _FieldModule.default.field
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, "Custom Design"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.5rem"
    }
  }), /*#__PURE__*/React.createElement(_Stepper.default, {
    stepper: {
      style: {
        display: "flex",
        flex: 1
      }
    },
    stepOne: {
      style: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 14,
        textAlign: "center",
        marginTop: "0rem"
      },
      text: "Step 1"
    } // label={{ label: 'Step 2/3' }}
    ,
    hr: {
      style: {
        border: "1px solid black",
        flex: 1,
        height: 0.1
      }
    },
    stepTwo: {
      style: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 14,
        height: 20,
        textAlign: "center",
        marginTop: "0rem"
      },
      text: "Step 2"
    },
    stepThree: {
      style: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 14,
        height: 20,
        textAlign: "center",
        marginTop: "0rem"
      },
      text: "Step 3"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Textbox.default, {
    name: "account",
    item: {
      label: "Account Number",
      description: "Account Number"
    },
    error: _SampleErrorForm.error // styling here
    ,
    errorStyle: {
      className: "errorClass"
    },
    labelStyle: {
      className: "labelClass"
    },
    textboxStyle: {
      className: "textClass"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Textbox.default, {
    name: "amount",
    item: {
      label: "Transfer Amount",
      description: "Amount in MYR"
    },
    error: _SampleErrorForm.error,
    tootltipStyle: {
      label: "You can adjust your limit via settings"
    },
    errorStyle: {
      className: "errorClass"
    },
    labelStyle: {
      className: "labelClass"
    },
    textboxStyle: {
      className: "textClass"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_UIComponents.Select, {
    name: "select",
    item: {
      label: "Select Recipent bank",
      placeholder: "Please select recipent bank ",
      description: "Recipent Bank",
      options: [{
        label: "IBFT",
        value: "IBFT"
      }, {
        label: "GIRO",
        value: "GIRO"
      }]
    },
    error: _SampleErrorForm.error,
    errorStyle: {
      className: "errorClass"
    },
    selectStyle: {
      styles: {
        control: function control(base, state) {
          return _objectSpread(_objectSpread({}, base), {}, {
            "&:hover": {
              borderColor: "Green",
              cursor: "pointer"
            },
            border: "solid 0.1rem #D7D7D7"
          });
        },
        singleValue: function singleValue(base) {
          return _objectSpread(_objectSpread({}, base), {}, {
            color: "black"
          });
        },
        menu: function menu(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            backgroundColor: "#373737"
          });
        },
        option: function option(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            color: state.isFocused ? "#FFC83D" : "white",
            backgroundColor: state.isFocused ? "transparent" : "transparent"
          });
        }
      }
    },
    textboxStyle: {
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
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem"
    }
  }), /*#__PURE__*/React.createElement(_DatePicker.default, {
    name: "calendar",
    item: {
      label: "Effective Date"
    },
    containerStyle: {
      style: {
        width: "100%"
      }
    },
    calendarStyle: {
      showYearDropdown: true,
      calendarContainer: function calendarContainer(_ref2) {
        var className = _ref2.className,
            children = _ref2.children;
        return renderCalendar({
          className: className,
          children: children
        });
      },
      className: "datepick2"
    },
    error: _SampleErrorForm.error,
    errorStyle: {
      className: "errorClass"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_RadioButton.default, {
    item: {
      label: "Instant Tranfer"
    },
    checkMarkStyle: {
      style: {
        backgroundColor: "#fbf1ab"
      }
    }
  }), /*#__PURE__*/React.createElement(_RadioButton.default, {
    item: {
      label: "IBG Tranfer"
    },
    checkMarkStyle: {
      style: {
        backgroundColor: "#fbf1ab"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Switch.default, {
    item: {
      label: "Set Recurring"
    },
    sliderStyle: {
      style: {
        backgroundColor: "#fbf1ab"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Checkbox.default, {
    item: {
      label: "Add to favorite"
    },
    checkMarkStyle: {
      style: {
        backgroundColor: "#fbf1ab"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null));
};

var _default = CustomDesign;
exports.default = _default;