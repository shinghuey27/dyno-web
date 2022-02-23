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
  var name = props.name,
      id = props.id,
      field = props.field,
      item = props.item,
      text = props.text,
      labelStyle = props.labelStyle,
      error = props.error,
      tooltip = props.tooltip,
      description = props.description; //Access to all props that introduced in element.

  var _ref = item || {
    placeholder: ""
  },
      label = _ref.label,
      placeholder = _ref.placeholder;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelStyle)), tooltip && /*#__PURE__*/_react.default.createElement(_Tooltips.default, {
    label: tooltip.label,
    style: tooltip.style,
    className: tooltip.className
  })), /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
    style: text === null || text === void 0 ? void 0 : text.style,
    className: text === null || text === void 0 ? void 0 : text.className,
    name: name,
    id: id,
    placeholder: placeholder
  }, field)), /*#__PURE__*/_react.default.createElement("div", null, description && /*#__PURE__*/_react.default.createElement(_Description.default, {
    label: description.label,
    style: description.style,
    className: description.className
  })), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({
    style: error === null || error === void 0 ? void 0 : error.style,
    className: error === null || error === void 0 ? void 0 : error.className
  }, props)));
};

var _default = Textbox;
exports.default = _default;