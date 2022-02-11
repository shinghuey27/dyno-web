import Text from "../Text/Text";
import Label from "../Label/Label";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltips from "../Tooltip/Tooltips";

const Textbox = props => {
  const {
    label,
    text,
    error,
    tooltip,
    description
  } = props;
  return (
    /*#__PURE__*/
    // <>   <-- before is fragment , but need to wrap it with div to make it a single block, so that can be use with other molecules
    React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
      label: label.label,
      style: label.style,
      className: label.className
    }), tooltip && /*#__PURE__*/React.createElement(Tooltips, {
      label: tooltip.label,
      style: tooltip.style,
      className: tooltip.className
    })), text && /*#__PURE__*/React.createElement(Text, {
      placeholder: text.placeholder,
      style: text.style,
      className: text.className
    }), /*#__PURE__*/React.createElement("div", null, description && /*#__PURE__*/React.createElement(Description, {
      label: description.label,
      style: description.style,
      className: description.className
    })), error && /*#__PURE__*/React.createElement(ErrorMessage, {
      label: error.label,
      style: error.style,
      className: error.className
    }))
  );
};

export default Textbox;