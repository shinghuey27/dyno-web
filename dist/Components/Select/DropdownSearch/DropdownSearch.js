"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownSearch;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AutocompleteUnstyled = require("@mui/base/AutocompleteUnstyled");

var _Check = _interopRequireDefault(require("@mui/icons-material/Check"));

var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));

var _styles = require("@mui/material/styles");

var _Label = _interopRequireDefault(require("../../Label/Label"));

var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));

var _excluded = ["label", "onDelete"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Root = (0, _styles.styled)("div")(function (_ref) {
  var theme = _ref.theme;
  return "\n  color: ".concat(theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)", ";\n  font-size: 14px;\n");
}); // const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;

var InputWrapper = (0, _styles.styled)("div")(function (_ref2) {
  var theme = _ref2.theme;
  return "\n  width: 300px;\n  border: 1px solid ".concat(theme.palette.mode === "dark" ? "#434343" : "#d9d9d9", ";\n  background-color: ").concat(theme.palette.mode === "dark" ? "#141414" : "#fff", ";\n  border-radius: 30px;\n  padding: 1px;\n  display: flex;\n  flex-wrap: wrap;\n\n  &:hover {\n    border-color: ").concat(theme.palette.mode === "dark" ? "#177ddc" : "rgb(1, 204, 206)", ";\n  }\n\n  &.focused {\n    border-color: ").concat(theme.palette.mode === "dark" ? "#177ddc" : "rgb(1, 204, 206)", ";\n    \n  }\n\n  & input {\n    background-color: ").concat(theme.palette.mode === "dark" ? "#141414" : "transparent", ";\n    color: ").concat(theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)", ";\n    height: 30px;\n    box-sizing: border-box;\n    padding: 4px 6px;\n    \n    width: 0;\n    min-width: 30px;\n    flex-grow: 1;\n    border: 0;\n    margin: 0;\n    outline: 0;\n  }\n");
});

function Tag(props) {
  var label = props.label,
      onDelete = props.onDelete,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", other, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(_Close.default, {
    onClick: onDelete
  }));
}

Tag.propTypes = {
  label: _propTypes.default.string.isRequired,
  onDelete: _propTypes.default.func.isRequired
};
var StyledTag = (0, _styles.styled)(Tag)(function (_ref3) {
  var theme = _ref3.theme;
  return "\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin: 2px;  \n\n  line-height: 22px;\n  background-color: ".concat(theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "transparent", ";\n  \n  border-radius: 2px;\n  box-sizing: content-box;\n  padding: 0 4px 0 10px;\n  outline: 0;\n  overflow: hidden;\n\n  &:focus {\n    border-color: ").concat(theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff", ";\n    background-color: ").concat(theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff", ";\n  }\n\n  & span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  & svg {\n    font-size: 12px;\n    cursor: pointer;\n    padding: 4px;\n  }\n");
});
var Listbox = (0, _styles.styled)("ul")(function (_ref4) {
  var theme = _ref4.theme;
  return "\n  width: 300px;\n  margin: 2px 0 0;\n  padding: 0;\n  padding-top:10px;\n  position: absolute;    \n  list-style: none;\n  background-color: ".concat(theme.palette.mode === "dark" ? "#141414" : "#fff", ";\n  overflow: auto;\n  max-height: 250px;\n  \n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1;\n\n  & li {\n    padding: 5px 12px;\n    display: flex;\n\n    & span {\n      flex-grow: 1;\n    }\n\n    & svg {\n      color: transparent;\n    }\n  }\n\n  & li[aria-selected='true'] {\n    background-color: ").concat(theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa", ";\n    font-weight: 600;\n\n    // & svg {\n    //   color: #1890ff;\n    // }\n  }\n\n  & li[data-focus='true'] {\n    background-color: ").concat(theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff", ";\n    cursor: pointer;\n    \n\n    & svg {\n      color: currentColor;\n    }\n  }\n");
});

var renderItem = function renderItem(dropdownType, index, option) {
  switch (dropdownType) {
    case "2":
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        style: {
          height: 20,
          marginRight: 20
        },
        src: require("../../../Asset/Logo/".concat(index + 1, ".png"))
      }), /*#__PURE__*/React.createElement("span", null, option.title), /*#__PURE__*/React.createElement(_Check.default, {
        fontSize: "small"
      }));

    case "3":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement("span", null, option === null || option === void 0 ? void 0 : option.title), /*#__PURE__*/React.createElement("span", null, option === null || option === void 0 ? void 0 : option.accNo)), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          textAlign: "end",
          marginRight: 0,
          paddingRight: 0
        }
      }, "RM ", option === null || option === void 0 ? void 0 : option.balance), /*#__PURE__*/React.createElement(_Check.default, {
        fontSize: "small"
      }));

    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, option.title), /*#__PURE__*/React.createElement(_Check.default, {
        fontSize: "small"
      }));
  }
};

function DropdownSearch(_ref5) {
  var listOptions = _ref5.listOptions,
      label = _ref5.label,
      dropdownType = _ref5.dropdownType,
      containerStyle = _ref5.containerStyle;

  var _useAutocomplete = (0, _AutocompleteUnstyled.useAutocomplete)({
    id: "customized-hook-demo",
    defaultValue: [listOptions[1]],
    multiple: true,
    options: listOptions,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    label: label,
    dropdownType: "1"
  }),
      getRootProps = _useAutocomplete.getRootProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getInputProps = _useAutocomplete.getInputProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      groupedOptions = _useAutocomplete.groupedOptions,
      value = _useAutocomplete.value,
      focused = _useAutocomplete.focused,
      setAnchorEl = _useAutocomplete.setAnchorEl;

  return /*#__PURE__*/React.createElement(Root, {
    style: _objectSpread({}, containerStyle)
  }, /*#__PURE__*/React.createElement("div", getRootProps(), /*#__PURE__*/React.createElement(_Label.default, {
    value: label
  }), /*#__PURE__*/React.createElement(InputWrapper, {
    ref: setAnchorEl,
    className: focused ? "focused" : ""
  }, value.map(function (option, index) {
    return /*#__PURE__*/React.createElement(StyledTag, _extends({
      label: option.title
    }, getTagProps({
      index: index
    })));
  }), /*#__PURE__*/React.createElement("input", getInputProps()), /*#__PURE__*/React.createElement(_ArrowDropDown.default, {
    style: {
      marginTop: 4
    }
  }))), groupedOptions.length > 0 ? /*#__PURE__*/React.createElement(Listbox, getListboxProps(), groupedOptions.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", getOptionProps({
      option: option,
      index: index
    }), renderItem(dropdownType, index, option));
  })) : null);
}