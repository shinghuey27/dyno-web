import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Text from "../Text/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltip from "@mui/material/Tooltip";

const TextboxDynoSH = (props) => {
  const { label, text, error, tooltip, description } = props;
  return (
    <>
      <div>
        <div style={{ alignItems: "center", display: "flex" }}>
          <Label
            text={label.text}
            style={label.style}
            className={label.className}
          />
          <Tooltip title={tooltip.text}>
            <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
          </Tooltip>
        </div>
        <Text
          placeholder={text.placeholder}
          style={text.style}
          className={text.className}
        />
        <div>
          <Description
            text={description.text}
            style={description.style}
            className={description.className}
          />
        </div>

        <ErrorMessage
          text={error.text}
          style={error.style}
          className={error.className}
        />
      </div>
    </>
  );
};

export default TextboxDynoSH;
