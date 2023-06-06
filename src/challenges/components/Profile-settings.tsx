/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import Head from "next/head"
import {User, Key} from '@phosphor-icons/react'
export default function ProfileSettings() {
    return (
        <>
                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="style.css"/>

                    
                </Head>
                <main className="flex font-heebo text-color p-6 h-[584px] w-[375px] border border-1 border-solid justify-center bg-gray-_500 rounded-xl">
                    <section>
                        <section className="flex mb-10">
                        <img
                            className="w-12 h-auto mr-4 rounded-xl"
                            src="https://i.pinimg.com/originals/3a/1d/db/3a1ddb76202911c5b96d274d12476e18.jpg"
                        />
                        <section className="w-80 h-auto">
                            <h2 className="text-lg font-heebo font-bold">Marvin MKinney</h2>
                            <p className=" w-32 text-gray-_200">marvin.mckinney@example.com</p>
                        </section>
                        </section>
                        <hr />
                        <section>
                        <h3 className="font-heebo text-gray-_300 text-xs mb-4 font-thin">
                            CONTA
                        </h3>
                        <section className="flex items-center">
                        <User size={32}/>
                            <button className="pl-2 text-start w-full">Dados pessoais</button>
                            <button className="w-full text-end h-auto ph ph-caret-right" />
                        </section>
                        <section className="flex items-center mb-5">
                            <Key size={32}/>
                            <button className="pl-2 w-full ">
                            Informações de login
                            <p />
                            </button>
                            <button className="w-full text-end h-auto ph ph-caret-right" />
                        </section>
                        </section>
                        <hr />
                        <section>
                        <h3 className="font-heebo text-gray-_300 text-xs mb-4 mt-5 font-thin">
                            PREFERÊNCIAS
                        </h3>
                        <section className="flex items-center ">
                            <i className="ph ph-bell" />
                            <button className="pl-2  text-start w-full">Notificações</button>
                            <button className="w-full text-end h-auto ph ph-caret-right" />
                        </section>
                        <section className="flex items-center mb-5">
                            <i className="ph ph-person-arms-spread" />
                            <button className="pl-2">Acessibilidade</button>
                            <button className="w-full text-end h-auto ph ph-caret-right" />
                        </section>
                        </section>
                        <hr />
                        <section>
                        <h3 className="font-heebo mb-4 mt-5 text-xs text-gray-_300 font-thin">
                            PRIVACIDADE
                        </h3>
                        <section className="flex items-center">
                            <i className="ph ph-desktop-tower" />
                            <button className="pl-2 text-start min-w-fit">
                            Aparelhos conectados
                            </button>
                            <button className="w-full text-end ph ph-caret-right" />
                        </section>
                        <section className="flex items-center mb-5">
                            <i className="ph ph-user-switch" />
                            <button className="w-full pl-2 text-start">Contas vinculadas</button>
                            <button className="w-full text-end h-auto ph ph-caret-right" />
                        </section>
                        </section>
                        <hr />
                        <section className=" mb-4 mt-5">
                        <section className="flex items-center">
                            <i className="ph ph-question" />
                            <button className="pl-2">Central de Ajuda</button>
                        </section>
                        <section className="flex items-center">
                            <i className="ph ph-sign-out text-custom_red" />
                            <button className="pl-2 text-custom_red">Sair</button>
                        </section>
                        </section>
                        <section>
                        </section>
                    </section>
                </main>
            </>
            
)}