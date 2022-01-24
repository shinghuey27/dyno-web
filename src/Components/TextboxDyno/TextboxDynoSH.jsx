import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Text from "../Textbox/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltip from "@mui/material/Tooltip";

const TextboxDynoSH = (props) => {
  return (
    <>
      <div>
        <div style={{ alignItems: "center", display: "flex" }}>
          <Label
            value={props.labelText}
            style={props.labelStyle}
            className={props.labelClassName}
          />
          {/* <Tooltip title={props.tooltipText} style={{}}>
          <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
        </Tooltip> */}
        </div>
        <Text
          placeholder={props.placeholder}
          style={props.textStyle}
          className={props.textClassName}
        />
        {/* <div>
        <Description
          value={props.descText}
          style={props.descStyle}
          className={props.descClassName}
        />
      </div> */}

        <ErrorMessage
          value={props.errorText}
          style={props.errorStyle}
          className={props.errorClassName}
        />
      </div>
    </>
  );
};

export default TextboxDynoSH;
