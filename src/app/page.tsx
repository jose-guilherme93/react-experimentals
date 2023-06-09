"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex h-screen border flex-col gap-2 items-center">
        <h1 className="mb-2">Projects</h1>
        <Link className="text-cyan-500 border border-solid border-1 p-2 rounded-md shadow-lg" href={'/challenges/profile-settings'}>profile-settings</Link>
        <Link className="text-cyan-500 border border-solid border-1 p-2 rounded-md shadow-lg" href={'challenges/transport-widget'}>transport-widget </Link>
      </main>
    </>
  )
}
