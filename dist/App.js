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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App(props) {
  var _React$createElement;

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Searchbar.default, (_React$createElement = {
    label: true,
    text: true // label={{ label: "Search" }}
    ,
    description: {
      label: "this is search bar"
    } // data={optionsSample}
    ,
    data: _SamplePropsIntegration.sampleItem_Props_ForSelect['options']
  }, _defineProperty(_React$createElement, "text", {
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
  }), _defineProperty(_React$createElement, "listBox", {
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
  }), _defineProperty(_React$createElement, "item", {
    style: {
      backgroundColor: "#44444F"
    },
    className: "itemList"
  }), _defineProperty(_React$createElement, "listboxStyle", {
    position: "relative",
    top: 20
  }), _React$createElement)), /*#__PURE__*/React.createElement(_Button.default, {
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