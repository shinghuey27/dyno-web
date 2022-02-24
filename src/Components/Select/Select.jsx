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
        field = { onChange: () => { }, value: '' }
    } = props;

    const { label, options, placeholder, description } = item || { label: "" };
    const { value = '', onChange } = field;

    const customOnChange = (e) => {
        onChange(e);
    }



    return (
        <>
            <Label label={label} {...props} />
            <ReactSelect
                name={name}
                key={name}
                id={name}
                placeholder={placeholder}
                styles={selectStyle}
                options={options}
                onChange={customOnChange}
                {...field}


            />
            <div>
                {description && (
                    <Description
                        label={description}
                        {...props}
                    />
                )}
            </div>
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
