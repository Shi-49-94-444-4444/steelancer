import "./globals.css"
import { Navbar, ClientOnly, Background } from "./components"
import ToasterProvider from "./providers/ToasterProvider"

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
    <ClientOnly>
      <Background>
        <ToasterProvider />
        <Navbar />
        {children}
      </Background>
    </ClientOnly>
  )
}
