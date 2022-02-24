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
            {...labelStyle}
          />
        )}
        {tootltipStyle && (
          <Tooltips
            {...tootltipStyle}
          />
        )}
      </div>

      <Text
        placeholder={placeholder}
        {...textboxStyle}
        {...field}
      />


      <div>
        {description && (
          <Description
            label={description}
            {...descriptionStyle}
          />
        )}
      </div>
      <ErrorMessage        
        {...errorStyle}
        {...props}
      />

    </div>
  );
};

export default Textbox;
