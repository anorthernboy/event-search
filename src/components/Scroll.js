import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "83vh"
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
