"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupSettingModule = _interopRequireDefault(require("./PopupSetting.module.scss"));

var _hill = _interopRequireDefault(require("../../Asset/image/hill.png"));

var _Icon = _interopRequireDefault(require("../../Asset/Icon/Icon.svg"));

require("../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopupSetting = function PopupSetting() {
  var _ref;

  return /*#__PURE__*/React.createElement("div", {
    className: _PopupSettingModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupSettingModule.default.yellowContainer
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      top: "31px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _hill.default,
    alt: "React Logo",
    className: _PopupSettingModule.default.icon
  }), /*#__PURE__*/React.createElement("img", {
    src: _Icon.default,
    alt: "React Logo",
    className: _PopupSettingModule.default.iconImg
  }))), /*#__PURE__*/React.createElement("div", {
    className: _PopupSettingModule.default.labelContainer
  }, /*#__PURE__*/React.createElement("h3", {
    className: _PopupSettingModule.default.title
  }, " Security Image"), /*#__PURE__*/React.createElement("label", {
    className: _PopupSettingModule.default.description
  }, "Select your preferred security image for verification.")), /*#__PURE__*/React.createElement("div", {
    className: _PopupSettingModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Cancel"
    },
    style: (_ref = {
      fontWeight: "bold",
      backgroundColor: "#B0BAD7",
      border: "#B0BAD7",
      color: "#FFFFFF"
    }, _defineProperty(_ref, "fontWeight", 500), _defineProperty(_ref, "marginRight", "10px"), _ref)
  }), /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Confirm"
    },
    style: {
      fontWeight: "bold"
    }
  })));
};

var _default = PopupSetting;
exports.default = _default;