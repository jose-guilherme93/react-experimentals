import { ReactElement } from "react"

interface FooterProps {
    iconQuestion: ReactElement
    iconSignOut: ReactElement
    buttonSingOutName: string
    buttonQuestionName: string
}

export default function Footer({
    iconQuestion, 
    iconSignOut,
    buttonQuestionName, 
    buttonSingOutName}: FooterProps) {
    return (
        <section className=" mb-4 mt-5">
            <section className="flex items-center">
                {iconQuestion}
                <button className="pl-2">{buttonQuestionName}</button>
            </section>
            <section className="flex items-center">
                {iconSignOut}
                <button className="pl-2 text-custom_red">{buttonSingOutName}</button>
            </section>
        </section>
    )
}