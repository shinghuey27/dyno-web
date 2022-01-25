import "./Label.css";

const ErrorMessage = (props) => {

    return <div {...props}>{props.label}</div>
};
ErrorMessage.defaultProps = {
    className: "errorMessage"
  };
export default ErrorMessage;
