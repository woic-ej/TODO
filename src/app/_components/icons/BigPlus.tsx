import React from "react";

const BigPlus = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 12L21 12"
        stroke="current"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 21L12 3"
        stroke="current"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BigPlus;
