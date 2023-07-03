import { ReactNode } from "react";


interface ContainerProps {
    children: ReactNode
}



export default function Container({children}: ContainerProps) {
    return (
        <div className="flex h-full w-full items-center justify-between mx-4">
            {children}
        </div>
    )
}