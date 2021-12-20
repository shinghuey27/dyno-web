import "./Switch.css";

const Switch = () => {
  return (
    <div className="flex">
      <h1 className="text"> Hide balance</h1>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
