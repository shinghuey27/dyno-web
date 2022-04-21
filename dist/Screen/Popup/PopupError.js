"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PopupError;

var _UIComponents = require("../../UIComponents");

var _PopupErrorModule = _interopRequireDefault(require("./PopupError.module.scss"));

var _Error = _interopRequireDefault(require("../../Asset/Logo/Error.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PopupError() {
  return /*#__PURE__*/React.createElement("div", {
    className: _PopupErrorModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupErrorModule.default.container1
  }, /*#__PURE__*/React.createElement("img", {
    src: _Error.default,
    alt: "React Logo",
    className: _PopupErrorModule.default.icon
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: _PopupErrorModule.default.title
  }, "Service Unavailable"), /*#__PURE__*/React.createElement("label", {
    className: _PopupErrorModule.default.description
  }, "FD placement and upliftment are only available from 6.00am to 10.00pm."))), /*#__PURE__*/React.createElement("div", {
    className: _PopupErrorModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Got It"
    },
    style: {
      color: "#0E1B42",
      fontWeight: 500
    }
  })));
}