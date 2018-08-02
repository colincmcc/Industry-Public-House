import React from "react";

const SvgIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "24",
  className = "",
  height = "24",
  child = {}
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {child}
  </svg>
);

export default SvgIcon;
