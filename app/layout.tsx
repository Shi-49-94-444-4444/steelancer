import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, ClientOnly, Banner, Quick } from './components'

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
      <body className={inter.className} style={{ overflowY: 'auto' }}>
        <div className="w-full h-[980px] bg-pink-100">
          <ClientOnly>
            <Navbar />
            <Banner />
            <Quick />
          </ClientOnly>
          {children}
        </div>
      </body>
    </html>
  )
}
