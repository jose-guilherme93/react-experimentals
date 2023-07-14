import Link from "next/link"

export default function About() {
    return (
        <Link href={'/About'} className="navBar-start">
        <button className="btn btn-link text-zinc-300">
        About me
        </button>
    </Link>
    )
}