import "./Link.css";

const HyperLink = (props) => {
  return (
    <a className="link" href={props.link} target="_blank" rel="norefer" >
      {props.value}
    </a>
  );
};

export default HyperLink;
