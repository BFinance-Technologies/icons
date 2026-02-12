import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22L7.532 13H13V17.394L17.263 11H11Z" />
  </svg>
);
export default SvgFlashlightLine;
