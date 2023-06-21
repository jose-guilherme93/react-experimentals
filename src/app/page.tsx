"use client"
import CardToComponent from "@/components/Card/";

export default function Home() {
  
  return (
    <>
      <main className="h-screen w-screen">
        <h1 className="w-full pl-4 md:text-center bg-base-200 font-bold text-3xl rounded-lg">Projects</h1>
        <div className="w-full justify-center md:justify-start flex flex-wrap ">
          <CardToComponent />

        </div>
      </main>
    </>
  )
}
