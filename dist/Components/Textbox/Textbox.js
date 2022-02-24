"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../Text/Text"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _ErrorMessage = _interopRequireDefault(require("../Label/ErrorMessage"));

var _Description = _interopRequireDefault(require("../Label/Description"));

var _Tooltips = _interopRequireDefault(require("../Tooltip/Tooltips"));

var _isEmpty = require("../../Utils/isEmpty");

var _isErrorForm = require("../../Utils/isErrorForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Textbox = function Textbox(props) {
  var field = props.field,
      item = props.item,
      labelStyle = props.labelStyle,
      tootltipStyle = props.tootltipStyle,
      textboxStyle = props.textboxStyle,
      descriptionStyle = props.descriptionStyle,
      errorStyle = props.errorStyle; //Access to all props that introduced in element.

  var _ref = item || {
    placeholder: "",
    description: ''
  },
      label = _ref.label,
      placeholder = _ref.placeholder,
      description = _ref.description;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelStyle)), tootltipStyle && /*#__PURE__*/_react.default.createElement(_Tooltips.default, tootltipStyle)), /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
    placeholder: placeholder
  }, textboxStyle, field)), /*#__PURE__*/_react.default.createElement("div", null, description && /*#__PURE__*/_react.default.createElement(_Description.default, _extends({
    label: description
  }, descriptionStyle))), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({}, errorStyle, props)));
};

var _default = Textbox;
exports.default = _default;