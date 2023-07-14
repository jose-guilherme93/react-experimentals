"use client"
import CardToComponent from "@/components/Card/";

export default function Home() {
  
  return (
    <>
      <main className="h-full w-full">
        <div className="w-full p-5 justify-center gap-4 lg:justify-start flex flex-wrap">
          <CardToComponent />
        </div>
      </main>
    </>
  )
}
