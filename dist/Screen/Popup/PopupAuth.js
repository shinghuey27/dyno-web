"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupAuthModule = _interopRequireDefault(require("./PopupAuth.module.scss"));

require("../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopupAuth = function PopupAuth() {
  var _ref;

  return /*#__PURE__*/React.createElement("div", {
    className: _PopupAuthModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "27px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: _PopupAuthModule.default.title
  }, "Authorise Transaction"), /*#__PURE__*/React.createElement("div", {
    className: _PopupAuthModule.default.description
  }, "Enter the 6-digit code sent to 013XXXX595.")), /*#__PURE__*/React.createElement(_UIComponents.Textbox, {
    id: "input",
    item: {
      label: "Transaction Authorisation Code",
      placeholder: "Enter TAC"
    },
    textboxStyle: {
      style: {
        width: "100%",
        boxSizing: "border-box"
      },
      className: "text placeholder"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: _PopupAuthModule.default.container2
  }, /*#__PURE__*/React.createElement("label", {
    className: _PopupAuthModule.default.time
  }, "Resend 01:59"), /*#__PURE__*/React.createElement("div", {
    className: _PopupAuthModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Cancel"
    },
    style: (_ref = {
      fontWeight: "bold",
      backgroundColor: "#B0BAD7",
      border: "#B0BAD7",
      color: "#FFFFFF"
    }, _defineProperty(_ref, "fontWeight", 500), _defineProperty(_ref, "marginRight", "6px"), _ref),
    disabled: true
  }), /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Submit"
    },
    style: {
      fontWeight: "bold"
    },
    disabled: true
  }))));
};

var _default = PopupAuth;
exports.default = _default;