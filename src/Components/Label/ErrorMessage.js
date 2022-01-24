import "./Label.css";

const ErrorMessage = (props) => {

    return <span className="errorMessage" {...props}>{props.value}</span>
};

export default ErrorMessage;
