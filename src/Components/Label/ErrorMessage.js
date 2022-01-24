import "./Label.css";

const ErrorMessage = (props) => {

    return <div {...props}>{props.value}</div>
};
ErrorMessage.defaultProps = {
    className: "errorMessage"
  };
export default ErrorMessage;
