import { SVGProps } from "react";

const StrikeIcon = ({ props }: { props?: SVGProps<SVGSVGElement> }) => (
  <svg
    width="12px"
    height="12px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 5h-7a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7M7 19h7a3 3 0 0 0 3-3v-1M5 12h14"
    />
  </svg>
);
export default StrikeIcon;
