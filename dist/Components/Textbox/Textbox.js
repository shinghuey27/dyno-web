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

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement(_Label.default, {
    label: label,
    className: labelStyle === null || labelStyle === void 0 ? void 0 : labelStyle.className,
    style: labelStyle === null || labelStyle === void 0 ? void 0 : labelStyle.style // {...labelStyle} 

  }), tootltipStyle && /*#__PURE__*/_react.default.createElement(_Tooltips.default, {
    className: tootltipStyle === null || tootltipStyle === void 0 ? void 0 : tootltipStyle.className,
    style: tootltipStyle === null || tootltipStyle === void 0 ? void 0 : tootltipStyle.style
  })), /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
    className: textboxStyle === null || textboxStyle === void 0 ? void 0 : textboxStyle.className,
    style: textboxStyle === null || textboxStyle === void 0 ? void 0 : textboxStyle.style,
    placeholder: placeholder
  }, field)), /*#__PURE__*/_react.default.createElement("div", null, description && /*#__PURE__*/_react.default.createElement(_Description.default, {
    label: description,
    className: descriptionStyle === null || descriptionStyle === void 0 ? void 0 : descriptionStyle.className,
    style: descriptionStyle === null || descriptionStyle === void 0 ? void 0 : descriptionStyle.style // {...descriptionStyle}

  })), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({
    className: errorStyle === null || errorStyle === void 0 ? void 0 : errorStyle.className,
    style: errorStyle === null || errorStyle === void 0 ? void 0 : errorStyle.style
  }, props)));
};

var _default = Textbox;
exports.default = _default;