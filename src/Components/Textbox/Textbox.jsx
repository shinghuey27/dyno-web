import Text from "../Text/Text";
import Label from "../Label/Label";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";

import Tooltips from "../Tooltip/Tooltips";

const Textbox = (props) => {
  const { label, text, error, tooltip, description } = props;
  return (
    <>
      <div style={{ alignItems: "center", display: "flex" }}>
        <Label {...label} />
        <Tooltips {...tooltip} />
      </div>
      <Text {...text} />

      <div>
        <Description {...description} />
      </div>

      <ErrorMessage {...error} />
    </>
  );
};

export default Textbox;
