import React from "react";
import Text from "../Text/Text";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import Label from "../Label/Label";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function TextboxDyno_0(props) {
  const {
    labelText,
    descriptionText,
    errorText,

    onChangeText,

    containerStyle,
    titleStyle,
    inputStyle,
    descriptionStyle,
    errorStyle
  } = props;

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", ...containerStyle }}
      >
        <div>
          <Label value={labelText} style={{ ...titleStyle }} {...props} />
          <Tooltip title="help" style={{}}>
            <HelpOutlineIcon fontSize="10px" style={{}} />
          </Tooltip>
        </div>

        <Text style={{ ...inputStyle }} {...props} />

        <Label
          value={descriptionText}
          style={{ color: "black", ...descriptionStyle }}
          {...props}
        />

        <Label
          value={errorText}
          style={{ color: "red", ...errorStyle }}
          {...props}
        />
      </div>
    </>
  );
}

export default TextboxDyno_0;
