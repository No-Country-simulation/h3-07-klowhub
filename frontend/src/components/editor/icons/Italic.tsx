import { SVGProps } from "react";

const ItalicIcon = ({ props }: { props?: SVGProps<SVGSVGElement> }) => (
  <svg
    width="12px"
    height="12px"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Edit / Italic">
      <path
        id="Vector"
        d="M8 19H10M10 19H12M10 19L14 5M12 5H14M14 5H16"
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default ItalicIcon;
