import { Navbar, ClientOnly, Banner, Quick, Category, Recent, Background } from "./components"

export default function Home() {
  return (
    <ClientOnly>
      <Background>
        <Navbar />
        <Banner />
        <Quick />
        <Category />
        <Recent />
      </Background>
    </ClientOnly>
  )
}
