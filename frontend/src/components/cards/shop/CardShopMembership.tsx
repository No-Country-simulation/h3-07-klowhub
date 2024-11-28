import Image from "next/image";
import DashCard from "../DashCard";
import { ReactNode } from "react";

const CardShopMembership = ({
  image,
  plan,
  price,
  children,
  isSelected = false,
}: {
  image: string;
  plan: string;
  price: string;
  children: ReactNode;
  isSelected?: boolean;
}) => {
  return (
    <DashCard
      classNames={`select-none cursor-pointer ${
        isSelected
          ? "border-2 border-primario300 hover:border-2 hover:border-primario300"
          : ""
      }`}
      withHover
      withZoom
    >
      <div className="relative w-full h-[240px] rounded mb-6">
        <Image src={image} alt="" fill />
      </div>
      <h4>{plan}</h4>
      <p>{price}</p>
      {children}
      <p>Comisiones: Paypal 20%; Stripe 15%; Crypto 12%</p>
    </DashCard>
  );
};

export default CardShopMembership;
