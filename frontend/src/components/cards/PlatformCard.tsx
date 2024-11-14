import { Card, Image } from "@nextui-org/react";
import { FC } from "react";

interface PlatformProps {
    value: "Power Apps" | "AppSheet"
}

const PlatformCard: FC<PlatformProps> = ({ value }) => {
    return (
        <Card className="w-fit px-5 py-2 flex-row items-center justify-center gap-3 align-middle bg-gray-600">
            <Image
                alt="nextui logo"
                height={35}
                radius="sm"
                src={`/assets/icons/platforms/${value === "Power Apps" ? "PowerApps" : "AppSheet"}.svg`}
                width={35}
            />
            <h4 className="text-base font-semibold">
                {value}
            </h4>
        </Card>
    )
}

export default PlatformCard

