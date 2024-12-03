"use client";

import { useRouter } from "next/navigation";

const SellerMenuButtons = ({
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
    <div style={{ backgroundImage: `url(${background})` }} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
};

export default SellerMenuButtons;
