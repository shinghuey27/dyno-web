import { TextField } from "@mui/material";
import "./Text.css";

const Text = (props) => {
  return (

    <input
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className="error"
      {...props}
    ></input>

  );
};

export default Text;
