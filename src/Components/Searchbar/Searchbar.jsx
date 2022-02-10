import React from "react";
import Label from "../Label/Label";
import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { sampleItem } from "../../SampleData/List";

export default function Searchbar(props) {
  const {
    data,
    label,
    text,
    description,
    error,
    listBox,
    item,
    icon,
    iconStyle
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
          // {...textBox}
        />
        <div>
          <KeyboardArrowDownIcon style={{ ...iconStyle }} {...icon} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: 21 //<--- why suddenly need ? need to check why need tempered this position
        }}
      >
        {data && <List data={defaultData} listBox={listBox} item={item} />}
      </div>
    </div>
  );
}

Searchbar.defaultProps = {
  iconStyle: { marginTop: 30 }
};
