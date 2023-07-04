/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
"use client"

import {Heebo} from 'next/font/google'
import Image from 'next/image'
import {User, Key, CaretRight, Bell, DesktopTower, UserSwitch, SignOut, Question, PersonArmsSpread} from '@phosphor-icons/react'
import Session from './Session'
import Footer from './Footer'

const heebo = Heebo({
    subsets: ['latin'],
    weight:  '400',
    display: 'swap'

})
export default function ProfileSettings() {
    return (
        <>
            <div className='bg-gradient-_100 h-screen w-screen flex items-center justify-center'>                
                <main className={`${heebo.className} overflow-hidden flex p-6 min-h-[36.5rem] w-[23.43rem]
                 border border-10 border-separate border-gradient-_100 justify-center text-gray-_100  bg-zinc-100 rounded-xl`}>
                    <section className='flex flex-col w-screen'>
                        <section className="flex  mb-10">
                        <Image
                            quality={100}
                            priority
                            className="w-12 h-auto mr-4 rounded-xl"
                            src={"https://i.pinimg.com/originals/3a/1d/db/3a1ddb76202911c5b96d274d12476e18.jpg"}
                            alt=""
                            width={46}
                            height={46}
                        />
                        <section className="w-80 h-auto">
                            <h2 className="text-lg font-bold">Marvin MKinney</h2>
                            <p className=" w-32 text-gray-_200">marvin.mckinney@example.com</p>
                        </section>
                        </section>
                        <hr/>

                        <Session 
                            title='CONTA' 
                            divIcon={<User size={26} />}
                            divButtonName='Dados Pessoais'
                            divButtonIcon={<CaretRight  size={26} />}

                            sessionIcon={<Key size={26}/>}
                            sessionButtonName='Informações de login'
                            sessioButtonIcon={<CaretRight  size={26} />}
                            />
                        <hr/>

                        <Session
                            title='PREFERÊNCIAS' 
                            divIcon={<Bell size={26} />}
                            divButtonName='Notificações'
                            divButtonIcon={<CaretRight  size={26} />}

                            sessionIcon={<PersonArmsSpread size={26}/>}
                            sessionButtonName='Acessibilidade'
                            sessioButtonIcon={<CaretRight  size={26} />}
                            />
                        <hr/>
                        
                        <Session 
                            title='PRIVACIDADE' 
                            divIcon={<DesktopTower size={26} />}
                            divButtonName='Aparelhos conectados'
                            divButtonIcon={<CaretRight  size={26} />}

                            sessionIcon={<UserSwitch size={26}/>}
                            sessionButtonName='Acessibilidade'
                            sessioButtonIcon={<CaretRight  size={26} />}
                            />
                        <hr/>
                       
                     
                        <Footer 
                            buttonQuestionName='Central de ajuda' 
                            buttonSingOutName='Sair' 
                            iconQuestion={< Question size={26}/>} 
                            iconSignOut={ <SignOut size={26} />}/>
                    </section>
                </main>
            </div>        
        </>
    )
}