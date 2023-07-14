import { Fragment } from 'react'
import Link from 'next/link'

import { challenges } from '@/data/challengesData'


export default function CardToComponent() {
    return (
        <Fragment>
            {challenges.map((challenge, challengeIndex) => (
                <div key={challengeIndex} className='card glass w-96 text-zinc-300'>  
                    <ul className='card-body justify-between'>
                        <li className='card-title'>{challenge.title}</li>
                        <li  className='h-fit'>&quot;{challenge.description}&quot;</li>
                        <li className='card-actions items-start justify-end'>
                            <Link
                                className='btn btn-link top-6 relative left-4 bottom-0 text-zinc-200 p-0 m-0'
                                href={challenge.href}>
                                {challenge.buttonName}
                            </Link>
                        </li>
                    </ul>
                </div>
            ) )}
        </Fragment>
    )
}