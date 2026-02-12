import * as React from "react";
import type { SVGProps } from "react";
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
  </svg>
);
export default SvgHeading;
