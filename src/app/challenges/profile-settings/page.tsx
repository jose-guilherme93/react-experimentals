/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
"use client"

import {Heebo} from 'next/font/google'
import Image from 'next/image'
import {User, Key, CaretRight, Bell, DesktopTower, UserSwitch, SignOut, Question, PersonArmsSpread} from '@phosphor-icons/react'

const heebo = Heebo({
    subsets: ['latin'],
    weight:  '400',
    display: 'swap'

})
export default function ProfileSettings() {
    return (
        <>
            <div className='bg-gradient-_100 h-screen w-screen flex items-center justify-center'>                
                <main className={`${heebo.className} overflow-hidden flex p-6 h-[36.5rem] w-[23.43rem]
                 border border-10 border-separate border-gradient-_100 justify-center text-gray-_100  bg-zinc-100 rounded-xl`}>
                    <section className='flex flex-col w-screen'>
                        <section className="flex  mb-10">
                        <Image
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
                        <section className='w-full'>
                            <h3 className=" text-gray-_300 text-xs mb-4 font-thin">
                                CONTA
                            </h3>
                            <section className="flex min-w-[10%]  items-center">
                                
                                <User size={26} className=''/>
                                <button className="w-full pl-2 flex justify-between text-start">
                                    Dados pessoais
                                    <CaretRight  size={26} />
                                </button>
                                
                            </section>
                            <section className="flex items-center mb-5">
                                <Key className='' size={26}/>
                                <button className="w-full pl-2 flex  justify-between text-start">
                                Informações de login
                                <CaretRight size={26} />
                                </button>
                            </section>
                        </section>
                        <hr />
                        <section className=' min-w-[20rem] '>
                        <h3 className=" text-gray-_300 text-xs mb-4 mt-5 font-thin">
                            PREFERÊNCIAS
                        </h3>
                        <section className="flex items-center h-9">
                            <Bell size={26} />
                            <button className="w-full pl-2 flex justify-between text-start">
                                Notificações
                                <CaretRight size={26} className=''  />
                            </button>
                        </section>
                        <section className="flex  items-centerflex-shrink mb-5 h-9">
                            <PersonArmsSpread className='' size={26} />
                            <button className="w-full pl-2 flex items-center justify-between text-start">
                                Acessibilidade
                                <CaretRight size={26} />
                            </button>
                        </section>
                        </section>
                        <hr />
                        <section>
                        <h3 className=" mb-4 mt-5 text-xs text-gray-_300 font-thin">
                            PRIVACIDADE
                        </h3>
                        <section className="flex items-center">
                            <DesktopTower size={26} />
                            <button className="w-full pl-2 flex  justify-between text-start">
                            Aparelhos conectados
                            <CaretRight size={26} />
                            </button>
                        </section>
                            <section className="flex items-center mb-5">
                                <i className="ph ph-user-switch" />
                                <UserSwitch size={26} />
                                <button className="w-full pl-2 flex justify-between text-start">
                                    Contas vinculadas
                                    <CaretRight size={26} />
                                </button>
                                
                            </section>
                        </section>
                        <hr />
                        <section className=" mb-4 mt-5">
                            <section className="flex items-center">
                                <Question size={26} />
                                <button className="pl-2">Central de Ajuda</button>
                            </section>
                            <section className="flex items-center">
                                <SignOut size={26} />
                                <button className="pl-2 text-custom_red">Sair</button>
                            </section>
                        </section>
                    </section>
                </main>
            </div>        
        </>
    )
}