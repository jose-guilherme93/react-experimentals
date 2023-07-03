import Header from '@/components/header/Header'
import './globals.css'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Experimentals',
  description: 'Desafios baseados em HTML, CSS, JavaScript, Typescript e ReactJS.',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
