import './Label.css';
import PropTypes from 'prop-types';

const Label = (props) => {

    const { value, type, } = props;

    var labelStyle = { color: '#6f7faf' }

    switch (type) {
        case 'error':

            labelStyle = { color: 'red' }

            break;

        case 'desc':

            labelStyle = { color: 'blue' }

            break;

    }

    return (
        <label style={labelStyle} {...props}>{value}</label>
    )


}

Label.defaultProps = {
    value: 'default',
    labelStyle:{
        color: '#6f7faf'
    }
}

Label.propTypes = {
    value: PropTypes.string.isRequired
}


export default Label;