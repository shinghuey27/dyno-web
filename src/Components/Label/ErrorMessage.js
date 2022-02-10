import "./Label.css";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  const { label, container } = props;
  return <div {...container}>{label}</div>;
};

ErrorMessage.defaultProps = {
  label: "default error",
  className: "errorMessage"
};

ErrorMessage.propTypes = {
  value: PropTypes.string.isRequired
};

export default ErrorMessage;
