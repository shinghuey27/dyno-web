import React from 'react';
import Text from "../Text/Text";
import Label from "../Label/Label";
import ErrorMessage from "../Label/ErrorMessage";
import Description from "../Label/Description";
import Tooltips from "../Tooltip/Tooltips";
import { isEmptyObject } from '../../Utils/isEmpty';
import { isError, renderError } from '../../Utils/isErrorForm';

const Textbox = (props) => {

  const {
    field,
    item,
    labelStyle,
    tootltipStyle,
    textboxStyle,
    descriptionStyle,
    errorStyle,
  } = props;

  //Access to all props that introduced in element.
  const { label, placeholder, description } = item || { placeholder: "", description: '' };

  return (
    <div>
      <div>
        {label && (
          <Label
            label={label}
            className={labelStyle?.className}
            style={labelStyle?.style}            
          />
        )}
        {tootltipStyle && (
          <Tooltips
            className={tootltipStyle?.className}
            style={tootltipStyle?.style}
          />
        )}
      </div>

      <Text
        className={textboxStyle?.className}
        style={textboxStyle?.style}
        placeholder={placeholder}
        {...field}
      />


      <div>
        {description && (
          <Description
            label={description}
            className={descriptionStyle?.className}
            style={descriptionStyle?.style}            
          />
        )}
      </div>
      <ErrorMessage
        className={errorStyle?.className}
        style={errorStyle?.style}
        {...props}
      />

    </div>
  );
};

export default Textbox;
