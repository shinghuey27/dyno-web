import React from 'react';
import Label from '../Label/Label';
import Text from '../Textbox/Text';

export default function TextboxDyno_0(props) {
    const { containerStyle,
        labelText,
        onChangeText,
        titleStyle,
        inputStyle,
        descriptionStyle,
        errorStyle,
        descriptionText,
        errorText

    } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', ...containerStyle }}>

            <Label value={labelText} style={{ ...titleStyle }} {...props} />

            <Text style={{ ...inputStyle }} {...props} />

            <Label value={descriptionText} style={{ color: 'black', ...descriptionStyle }} {...props} />

            <Label value={errorText} style={{ color: 'red', ...errorStyle }} {...props} />

        </div>);
}
