"use client";
import { Switch } from "@nextui-org/react";
import BuyerIcon from "./BuyerProfile";
import { useState } from "react";
import SalerIcon from "./SalerProfile";

const ModeSwitch = ({
  withIcons,
  onChange,
}: {
  withIcons: boolean;
  onChange?: (isSelected: boolean) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = (value: boolean) => {
    setIsSelected(value);
    // Update the data attribute on the parent element
    const parent = document.querySelector(".billing-container");
    if (parent) {
      parent.setAttribute("data-billing-mode", value ? "annual" : "monthly");
    }
    // Call the onChange prop if provided
    onChange?.(value);
  };
  return (
    <Switch
      isSelected={isSelected}
      onValueChange={handleChange}
      size="lg"
      color="success"
      startContent={isSelected && withIcons && <BuyerIcon className="white" />}
      endContent={!isSelected && withIcons && <SalerIcon className="white" />}
      thumbIcon={({ isSelected }) =>
        withIcons ? isSelected ? <SalerIcon /> : <BuyerIcon /> : null
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
