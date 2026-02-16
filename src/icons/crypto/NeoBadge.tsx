import * as React from "react";
import type { SVGProps } from "react";
const SvgNeoBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={24} height={24} rx={12} />
    <path d="M4.6665 6.80488V17.5077L11.6136 20V9.21031L19.1295 6.44016L12.3083 4L4.6665 6.80488Z" />
    <path d="M12.1826 9.51866V15.3716L19.1297 17.8638V6.94824L12.1826 9.51866Z" />
  </svg>
);
export default SvgNeoBadge;
