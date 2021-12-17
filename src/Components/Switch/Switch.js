import "./Switch.css";

const Switch = () => {
  return (
    <div className="flex">
      <h1 className="text"> Hide balance</h1>
      <div className="switchContainer">
        <label for="toggleB" className="switchLabel">
          <div className="relative">
            <input type="checkbox" id="toggleB"  className="sr-only" />
            <div className=" button1 slider"></div>
            <div className="dot button2 transition"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Switch;
