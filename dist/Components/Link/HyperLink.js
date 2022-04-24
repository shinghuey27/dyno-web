import React from 'react';
import "./Link.css";

const HyperLink = (props) => {
  const { link, value } = props;

  return (
    <a className="link" href={link} target="_blank" rel="norefer">
      {value}
    </a>
  );
};

export default HyperLink;
