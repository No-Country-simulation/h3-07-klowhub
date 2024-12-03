import React from "react";

const DashCard = ({
  children,
  classNames,
  withHover,
  withZoom,
}: {
  children: React.ReactNode;
  classNames?: string;
  withHover?: boolean;
  withZoom?: boolean;
}) => {
  return (
    <div
      className={`bg-white/5 rounded-lg flex flex-col hover:shadow-2xl  ${
        withZoom
          ? "hover:scale-105 transition-all duration-250 hover:border hover:border-white"
          : ""
      } ${withHover ? "hover:bg-white/20" : ""} p-3 ${
        classNames ? classNames : "border-2 border-transparent"
      } `}
    >
      {children}
    </div>
  );
};

export default DashCard;
