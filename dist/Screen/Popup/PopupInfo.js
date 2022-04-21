"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupInfoModule = _interopRequireDefault(require("./PopupInfo.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopupInfo = function PopupInfo() {
  return /*#__PURE__*/React.createElement("div", {
    className: _PopupInfoModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupInfoModule.default.container1
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: _PopupInfoModule.default.title
  }, "Home Branch"), /*#__PURE__*/React.createElement("label", {
    className: _PopupInfoModule.default.description
  }, "An account\u2019s home branch is the Maybank branch where it was registered and set up."))), /*#__PURE__*/React.createElement("div", {
    className: _PopupInfoModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Done"
    },
    style: {
      fontWeight: "bold"
    }
  })));
};

var _default = PopupInfo;
exports.default = _default;