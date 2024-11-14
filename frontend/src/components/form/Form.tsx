import React, { ReactNode } from "react";

const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}) => {
  return (
    <form
      className="w-full h-full flex flex-col justify-center gap-6"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
