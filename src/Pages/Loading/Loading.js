import React from "react";
import loading from "../../Assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="grid min-h-screen place-content-center">
      <div className="">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default Loading;
