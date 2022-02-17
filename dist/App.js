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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Components.Textbox, {
    text: true
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