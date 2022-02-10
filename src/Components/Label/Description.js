import "./Label.css";

const Description = (props) => {
  const { label, container } = props;
  return (
    <>
      <label {...container}>{label}</label>
    </>
  );
};
Description.defaultProps = {
  label: "Default Description",
  className: "description"
};
export default Description;
