import * as React from "react";
import type { SVGProps } from "react";
const SvgPoland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#clip0_579_34117)">
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" />
      <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12" />
    </g>
    <defs>
      <clipPath id="clip0_579_34117">
        <rect width={24} height={24} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPoland;
