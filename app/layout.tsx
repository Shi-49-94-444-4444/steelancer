import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, ClientOnly, Banner } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steelancer',
  description: 'Steelancer clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-full h-[1000px] bg-pink-100">
          <ClientOnly>
            <Navbar />
            <Banner />
          </ClientOnly>
          {children}
        </div>
      </body>
    </html>
  )
}
