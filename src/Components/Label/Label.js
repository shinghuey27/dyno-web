import './Label.css';
const Label = (props) => {
    const { label = 'Account Number' } = props;

    return <label className="label" >{label}</label>
}

export default Label;