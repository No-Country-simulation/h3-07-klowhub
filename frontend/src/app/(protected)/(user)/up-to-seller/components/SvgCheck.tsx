import { JSX, SVGProps } from "react";

const SvgCheck = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={41}
    height={40}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.1668 18.4671V20.0004C37.1648 23.5945 36.001 27.0916 33.8491 29.9701C31.6971 32.8487 28.6723 34.9546 25.2258 35.9736C21.7792 36.9926 18.0956 36.8703 14.7243 35.6247C11.353 34.3792 8.47459 32.0773 6.51843 29.0622C4.56227 26.0472 3.63315 22.4805 3.86962 18.8943C4.1061 15.308 5.49551 11.8943 7.83063 9.16221C10.1658 6.43012 13.3215 4.52606 16.8271 3.734C20.3328 2.94194 24.0006 3.30432 27.2835 4.76709"
      stroke="#B95ED4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.1667 6.66699L20.5 23.3503L15.5 18.3503"
      stroke="#B95ED4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCheck;
