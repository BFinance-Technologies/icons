import * as React from "react";
import type { SVGProps } from "react";
const SvgEthereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={24} height={24} rx={12} />
    <g clipPath="url(#clip0_1149_17723)">
      <path d="M11.9981 3L11.8809 3.38729V14.6256L11.9981 14.7393L17.3649 11.6557L11.9981 3Z" />
      <path d="M11.9982 3L6.63135 11.6557L11.9982 14.7393V9.28462V3Z" />
      <path d="M11.9982 15.727L11.9321 15.8053V19.8086L11.9982 19.9962L17.3682 12.645L11.9982 15.727Z" />
      <path d="M11.9982 19.9962V15.727L6.63135 12.645L11.9982 19.9962Z" />
      <path d="M11.998 14.7393L17.3648 11.6558L11.998 9.28467V14.7393Z" />
      <path d="M6.63135 11.6558L11.9981 14.7393V9.28467L6.63135 11.6558Z" />
    </g>
    <defs>
      <clipPath id="clip0_1149_17723">
        <rect width={10.7368} height={17} transform="translate(6.63135 3)" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthereum;
