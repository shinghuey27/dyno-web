import "./Label.css";

const ErrorMessage = (props) => {

    return <div {...props}>{props.text}</div>
};
ErrorMessage.defaultProps = {
    className: "errorMessage"
  };
export default ErrorMessage;
