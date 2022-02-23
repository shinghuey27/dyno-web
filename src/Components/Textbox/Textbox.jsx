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
    error,
    tooltip,
    description, } = props;

  //Always check to not render with error ;)
  // if (item === undefined) return null;

  //Access to all props that introduced in element.
  const { label, placeholder } = item || { placeholder: "" };
  return (
    // <>   <-- before is fragment , but need to wrap it with div to make it a single block, so that can be use with other molecules
    <div>
      <div>
        {label && (
          <Label
            label={label}
            style={label?.style}
            className={label?.className}
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

      {renderError(name, error) && (
        <ErrorMessage
          name={name}
          error={error}
          style={error?.style}
          className={error?.className}

        />
      )}
    </div>
  );
};

export default Textbox;
