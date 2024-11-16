"use client";
import { Switch } from "@nextui-org/react";
import BuyerIcon from "./BuyerProfile";
import { useState } from "react";
import SalerIcon from "./SalerProfile";

const ModeSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      size="lg"
      color="success"
      startContent={isSelected && <BuyerIcon className="white" />}
      endContent={!isSelected && <SalerIcon className="white" />}
      thumbIcon={({ isSelected }) =>
        isSelected ? <SalerIcon /> : <BuyerIcon />
      }
      classNames={{
        base: "bg-transparent",
        wrapper:
          "bg-primario500 group-data-[selected=true]:bg-primario400 group-data-[selected=true]:bg-primario400 group-data-[selected=true]:bg-primario500",
      }}
    />
  );
};

export default ModeSwitch;
