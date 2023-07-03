import Link from "next/link"

export default function About() {
    return (
        <Link href={'/About'} className="navBar-start">
        <button className="btn btn-ghost border border-1 border-zinc-400 border-solid">
        About me
        </button>
    </Link>
    )
}