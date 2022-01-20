import React from 'react';
import Label from '../Label/Label';
import Currency from '../Textbox/Currency';
import Text from '../Textbox/Text';


const renderInput = (type, onChangeText, props) => {
    switch (type) {
        case 'currency':

            return <Currency currency="RM" />

        default:
            return <Text onChange={onChangeText} {...props} />
    }
}


function TextboxDyno(props) {

    const {

        onChangeText,
        containerStyle,
        labelText,

        descValue,
        titleStyle,
        inputType,

        renderYourLabelDesc,  // --> render leverage to the user , more flexibility but more coding

        styleDesc // --> // --> pre-custom types to render, user remember the API but easy to use

    } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', ...containerStyle }}>

            <Label value={labelText} style={{ ...titleStyle }} className='label' />

            {/* {renderInput(inputType, onChangeText, props)} */}
            <Text onChange={onChangeText} {...props} />

            {/* <Label style={{ marginTop: 5, ...styleDesc }} value={descValue}></Label> */}
            {renderYourLabelDesc()}

        </div>);
}

export default TextboxDyno;
