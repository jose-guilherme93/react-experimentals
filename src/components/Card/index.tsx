import React, { Fragment } from 'react'
import Link from 'next/link'

import { challenges } from '@/data/challengesData'


export default function CardToComponent() {
    return (
        <Fragment>
            {challenges.map((challenge, challengeIndex) => (
                <div key={challengeIndex}>  
                    <ul className='card card-normal m-2 justify-between items-center sm:card-compact h-72 w-64 border border-1 p-2 border-solid border-black'>
                        <li className='card-title'>{challenge.title}</li>
                        <li  className='text-center overflow-hidden hover:overflow-auto' >&quot;{challenge.description}&quot;</li>
                        
                        <Link
                            className='btn btn-primary w-44' 
                            href={challenge.href}>
                            {challenge.buttonName}    
                        </Link>
                    </ul>
                </div>
            ) )}
        </Fragment>
    )
}