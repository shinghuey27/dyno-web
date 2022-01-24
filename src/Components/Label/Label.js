import "./Label.css";
import PropTypes from "prop-types";

const Label = (props) => {
  return <label {...props}>{props.text}</label>;
};

Label.defaultProps = {
  className: "label"
};

Label.propTypes = {
  value: PropTypes.string.isRequired
};

export default Label;
