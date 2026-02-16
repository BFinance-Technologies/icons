import * as React from "react";
import type { SVGProps } from "react";
const SvgColombia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#clip0_579_33136)">
      <path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12L12 13.0435L0 12Z" />
      <path d="M1.60571 17.9999C3.68063 21.5866 7.55832 23.9999 12 23.9999C16.4416 23.9999 20.3193 21.5866 22.3942 17.9999L12 17.2173L1.60571 17.9999Z" />
      <path d="M22.3942 18C23.4153 16.235 24 14.1858 24 12H0C0 14.1858 0.584719 16.235 1.60575 18H22.3942Z" />
    </g>
    <defs>
      <clipPath id="clip0_579_33136">
        <rect width={24} height={24} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColombia;
