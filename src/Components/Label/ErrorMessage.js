import "./Label.css";

const ErrorMessage = (props) => {
  const { label, container } = props;
  return <div {...container}>{label}</div>;
};
ErrorMessage.defaultProps = {
  label: "default error",
  className: "errorMessage"
};
export default ErrorMessage;
