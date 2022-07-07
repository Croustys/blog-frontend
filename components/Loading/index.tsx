import { memo } from "react";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div id="loading"></div>
    </div>
  );
};

export default memo(Loading);
