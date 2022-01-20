import './Label.css';
import PropTypes from 'prop-types';

const Label = (props) => {

    const { value, type } = props;

    switch (type) {
        case 'error':

            return <label className="label" style={{ color: 'red' }} {...props}>{value}</label>

        case 'desc':

            return <label className="label" style={{ color: 'blue' }} {...props}>{value}</label>
        default:
            return <label className="label" {...props}>{value}</label>

    }


}

Label.defaultProps = {
    value: 'default',
}

Label.propTypes = {
    value: PropTypes.string.isRequired
}


export default Label;