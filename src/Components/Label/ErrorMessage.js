import "./Label.css";

const ErrorMessage = (props) => {
  return <div {...props}>{props.label}</div>;
};
ErrorMessage.defaultProps = {
  label: "default error",
  className: "errorMessage"
};
export default ErrorMessage;
