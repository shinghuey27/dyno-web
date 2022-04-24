"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HButton = _interopRequireDefault(require("./Components/HButton/HButton"));

var _CustomDesign = _interopRequireDefault(require("./Screen/CustomDesign"));

var _DefaultDesign = _interopRequireDefault(require("./Screen/DefaultDesign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const renderCalendar = ({ className, children }) => {
//   return (
//     <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
//       <CalendarContainer className={className}>
//         <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
//         <div style={{ position: "relative" }}>{children}</div>
//       </CalendarContainer>
//     </div>
//   );
// };
// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     marginTop: 10,
//     '&:hover': { borderColor: '#74e3e4' },
//     border: '1px solid red',
//     boxShadow: 'none',
//     borderRadius: 20,
//   })
// }
function App(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(_HButton.default, null));
}

var _default = App;
exports.default = _default;