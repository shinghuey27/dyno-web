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
        <div style={{ alignItems: "center", display: "flex" }}>
          <Label
            label={label.label}
            style={label.style}
            className={label.className}
          />
          <Tooltip title={tooltip.label}>
            <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
          </Tooltip>
        </div>
        <Text
          placeholder={text.placeholder}
          style={text.style}
          className={text.className}
        />
        <>
          <Description
            label={description.label}
            style={description.style}
            className={description.className}
          />
        </>

        <ErrorMessage
          label={error.label}
          style={error.style}
          className={error.className}
        />
    </>
  );
};

export default TextboxDynoSH;
