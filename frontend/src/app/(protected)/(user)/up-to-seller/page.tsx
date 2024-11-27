import Image from "next/image";
import SellerUpgradeForm from "./components/Form";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[200px] mb-12">
        <Image priority fill src={"/assets/backgrounds/Hero.png"} alt="Hero" />
      </div>
      <SellerUpgradeForm />
    </div>
  );
};

export default page;
