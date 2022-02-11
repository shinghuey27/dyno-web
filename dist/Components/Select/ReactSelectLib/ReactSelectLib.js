import React from "react";
import ReactSelect from "react-select"; // const customStyles = {
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

export default function ReactSelectLib(props) {
  const {
    options
  } = props;
  return /*#__PURE__*/React.createElement(ReactSelect // styles={customStyles}
  , {
    options: options
  });
}