"use client"
import CardToComponent from "@/components/Card/";

export default function Home() {
  
  return (
    <>
      <main className="h-screen w-full">
        <div className="w-full justify-center md:justify-start flex flex-wrap">
          <CardToComponent />
        </div>
      </main>
    </>
  )
}
