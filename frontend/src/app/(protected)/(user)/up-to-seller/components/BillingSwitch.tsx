"use client";

import { useState } from "react";
import { Switch } from "@nextui-org/switch";

const BillingSection = () => {
  const [billingMode, setBillingMode] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <div
      data-billing-mode={billingMode}
      className="billing-container group flex justify-center py-3 items-center gap-3 text-sm"
    >
      <span
        className={`${
          billingMode === "monthly" ? "text-primario300" : "text-white"
        }`}
      >
        Facturación mensual
      </span>
      <Switch
        defaultSelected={billingMode === "annual"}
        size="sm"
        color="secondary"
        onChange={(e) =>
          setBillingMode(e.target.checked ? "annual" : "monthly")
        }
        aria-label="Toggle billing period"
      />
      <span
        className={`${
          billingMode === "monthly" ? "text-white" : "text-primario300"
        }`}
      >
        Facturación anual (ahorra el 15%)
      </span>
    </div>
  );
};

export default BillingSection;
