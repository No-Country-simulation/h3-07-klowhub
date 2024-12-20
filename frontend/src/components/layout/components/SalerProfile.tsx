import * as React from "react";
const SalerIcon = ({ className }: { className?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75065 13.7498C2.50065 14.7998 2.08398 17.9164 2.08398 17.9164C2.08398 17.9164 5.20065 17.4998 6.25065 16.2498C6.84232 15.5498 6.83398 14.4748 6.17565 13.8248C5.85174 13.5156 5.42506 13.337 4.97751 13.3231C4.52995 13.3093 4.09305 13.4612 3.75065 13.7498Z"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5L7.5 10C7.94345 8.84957 8.50184 7.74676 9.16667 6.70838C10.1377 5.15587 11.4897 3.87758 13.0942 2.99512C14.6986 2.11266 16.5022 1.65535 18.3333 1.66671C18.3333 3.93338 17.6833 7.91671 13.3333 10.8334C12.2807 11.499 11.164 12.0573 10 12.5Z"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50065 9.99993H3.33398C3.33398 9.99993 3.79232 7.47493 5.00065 6.6666C6.35065 5.7666 9.16732 6.6666 9.16732 6.6666"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5002V16.6668C10 16.6668 12.525 16.2085 13.3333 15.0002C14.2333 13.6502 13.3333 10.8335 13.3333 10.8335"
      stroke={`${className ? "white" : "#702486"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SalerIcon;
