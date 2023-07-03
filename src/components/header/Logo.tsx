import Link from "next/link";




export default function Logo() {
    return (
            <Link href={'/'} className="navBar-start">
                <button className="btn btn-primary">
                Projects
                </button>
            </Link>
    )
}