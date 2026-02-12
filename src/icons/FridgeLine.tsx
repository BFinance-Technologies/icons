import * as React from "react";
import type { SVGProps } from "react";
const SvgFridgeLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M19 1C19.552 1 20 1.448 20 2V22C20 22.552 19.552 23 19 23H5C4.448 23 4 22.552 4 22V2C4 1.448 4.448 1 5 1H19ZM18 12H6V21H18V12ZM10 14V18H8V14H10ZM18 3H6V10H18V3ZM10 5V8H8V5H10Z" />
  </svg>
);
export default SvgFridgeLine;
