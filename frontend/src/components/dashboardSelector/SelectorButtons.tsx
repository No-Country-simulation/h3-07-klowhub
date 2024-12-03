"use client";

import { useRouter } from "next/navigation";

const SelectorButtons = ({
  background,
  url,
  title,
}: {
  background: string;
  url: string;
  title: string;
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(url);
  };
  return (
    <div
      className="bg-cover flex justify-center items-center select-none cursor-pointer"
      style={{ backgroundImage: `url(${background})` }}
      onClick={onClick}
    >
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
};

export default SelectorButtons;
