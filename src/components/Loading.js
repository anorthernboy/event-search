import React from "react";
import "../style/Loading.css";

import loading from "../assets/skiddle-logo-white-loading.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loading} alt="loading" className="Loading" />
    </div>
  );
};

export default Loading;
