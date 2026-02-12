import * as React from "react";
import type { SVGProps } from "react";
const SvgFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M5 18L12.68 12L5 6V4H19V6H8.263L16 12L8.263 18H19V20H5V18Z" />
  </svg>
);
export default SvgFunctions;
