import React from "react";

const Line = (props) => {

  return <hr {...props} />;
}

Line.defaultProps = {
  style: {
    marginTop: 22,
    border: "1px dashed black",
    height: 0.1,
    flex: 1
  }
};


export default Line;
