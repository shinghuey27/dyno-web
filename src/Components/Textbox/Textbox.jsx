import React from 'react';
import Text from "../Text/Text";
import Label from "../Label/Label";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";

import Tooltips from "../Tooltip/Tooltips";

const Textbox = (props) => {
  const { label, text, error, tooltip, description } = props;
  return (
    // <>   <-- before is fragment , but need to wrap it with div to make it a single block, so that can be use with other molecules
    <div>
      <div>
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
    </div>
  );
};

export default Textbox;
