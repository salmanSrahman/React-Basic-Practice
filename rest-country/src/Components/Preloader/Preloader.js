import React from "react";

const Preloader = (props) => {
  return (
    <div className="" style={{ display: props.visibility }}>
      <div class="spinner-grow text-danger mx-auto d-block" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
