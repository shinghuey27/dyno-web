import './Label.css';
const Label = (props) => {
    const { value = 'default' } = props;
    return <label className="label" >{value}</label>
}

export default Label;