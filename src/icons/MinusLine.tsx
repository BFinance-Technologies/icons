import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M5 11H19V13H5V11Z" />
  </svg>
);
export default SvgMinusLine;
