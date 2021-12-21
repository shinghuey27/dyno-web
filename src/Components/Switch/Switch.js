import "./Switch.css";

const Switch = () => {
  return (
    <div className="flex">
      <h1 className="h1"> Hide balance</h1>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
