import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
    return (
        <header className="min-h-20 flex p-3 items-center">
            <Link href={"/"}>Inicio</Link>
        </header>
    )
}

export default Header