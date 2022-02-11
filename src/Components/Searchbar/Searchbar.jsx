import React from "react";
import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { sampleItem } from "../../SampleData/List";
import Proptypes from "prop-types";

const Searchbar = (props) => {
  const {
    data,
    label,
    text,
    description,
    error,
    listBox,
    item,
    icon,
    iconStyle,
    listboxStyle
  } = props;

  const defaultData = data && data.length ? data : sampleItem;

  return (
    <div>
      <div style={{ display: "flex" }}>
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
      <div style={{ ...listboxStyle }}>
        {data && <List data={defaultData} listBox={listBox} item={item} />}
      </div>
    </div>
  );
};

Searchbar.defaultProps = {
  iconStyle: { marginTop: 30 },
  listboxStyle: {
    position: "relative",
    top: 20
  }
};

Searchbar.propTypes = {
  data: Proptypes.array.isRequired
};

export default Searchbar;
