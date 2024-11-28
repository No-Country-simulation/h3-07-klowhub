"use client"
import { Button } from "@nextui-org/button";
import { FC, ReactNode } from "react"

interface CardSectionProps {
    children: ReactNode;
    title?: string;
    description?: string;
    textButton?: string;
    variantButton?: "solid" | "flat" | "shadow";
    button?: boolean;
}

const CardSection: FC<CardSectionProps> = ({ children, title, description, variantButton, textButton, button = true }) => {
    return (
        <section className="w-full my-3">
            {
                title &&
                <h3 className="text-lg font-bold text-foreground w-11/12 mx-auto mb-2">
                    {title}
                </h3>
            }
            {
                description &&
                <p className="text-base text-foreground w-11/12 mx-auto">
                    {description}
                </p>
            }
            <div className="flex justify-evenly w-full flex-nowrap my-6">
                {children}
            </div>
            {
                button &&
                <Button variant={variantButton ?? "ghost"} color="secondary" className="mx-auto block w-64  shadow-lg 
               text-purple-400 border-purple-400 hover:border-transparent">
                    {textButton ?? "Ver más"}
                </Button>
            }

        </section>
    )
}

export default CardSection