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
    name,
    id,
    field,
    item,
    text,
    labelStyle,
    error,
    tooltip,
    description, } = props;

  //Access to all props that introduced in element.
  const { label, placeholder } = item || { placeholder: "" };

  return (
    <div>
      <div>
        {label && (
          <Label
            label={label}
            {...labelStyle}
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

      <Text
        style={text?.style}
        className={text?.className}
        name={name}
        id={id}
        placeholder={placeholder}
        {...field}
      />


      <div>
        {description && (
          <Description
            label={description.label}
            style={description.style}
            className={description.className}
          />
        )}
      </div>
      <ErrorMessage
        style={error?.style}
        className={error?.className}
        {...props}
      />

    </div>
  );
};

export default Textbox;
