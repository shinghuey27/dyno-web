import { TextField } from "@mui/material";
import "./Text.css";

const Text = (props) => {
  return (
    <span>
      {/* RM */}
      <input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={props.error === true ? "error" : "text"}
        prefix="hehe"
        {...props}
      ></input>
    </span>
  );
};

export default Text;
