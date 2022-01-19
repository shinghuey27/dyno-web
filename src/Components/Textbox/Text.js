import "./Text.css";

const Text = (props) => {
  return (
    <input
      type="text"
      id="accountNo"
      name="accountNo"
      placeholder="9876 5434 56"
      className="text"
      {...props}
    ></input>
  );
};

export default Text;
