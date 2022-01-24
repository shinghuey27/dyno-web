import { TextField } from "@mui/material";
import "./Text.css";

const Text = (props) => {
  console.log(props.error,"abcdef");
  return (
    <span>
      {/* RM */}
      <input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        // className={props.error === "true" ? "error" : "text"}
        {...props}
      ></input>
    </span>
  );

};
Text.defaultProps = {
  className: "text"
}

export default Text;
