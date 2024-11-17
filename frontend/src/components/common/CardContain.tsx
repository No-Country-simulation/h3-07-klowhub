import { faEllipsisVertical, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { FC } from "react";

interface CardProps {
    size: "xs" | "md" | "lg";
    type?: "lesson" | "course";
    title: string;
    urlImage: string;
    alt?: string;
    children: React.ReactNode;
    cardFooter?: React.ReactNode
    height?: string;
}

const CardContain: FC<CardProps> = ({ size, type, urlImage, alt, title, children, cardFooter, height }) => {
    return (
        <Card className={`shadow-lg bg-[#1F2937] text-white rounded-lg overflow-x-hidden 
        ${size === "lg" ? "max-w-full" : size == "md" ? "max-w-md" : "max-w-[330px]"} ${height ?? "h-[549px]"}`}>

            {/* Imagen y Etiqueta Superior */}
            <CardBody className="p-0 relative">
                <Image
                    src={urlImage}
                    width="100%"
                    height={200}
                    className='objet-cover z-10'
                    alt={alt}
                    radius='none'
                />
                {
                    type &&
                    <Chip variant="solid" size='lg' className={`absolute top-2 ${type === "lesson" ? "bg-[#CDFFDBE5]" : "bg-[#F7E5FFF2]"} left-2 z-20`}>
                        <span
                            className={`font-semibold ${type === "lesson" ? "text-[#3FC262]" : "text-[#AE53DA]"}`}>
                            {type === "course" ? "Curso" : "Lección"}
                        </span>
                    </Chip>
                }

                <div className="absolute top-2 right-2 z-20">
                    <FontAwesomeIcon icon={faHeart} size="lg" className="hover:text-red-400 cursor-pointer transition-colors" />
                </div>
            </CardBody>

            {/* Contenido de la Tarjeta */}
            <CardBody className={`px-4 pt-3 pb-0 space-y-3 relative ${size === "md" ? "text-base" : "text-sm"}`}>
                <h5 className="font-bold leading-normal pr-4 text-ellipsis overflow-hidden text-nowrap"
                    title={title}>
                    {title}
                </h5>
                <FontAwesomeIcon icon={faEllipsisVertical} className="absolute top-0 right-1 text-white/50 hover:text-white/85 cursor-pointer px-3.5 py-1 rounded-full hover:bg-gray-500/30 transition" size='lg' />

                {
                    children
                }
            </CardBody>

            {/* Botones de Acción */}
            {
                cardFooter &&
                <CardFooter className="px-4 gap-x-5">
                    {cardFooter}
                </CardFooter>
            }
        </Card >
    )
}

export default CardContain