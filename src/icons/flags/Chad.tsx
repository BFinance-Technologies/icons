import * as React from "react";
import type { SVGProps } from "react";
const SvgChad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#clip0_579_33107)">
      <path d="M12.0001 0C10.5323 0 9.12615 0.264047 7.82621 0.746391L7.30444 12L7.82616 23.2536C9.12615 23.736 10.5323 24 12.0001 24C13.4679 24 14.8741 23.736 16.174 23.2536L16.6958 12L16.174 0.746391C14.8741 0.264047 13.4679 0 12.0001 0V0Z" />
      <path d="M23.9999 11.9999C23.9999 6.84037 20.7434 2.44185 16.1738 0.746338V23.2536C20.7434 21.558 23.9999 17.1595 23.9999 11.9999Z" />
      <path d="M7.82611 23.2536V0.746338C3.2565 2.44185 0 6.84037 0 11.9999C0 17.1595 3.2565 21.558 7.82611 23.2536Z" />
    </g>
    <defs>
      <clipPath id="clip0_579_33107">
        <rect width={24} height={24} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChad;
