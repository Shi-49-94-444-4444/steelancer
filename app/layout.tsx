import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, ClientOnly } from './components'

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
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}