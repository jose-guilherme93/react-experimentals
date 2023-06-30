import { ReactNode } from "react"

    interface TodoProps {
        children: ReactNode
    }

export default function TodoRoot({children}: TodoProps) {
    return (
            <>
                {children}
            </>
    )

}