"use client"
import CardContain from "@/components/common/CardContain"
import Tags from "@/components/common/Tags"
import { Button, Progress } from "@nextui-org/react"

const ProgressCard = () => {
    return (
        <CardContain
            size="lg"
            height=" "
            title="Automatización de flujos de trabajo con AppSheet"
            urlImage="https://via.placeholder.com/400x260"
            type="course"
            heart={false}
            extraClassName="md:flex-nowrap flex-wrap md:h-[260px] h-auto"
        >
            <p className="text-gray-200 py-1 overflow-hidden text-ellipsis md:line-clamp-2 line-clamp-none">
                Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos.productividad en tus proyectos.
            </p>

            <Tags tags={["CRM", "Clientes", "Ventas"]} />


            <Progress
                radius="sm"
                classNames={{
                    base: "w-full",
                    track: "drop-shadow-md bg-purple-200 h-[10px]",
                    indicator: "bg-purple-700",
                    label: "text-sm",
                    value: "text-xs",
                }}
                label="Mi progreso"
                value={35}
                showValueLabel={true}
            />


            <Button variant="flat" className="bg-purple-800 text-white hover:bg-purple-700 rounded-lg px-4 w-fit">
                Continuar viendo
            </Button>
        </CardContain>
    )
}

export default ProgressCard