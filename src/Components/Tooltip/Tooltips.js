import Label from "../Label/Label";
import "./Tooltips.css";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Tooltips = (props) => {
  return (
    <Tooltip title={props.label}>
      <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} />
    </Tooltip>
  );
};

export default Tooltips;
