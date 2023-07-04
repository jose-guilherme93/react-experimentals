import { Fragment, ReactElement } from "react";


interface SessionProps {
    title: string
    divButtonName: string 
    divButtonIcon: ReactElement
    divIcon: ReactElement
    sessioButtonIcon: ReactElement
    sessionIcon: ReactElement
    sessionButtonName: string
}


export default function Session({
    title, 
    divButtonIcon,
    divButtonName,
    divIcon, 
    sessionIcon,
    sessioButtonIcon,
    sessionButtonName
}: SessionProps) {
    return (
        <section className=' min-w-[20rem] '>
                <h3 
                    className=" text-gray-_300 text-xs mb-4 mt-5 font-thin"
                >
                    {title}
                </h3>

                <div 
                    className="flex items-center h-9 hover:text-violet-500"
                >
                    {divIcon}
                    <button 
                    className="w-full pl-2 flex justify-between text-start"
                >
                        {divButtonName}
                        {divButtonIcon}
                    </button>
                </div>

                <section className="flex  items-centerflex-shrink mb-5 h-9 hover:text-violet-500"
                >
                    {sessionIcon}
                    <button 
                    className="w-full pl-2 flex items-center justify-between text-start"
                    >
                        {sessionButtonName}
                        {sessioButtonIcon}
                    </button>
                </section>
        </section>
    )
}