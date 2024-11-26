import * as React from "react";
const BuyerIcon = ({ className }: { className?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33398 16.6667V8.33333C3.33398 7.44928 3.68517 6.60143 4.31029 5.97631C4.93542 5.35119 5.78326 5 6.66732 5H13.334C14.218 5 15.0659 5.35119 15.691 5.97631C16.3161 6.60143 16.6673 7.44928 16.6673 8.33333V16.6667C16.6673 17.1087 16.4917 17.5326 16.1792 17.8452C15.8666 18.1577 15.4427 18.3333 15.0007 18.3333H5.00065C4.55862 18.3333 4.1347 18.1577 3.82214 17.8452C3.50958 17.5326 3.33398 17.1087 3.33398 16.6667Z"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 4.99984V3.33317C7.5 2.89114 7.6756 2.46722 7.98816 2.15466C8.30072 1.8421 8.72464 1.6665 9.16667 1.6665H10.8333C11.2754 1.6665 11.6993 1.8421 12.0118 2.15466C12.3244 2.46722 12.5 2.89114 12.5 3.33317V4.99984"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66602 17.4998V13.3332C6.66602 12.8911 6.84161 12.4672 7.15417 12.1547C7.46673 11.8421 7.89065 11.6665 8.33268 11.6665H11.666C12.108 11.6665 12.532 11.8421 12.8445 12.1547C13.1571 12.4672 13.3327 12.8911 13.3327 13.3332V17.4998"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66602 8.3335H13.3327"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66602 15H13.3327"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BuyerIcon;
