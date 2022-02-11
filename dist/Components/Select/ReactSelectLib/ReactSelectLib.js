"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactSelectLib;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const customStyles = {
//     menu: (provided, state) => ({
//         ...provided,
//         width: 400,
//         borderBottom: '1px dotted pink',
//         color: 'gray',
//         padding: 20,
//     }),
//     control: (_, { selectProps: { width } }) => ({
//         width: width
//     }),
//     singleValue: (provided, state) => {
//         const opacity = state.isDisabled ? 0.5 : 1;
//         const transition = 'opacity 300ms';
//         return { ...provided, opacity, transition };
//     }
// }
function ReactSelectLib(props) {
  var options = props.options;
  return /*#__PURE__*/_react.default.createElement(_reactSelect.default // styles={customStyles}
  , {
    options: options
  });
}