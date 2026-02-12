import * as React from "react";
import type { SVGProps } from "react";
const SvgStockLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8 5H11V14H8V17H6V14H3V5H6V2H8V5ZM5 7V12H9V7H5ZM18 10H21V19H18V22H16V19H13V10H16V7H18V10ZM15 12V17H19V12H15Z" />
  </svg>
);
export default SvgStockLine;
