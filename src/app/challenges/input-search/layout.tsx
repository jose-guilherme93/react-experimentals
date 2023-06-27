"use client"
import Link from "next/link";


export default function RootLayout({
    children, 
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang="pt-br">
        
        <body>
         <Link  
            className='m-4 text-cyan-500 border border-solid border-1 p-2 rounded-md shadow-lg' href={'/'}> 
            Voltar
         </Link>
          {children}
        </body>
      </html>
    )
  }