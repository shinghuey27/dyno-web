"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupWarningModule = _interopRequireDefault(require("./PopupWarning.module.scss"));

var _Warning = _interopRequireDefault(require("../../Asset/Logo/Warning.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopupWarning = function PopupWarning() {
  var _ref;

  return /*#__PURE__*/React.createElement("div", {
    className: _PopupWarningModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupWarningModule.default.container1
  }, /*#__PURE__*/React.createElement("img", {
    src: _Warning.default,
    alt: "React Logo",
    className: _PopupWarningModule.default.icon
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: _PopupWarningModule.default.title
  }, "Are you sure you want to cancel this upliftment?"))), /*#__PURE__*/React.createElement("div", {
    className: _PopupWarningModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Not Now"
    },
    style: (_ref = {
      fontWeight: "bold",
      backgroundColor: "#B0BAD7",
      border: "#B0BAD7",
      color: "#FFFFFF"
    }, _defineProperty(_ref, "fontWeight", 500), _defineProperty(_ref, "marginRight", "6px"), _ref)
  }), /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Yes"
    },
    style: {
      fontWeight: "bold"
    }
  })));
};

var _default = PopupWarning;
exports.default = _default;