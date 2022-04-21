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

var _SampleErrorForm = require("../SampleData/SampleErrorForm");

var _Components = require("../Components");

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

var CustomDesign = function CustomDesign() {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field"
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
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Textbox.default, {
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
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Components.Select, {
    label: {
      label: "Select Recipent Bank"
    },
    description: {
      label: "this is search bar"
    },
    data: _List.sampleItem,
    text: {
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
    },
    listBox: {
      style: {
        backgroundColor: "#44444F",
        margin: 0,
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
    },
    item: {
      style: {
        backgroundColor: "#44444F",
        marginBottom: ".5rem",
        cursor: "pointer"
      },
      className: "itemList"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "6rem"
    }
  }), /*#__PURE__*/React.createElement(_DatePicker.default // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: "Effective Date",
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
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_RadioButton.default, {
    label: "Instant Tranfer",
    checkMark: {
      style: {
        backgroundColor: "green"
      }
    }
  }), /*#__PURE__*/React.createElement(_RadioButton.default, {
    label: "IBG Transfer",
    checkMark: {
      style: {
        backgroundColor: "green"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Switch.default, {
    label: "Set Recurring",
    slider: {
      style: {
        backgroundColor: "green"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: "Add to favorite",
    checkMark: {
      style: {
        backgroundColor: "green"
      }
    }
  }), /*#__PURE__*/React.createElement("br", null));
};

var _default = CustomDesign;
exports.default = _default;