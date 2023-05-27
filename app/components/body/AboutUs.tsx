import Container from "../Container"
import FormatCusMd from "../FormatCusMd"
import Image from "next/image"

const AboutUs = () => {
    return (
        <FormatCusMd>
            <Container>
                <div className="
                        flex 
                        flex-col 
                        gap-3 
                        md:gap-0 
                        z-10
                    "
                >
                    <div className="
                            flex 
                            flex-row 
                            justify-center 
                            items-center
                        "
                    >
                        <h1 className="
                                text-[50px] 
                                font-semibold
                            "
                        >
                            <span>ABOUT </span>
                            <span className="text-pink-cus-tx">US</span>
                        </h1>
                    </div>
                    <div className="
                            flex 
                            flex-row
                            justify-between
                            mt-20
                        "
                    >
                        <Image
                            src="/images/aboutus.png"
                            alt="aboutus"
                            className="relative z-0"
                            height="600"
                            width="600"
                        />
                        <section className="ml-20 text-right">
                            <h1 className="text-5xl font-medium">
                                Find The Best
                                <br />
                                <span className="text-pink-cus-tx">Freelancers </span>
                                Here
                            </h1>
                            <h1 className="
                                    text-gray-cus 
                                    text-xl 
                                    mt-5 
                                    ml-20
                                "
                            >
                                Join the network of
                                <span className="font-semibold text-gray-cus"> 500+ high quality freelancers </span>
                                and find the desired addition to your team today. With more than
                                <span className="font-semibold text-gray-cus"> 300 freelance work </span>
                                posted of various jobs and skill requirements,
                                <span className="font-semibold text-gray-cus"> SteelanceX </span>
                                is the best choice for your every need of IT and development.
                            </h1>
                        </section>
                    </div>
                </div>
            </Container>
        </FormatCusMd>
    )
}

export default AboutUs