import Label from "../Label/Label";
import Text from "../Text/Text";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";

import Tooltips from "../Tooltip/Tooltips";

const Textbox = (props) => {
  const { label, text, error, tooltip, description } = props;
  return (
    <>
      <div style={{ alignItems: "center", display: "flex" }}>
        {label && (
          <Label
            label={label.label}
            style={label.style}
            className={label.className}
          />
        )}
        {tooltip && (
          <Tooltips
            label={tooltip.label}
            style={tooltip.style}
            className={tooltip.className}
          />
        )}
      </div>
      {text && (
        <Text
          placeholder={text.placeholder}
          style={text.style}
          className={text.className}
        />
      )}

      <div>
        {description && (
          <Description
            label={description.label}
            style={description.style}
            className={description.className}
          />
        )}
      </div>

      {error && (
        <ErrorMessage
          label={error.label}
          style={error.style}
          className={error.className}
        />
      )}
    </>
  );
};

export default Textbox;
