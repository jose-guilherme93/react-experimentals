import React from 'react'
import Link from 'next/link'


const pathTree = "challenges"

const challenges = [
   
    {   
        title: 'profile-settings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident eveniet tenetur?',
        buttonName: 'profile-settings',
        href: `${pathTree}/profile-settings`
   },
   {    title: 'transport-widget',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident eveniet tenetur?',
        buttonName: 'transport-widget',
        href: `${pathTree}/transport-widget`
    },
    {   title: 'shopping-cart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident eveniet tenetur?',
        buttonName: 'shopping-cart',
        href: `${pathTree}/shopping-cart`
    },
    {   title: 'shopping-cart',
        description: 'Lorem ipsum dolor sit amet, conseerg freoufgerf lewskfnnw fiwe newwei fweoiuf weoúif weoiufewhoihewohfewo  o erfwerfg wegrg rg rgq rg rgrewgrgr  r grqewgrgrqg ih woefiu weooictetur adipisicing elit. Explicabo provident eveniet tenetur?',
        buttonName: 'shopping-cart',
        href: `${pathTree}/shopping-cart`
    },
  ]

export default function CardToComponent() {
    return (
        <>
            {challenges.map((challenge, challengeIndex) => (
                <>  
                    <ul className='card card-normal m-2 justify-between items-center sm:card-compact h-72 w-64 border border-1 p-2 border-solid border-black'>
                        <li key={challengeIndex} className='card-title'>{challenge.title}</li>
                        <li key={challengeIndex} className='text-center overflow-hidden hover:overflow-auto' >&quot;{challenge.description}&quot;</li>
                        
                        <Link key={challengeIndex}
                            className='btn btn-primary w-44' 
                            href={challenge.href}>
                            {challenge.buttonName}    
                        </Link>
                    </ul>
                </>
            ) )}
            
        </>
    )
}