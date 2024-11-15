import { FC, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ onSubmit, children }) => {
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
