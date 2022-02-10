import React from "react";

export default function Line(props) {
  const { container } = props;
  return <hr {...container} />;
}

Line.defaultProps = {
  style: {
    marginTop: 22,
    border: "1px dashed black",
    height: 0.1,
    flex: 1
  }
};
