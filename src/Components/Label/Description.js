import "./Label.css";

const Description = (props) => {
  return (
    <>
      <label {...props}>{props.label}</label>
    </>
  );
};
Description.defaultProps = {
  label: "Default Description",
  className: "description"
};
export default Description;
