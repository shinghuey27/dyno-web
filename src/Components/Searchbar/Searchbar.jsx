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

    // data,
    text,

    listBox,
    listItem,
    icon,
    iconStyle,
    listboxStyle,
  } = props;

  const { label, options, placeholder, description } = item || { label: "" };
  const [toggleShowList, setToggleShowList] = useState(false);
  const [selected, setSelected] = useState({ value: '' });

  // const { child, error, name, item, field } = props; <- props for integration
  const { value, onChange } = field || { onChange: () => { } };;
  const defaultData = options && options.length ? options : sampleItem;

  const toggle = () => setToggleShowList(!toggleShowList)

  const update = (e) => {
    setSelected(e)
    onChange(e)
    toggle()
  }

  return (
    <div
      id={id}       // <-- need to check id and name molecules interaction
      name={name}
    >
      <div style={{
        display: "flex",

      }}>
        <Textbox
          text={text}
          description={description}
          error={error}
          field={{
            // onBlur: () => toggle(), // <-- could try resolve this using redux, or hooks, listen to onChange if active , then process onChange first , check in next iteration
            onFocus: () => toggle(),
            value: selected['value']
          }}
          item={{
            label: label,
            placeholder: placeholder
          }} // <-- since we resuse textbox, textbox still accepts item props
        />
        <div>
          {icon && <KeyboardArrowDownIcon style={{ ...iconStyle }} {...icon} />}
        </div>
      </div>
      <div
        style={{ ...listboxStyle }}
      >
        {toggleShowList && <List data={defaultData} listBox={listBox} item={listItem}
          onChange={update}
        />}
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
