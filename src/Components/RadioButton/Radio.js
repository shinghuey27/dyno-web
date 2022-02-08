import "./Radio.css";

const Radio = (props) => {
  return (
    <div>
      <div {...props} className="img"></div>
    </div>
  );
};
Radio.defaultProps = {
  className: "img"
};

export default Radio;
