import { SVGProps } from "react";

const AlignLeftIcon = ({ props }: { props?: SVGProps<SVGSVGElement> }) => (
  <svg
    width="12px"
    height="12px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10H16M3 14H21M3 18H16M3 6H21"
      stroke="#000000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AlignLeftIcon;
