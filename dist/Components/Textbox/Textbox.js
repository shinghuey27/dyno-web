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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Textbox = function Textbox(props) {
  var name = props.name,
      id = props.id,
      field = props.field,
      placeholder = props.placeholder,
      label = props.label,
      text = props.text,
      error = props.error,
      tooltip = props.tooltip,
      description = props.description;
  return (
    /*#__PURE__*/
    // <>   <-- before is fragment , but need to wrap it with div to make it a single block, so that can be use with other molecules
    _react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement(_Label.default, {
      label: label.label,
      style: label.style,
      className: label.className
    }), tooltip && /*#__PURE__*/_react.default.createElement(_Tooltips.default, {
      label: tooltip.label,
      style: tooltip.style,
      className: tooltip.className
    })), text && /*#__PURE__*/_react.default.createElement(_Text.default, _extends(_defineProperty({
      placeholder: text === null || text === void 0 ? void 0 : text.placeholder,
      style: text === null || text === void 0 ? void 0 : text.style,
      className: text === null || text === void 0 ? void 0 : text.className,
      name: name,
      id: id
    }, "placeholder", placeholder), field)), /*#__PURE__*/_react.default.createElement("div", null, description && /*#__PURE__*/_react.default.createElement(_Description.default, {
      label: description.label,
      style: description.style,
      className: description.className
    })), error && /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, {
      label: error.label,
      style: error.style,
      className: error.className
    }))
  );
};

var _default = Textbox;
exports.default = _default;