import React from "react";
import loading from "../../Assets/images/loading.gif";
const Loading = () => {
  return (
    <div class="grid min-h-screen place-content-center">
      <div class="">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default Loading;
