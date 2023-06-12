import "./globals.css"
import { Navbar, ClientOnly, Background, QrMomo, ModalCreate } from "./components"
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
        <QrMomo />
        <ModalCreate />
        <Navbar />
        {children}
      </Background>
    </ClientOnly>
  )
}
