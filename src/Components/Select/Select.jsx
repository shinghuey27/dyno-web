import React from 'react'
import ReactSelect from 'react-select';
import Label from "../Label/Label"
// import { Error } from "../Error"

import "./Select.css"
import ErrorMessage from '../Label/ErrorMessage';

const Select = (props) => {

    const { child, error, name, item, field = { onChange: () => { }, value: '' } } = props;
    // // const errorMsg = error && error[name] && error[name].message || ""

    // if (item === undefined) return null;

    const { label, options, placeholder, description } = item || { label: "" };
    const { value = '', onChange } = field;

    const customOnChange = (e) => {
        console.log('onchange e ->', e)
        // onChange(e);
    }

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
    
    return (
        <>
            <Label {...props} />
            <ReactSelect
                name={name}
                key={name}
                id={name}
                placeholder={placeholder}
                // defaultValue={value}
                styles={customStyles}
                options={options}
                {...field}
                onChange={customOnChange}
            />
            <ErrorMessage {...props} />
        </>
    );
};

export default Select;
