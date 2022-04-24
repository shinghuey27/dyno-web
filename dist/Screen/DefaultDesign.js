"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../App.css");

var _Textbox = _interopRequireDefault(require("../Components/Textbox/Textbox"));

var _DatePicker = _interopRequireDefault(require("../Components/DatePicker/DatePicker"));

var _Stepper = _interopRequireDefault(require("../Components/ProgressBar/Stepper"));

var _Checkbox = _interopRequireDefault(require("../Components/Checkbox/Checkbox"));

var _RadioButton = _interopRequireDefault(require("../Components/RadioButton/RadioButton"));

var _Switch = _interopRequireDefault(require("../Components/Switch/Switch"));

var _Components = require("../Components");

var _SampleErrorForm = require("../SampleData/SampleErrorForm");

var _FieldModule = _interopRequireDefault(require("../Field.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DefaultDesign = function DefaultDesign() {
  var options = [{
    label: "IBFT",
    value: "IBFT"
  }, {
    label: "GIRO",
    value: "GIRO"
  }];
  return /*#__PURE__*/React.createElement("fieldset", {
    className: _FieldModule.default.field
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
    error: _SampleErrorForm.error,
    selectStyle: {
      styles: {
        control: function control(base, state) {
          return _objectSpread(_objectSpread({}, base), {}, {
            width: "18rem"
          });
        },
        menu: function menu(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            width: "18rem"
          });
        }
      }
    }
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