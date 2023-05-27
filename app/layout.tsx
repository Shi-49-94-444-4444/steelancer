import "./globals.css"
import { Navbar, ClientOnly, Background } from "./components"

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
        <Navbar />
        {children}
      </Background>
    </ClientOnly>
  )
}
