import * as React from "react";
type Props = {
  color: string;
};
const VegNonVegIcon: React.FC<Props> = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke={color} stroke-width="2" d="M1 1h22v22H1z" />
      <circle cx="12" cy="12" r="6" fill={color} />
    </svg>
  );
};

export default VegNonVegIcon;
