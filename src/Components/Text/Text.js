import { TextField } from "@mui/material";
import "./Text.css";

const Text = (props) => {
  console.log(props.error, "abcdef");
  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      // className={props.error === "true" ? "error" : "text"}
      {...props}
    ></input>
  );
};
Text.defaultProps = {
  className: "text"
};

export default Text;
