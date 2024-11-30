import { SVGProps } from "react";
const Sobre = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
    />
  </svg>
);
export default Sobre;