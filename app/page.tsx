import { Navbar, ClientOnly, Banner, Quick, Category, Recent, Background, AboutUs, Footer } from "./components"

export default function Home() {
  return (
    <ClientOnly>
      <Background>
        <Navbar />
        <Banner />
        <Quick />
        <Category />
        <Recent />
        <AboutUs />
        <Footer />
      </Background>
    </ClientOnly>
  )
}
