import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar, ClientOnly, Banner, Quick, Category, Recent, Background, AboutUs, Footer } from "./components"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steelancer',
  description: 'Steelancer clone',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowY: 'auto' }}>
        <ClientOnly>
          <Background>
            <Navbar />
            {children}
          </Background>
        </ClientOnly>
      </body>
    </html>
  )
}
