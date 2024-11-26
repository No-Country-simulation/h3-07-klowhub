import React from "react";

const AdminCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg bg-[#1F2937] flex flex-col my-5 relative gap-3 items-center pb-3">
      {children}
    </div>
  );
};

export default AdminCard;
