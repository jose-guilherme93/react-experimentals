import Link from "next/link";




export default function Logo() {
    return (
            <Link href={'/'} className="navbar-start">
                <button className="btn">
                Projects
                </button>
            </Link>
    )
}