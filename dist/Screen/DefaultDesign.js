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

var _List = require("../SampleData/List");

var _Components = require("../Components");

var _SampleErrorForm = require("../SampleData/SampleErrorForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultDesign = function DefaultDesign() {
  var options = [{
    label: "IBFT",
    value: "IBFT"
  }, {
    label: "GIRO",
    value: "GIRO"
  }];
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, "Default Design"), /*#__PURE__*/React.createElement(_Stepper.default, {
    container: {
      style: {
        justifyContent: "center"
      }
    },
    stepOne: true,
    stepTwo: true,
    label: {
      label: "Step 2/2"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Textbox.default, {
    name: "account",
    item: {
      label: "Account Number",
      description: "Account Number"
    },
    text: true,
    error: _SampleErrorForm.error
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Textbox.default, {
    name: "amount",
    item: {
      label: "Transfer Amount",
      description: "Amount in MYR"
    },
    text: true,
    error: _SampleErrorForm.error,
    tootltipStyle: {
      label: "You can adjust your limit via settings"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Components.Select, {
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
    error: _SampleErrorForm.error
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_DatePicker.default, {
    name: "calendar",
    item: {
      label: "Effective Date"
    },
    error: _SampleErrorForm.error
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_RadioButton.default, {
    name: "instant",
    item: {
      label: "Instant Transfer"
    }
  }), /*#__PURE__*/React.createElement(_RadioButton.default, {
    name: "ibg",
    item: {
      label: "IBG Transfer"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Switch.default, {
    item: {
      label: "Set Recurring"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Checkbox.default, {
    item: {
      label: "Add to favorite"
    }
  }));
};

var _default = DefaultDesign;
exports.default = _default;