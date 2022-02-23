import React from 'react'
import ReactSelect from 'react-select';
import Label from "../Label/Label"
import PropTypes from "prop-types";
import "./Select.css"
import ErrorMessage from '../Label/ErrorMessage';

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
        field = { onChange: () => { }, value: '' }
    } = props;

    const { label, options, placeholder, description } = item || { label: "" };
    const { value = '', onChange } = field;

    const customOnChange = (e) => {
        onChange(e);
    }



    return (
        <>
            <Label {...props} />
            <ReactSelect
                name={name}
                key={name}
                id={name}
                placeholder={placeholder}
                styles={selectStyle}
                options={options}
                {...field}
                onChange={customOnChange}
            />
            <ErrorMessage {...props} />
        </>
    );
};



Select.defaultProps = {
    selectStyle: customStyles,
};


Select.propTypes = {
    

};

export default Select;
