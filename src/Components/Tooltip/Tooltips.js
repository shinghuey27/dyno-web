import React from "react";
import "./Tooltips.css";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PropTypes from "prop-types";

const Tooltips = (props) => {
  const {
    label,
    icon,
    tooltip } = props;

  return (
    <Tooltip title={label} {...tooltip}>
      <HelpOutlineIcon fontSize="10px" style={{ marginLeft: 5 }} {...icon} />
    </Tooltip>
  );
};

Tooltips.defaultProps = {
  label: "",  
};

Tooltips.propTypes = {
  label: PropTypes.string  
};


export default Tooltips;
