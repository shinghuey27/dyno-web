import "./Radio.css";

const Radio = (props) => {
  return (
    <div>
      <div className="container">
        <input type="radio" checked="checked" name="radio" />
        <span className="checkmark"></span>
      </div>
    </div>
  );
};
Radio.defaultProps = {
  className: "img"
};

export default Radio;
