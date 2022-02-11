import "./Link.css";

const HyperLink = props => {
  const {
    link,
    value
  } = props;
  return /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: link,
    target: "_blank",
    rel: "norefer"
  }, value);
};

export default HyperLink;