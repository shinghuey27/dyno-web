import "./Label.css";
import PropTypes from "prop-types";

const Label = (props) => {
  return <label {...props}>{props.label}</label>;
};

Label.defaultProps = {
  label: "Default Label",
  className: "label"
};

Label.propTypes = {
  value: PropTypes.string.isRequired
};

export default Label;
