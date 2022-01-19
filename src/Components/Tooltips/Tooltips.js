import "./Tooltips.css";
import Tooltip from '@mui/material/Tooltip';
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const _renderChildren = (type, children) => {
  switch (type) {
    case 'icon':
      return <IconButton>
        <DeleteIcon />
      </IconButton>

    default:
      return (
        <>
          {React.Children.map(children, child => (
            <>
              {React.cloneElement(child)}
            </>
          ))}
        </>
      )
  }
}

const Tooltips = (props) => {
  const { label = 'Tooltips', type } = props;
  return (
    <Tooltip title={label}>
      {_renderChildren(type, props.children)}
    </Tooltip>
  );
};

export default Tooltips;
