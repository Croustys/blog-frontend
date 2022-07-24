import React from "react";
import { memo } from "react";

const LazyLoading = () => {
  return (
    <div className="lazy-loading-wrapper">
      <div id="loading" className="lazy-load"></div>
    </div>
  );
};

export default memo(LazyLoading);
