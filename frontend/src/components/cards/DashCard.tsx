import React from "react";

const DashCard = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={`bg-white/10 rounded-lg flex flex-col hover:shadow-2xl hover:bg-white/20 ${classNames}`}
    >
      {children}
    </div>
  );
};

export default DashCard;
