

import { ReactNode } from "react"


interface HeaderProps {
    children: ReactNode
}

export default function NavRoot({children}: HeaderProps) {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}