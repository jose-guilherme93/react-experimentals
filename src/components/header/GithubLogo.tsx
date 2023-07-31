"use client"
import { GithubLogo } from "@phosphor-icons/react"
import Link from 'next/link'


export default function GithubIcon() {
    return (
        <div className="navbar-end w-fit">
            <Link href={"https://github.com/jose-guilherme93"}>
                <GithubLogo size={32} className="text-zinc-300" />
            </Link>
        </div>
    )
}