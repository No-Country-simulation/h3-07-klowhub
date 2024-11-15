import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
    return (
        <header className="min-h-20 flex p-3 items-center gap-3">
            <Image
                src="/assets/icons/klowhub.png"
                alt="Klowhub logo"
                height={50}
                width={50}
                className="text-xs"
            />
            <Link href={"/"}>Inicio</Link>
        </header>
    )
}

export default Header