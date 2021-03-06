import React from "react";

const Loading = () => {
  return (
    <>
      <div
        class="d-flex justify-content-center text-center"
        style="width: 3rem; height: 3rem;"
      >
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
