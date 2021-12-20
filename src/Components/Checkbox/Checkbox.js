import "./Checkbox.css";
const Checkbox = () => {
  return (
    <label className="container">
      Add to Favourites
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
