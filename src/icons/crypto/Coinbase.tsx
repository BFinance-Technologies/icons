import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinbase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={24} height={24} rx={12} />
    <path d="M12.0049 16.0126C9.78786 16.0126 7.99216 14.217 7.99216 12C7.99216 9.78295 9.78786 7.98728 12.0049 7.98728C13.9911 7.98728 15.6397 9.43518 15.9573 11.3312H20.0001C19.659 7.2115 16.2114 3.97461 12.0049 3.97461C7.57418 3.97461 3.97949 7.56929 3.97949 12C3.97949 16.4306 7.57418 20.0253 12.0049 20.0253C16.2114 20.0253 19.659 16.7884 20.0001 12.6687H15.954C15.6363 14.5647 13.9911 16.0126 12.0049 16.0126Z" />
  </svg>
);
export default SvgCoinbase;
