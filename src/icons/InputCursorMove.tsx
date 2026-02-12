import * as React from "react";
import type { SVGProps } from "react";
const SvgInputCursorMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8 21V19H11V5H8V3H16V5H13V19H16V21H8ZM18.05 7.05L23 12L18.05 16.95L16.636 15.536L20.172 12L16.636 8.464L18.05 7.05ZM5.95 7.05L7.364 8.464L3.828 12L7.364 15.536L5.95 16.95L1 12L5.95 7.05Z" />
  </svg>
);
export default SvgInputCursorMove;
