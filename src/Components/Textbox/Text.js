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
        style={{borderRadius:"15px",border:"1px solid #ff6167"}}
        // className="error"
        {...props}
      ></input>
    </span>
  );
};

export default Text;
