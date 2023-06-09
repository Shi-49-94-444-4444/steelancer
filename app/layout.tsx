import "./globals.css"
import { Navbar, ClientOnly, Background } from "./components"
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./action/getCurrentUser"

export const metadata = {
  title: 'Steelancer',
  description: 'Steelancer clone',
}

export default async  function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Background>
        <ToasterProvider />
        <Navbar currentUser={currentUser}/>
        {children}
      </Background>
    </ClientOnly>
  )
}
