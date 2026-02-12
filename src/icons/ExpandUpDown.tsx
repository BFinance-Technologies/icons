import * as React from "react";
import type { SVGProps } from "react";
const SvgExpandUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M18 9L12 3L6 9H18ZM18 15L12 21L6 15H18Z" />
  </svg>
);
export default SvgExpandUpDown;
