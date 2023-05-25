import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, ClientOnly, Banner, Quick, Category, Recent } from './components'

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
        <div className="absolute inset-0 bg-cover bg-center w-full h-[980px]" style={{
                backgroundImage: 'url("./images/background.png")',
              }}>
          <ClientOnly>
            <Navbar />
            <Banner />
            <Quick />
            <Category />
            <Recent />
          </ClientOnly>
          {children}
        </div>
      </body>
    </html>
  )
}
