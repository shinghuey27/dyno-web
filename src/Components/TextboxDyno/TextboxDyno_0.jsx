import React from 'react';
import Label from '../Label/Label';
import Text from '../Textbox/Text';
import PropTypes from 'prop-types';


function TextboxDyno_0(props) {
    
    const { 
        
        labelText,
        descriptionText,
        errorText,

        onChangeText,

        containerStyle,
        titleStyle,
        inputStyle,
        descriptionStyle,
        errorStyle,
        
    } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', ...containerStyle }}>

            <Label value={labelText} style={{ ...titleStyle }} {...props} />

            <Text style={{ ...inputStyle }} {...props} />

            <Label value={descriptionText} style={{ color: 'black', ...descriptionStyle }} {...props} />

            <Label value={errorText} style={{ color: 'red', ...errorStyle }} {...props} />

        </div>);
}


export default TextboxDyno_0;