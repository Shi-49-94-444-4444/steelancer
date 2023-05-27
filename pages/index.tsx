import Layout from "@/app/layout"
import { Banner, Quick, Category, Recent, AboutUs, Footer } from "@/app/components"

export default function Home() {
    return (
        <Layout>
            <Banner />
            <Quick />
            <Category />
            <Recent />
            <AboutUs />
            <Footer />
        </Layout>
    )
}
