import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 bg-blue-500 text-white rounded-full">
      {title}
    </span>
  );
};

export default Pill;
