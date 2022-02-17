import React, { useState } from "react";
import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { sampleItem } from "../../SampleData/List";
import Proptypes from "prop-types";

const Searchbar = (props) => {
  const {
    id,
    name,
    field,
    error,
    item,

    data,    
    text,
    
    listBox,
    listItem,
    icon,
    iconStyle,
    listboxStyle,
  } = props;

  const { label, options, placeholder, description } = item || { label: "" };

  // const { child, error, name, item, field } = props; <- props for integration
  const {  onChange } = field || { onChange: ()=>{} };;
  const defaultData = data && data.length ? data : sampleItem;

  return (
    <div>
      <div style={{
        display: "flex",
      }}>
        <Textbox
          label={label}
          text={text}
          description={description}
          error={error}
        />
        <div>
          {icon && <KeyboardArrowDownIcon style={{ ...iconStyle }} {...icon} />}
        </div>
      </div>
      {/* <div style={{ backgroundColor: 'violet' }}>asd
        <div style={{ position: 'absolute', backgroundColor: 'yellow' }}>fami</div>
      </div> */}
      <div
        style={{ ...listboxStyle }}
      >
        {data && <List data={defaultData} listBox={listBox} item={listItem} onChange={onChange} />}
      </div>
    </div>
  );
}

Searchbar.defaultProps = {
  iconStyle: { marginTop: 30 },
  listboxStyle: {
    position: "relative",
    top: 40

  },
  descriptiontext: { label: '' }
};

Searchbar.propTypes = {
  data: Proptypes.array.isRequired
}

export default Searchbar;
