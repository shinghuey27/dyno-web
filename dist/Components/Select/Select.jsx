import React from 'react'
import ReactSelect from 'react-select';
import Label from "../Label/Label"
import PropTypes from "prop-types";
import "./Select.css"
import ErrorMessage from '../Label/ErrorMessage';
import Description from '../Label/Description';

const customStyles = {
    control: (base, state) => ({
        ...base,
        marginTop: 10,
        '&:hover': { borderColor: '#74e3e4' },
        border: '1px solid lightgray',
        boxShadow: 'none',
        borderRadius: 20,
    })
}

const Select = (props) => {

    const {
        child,
        error,
        name,
        item,
        selectStyle,
        labelStyle,
        descriptionStyle,
        errorStyle,
        field = { onChange: () => { }, }
    } = props;

    const { label, options, placeholder, description } = item || { label: "" };
    const { onChange } = field;

    const customOnChange = (e) => {
        onChange(e);
    }



    return (
        <>
            <Label
                label={label}
                {...labelStyle}
            />
            <ReactSelect
                name={name}
                key={name}                
                selec
                id={name}
                placeholder={placeholder}
                styles={customStyles}
                options={options}
                onChange={customOnChange}
                {...field}
                {...selectStyle}


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
                {...props} />
        </>
    );
};



// Select.defaultProps = {
//     selectStyle: customStyles,
// };


Select.propTypes = {


};

export default Select;
