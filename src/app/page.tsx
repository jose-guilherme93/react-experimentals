"use client"
import LinkToComponent from "@/components/linkToComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex h-screen border flex-col gap-2 items-center">
        <h1 className="mb-2">Projects</h1>
        <LinkToComponent href={'challenges/profile-settings'}>profile-settings</LinkToComponent>


        <LinkToComponent href={'challenges/transport-widget'}>transport-widget </LinkToComponent>


        <LinkToComponent href={'challenges/shopping-cart'}>shopping-cart</LinkToComponent>
      </main>
    </>
  )
}
