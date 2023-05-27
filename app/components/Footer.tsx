import Container from "./Container"
import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { GrFacebookOption, GrLocation } from "react-icons/gr"
import { TbPhoneCall } from "react-icons/tb"
import { TfiEmail } from "react-icons/tfi"

const Footer = () => {
    return (
        <div className="
                w-full 
                h-cus-3
                bg-pink-cus-bg
            "
        >
            <div className="px-10">
                <Container>
                    <div className="
                            grid 
                            grid-cols-12 
                            gap-3 
                            md:gap-0 
                            px-10
                        "
                    >
                        <div className="col-span-4">
                            <div className="absolute">
                                <Image
                                    alt="Logo"
                                    height="200"
                                    width="300"
                                    src="/images/logo.png"
                                />
                            </div>
                            <section className="mt-[250px] w-[300px]">
                                <h1>
                                    Powerful freelance marketplace system with an aim of
                                    connecting users (Freelancers & Clients) in a secure
                                    and simple way.
                                </h1>
                            </section>
                            <div className="
                                    flex 
                                    flex-row 
                                    cursor-pointer
                                "
                            >
                                <AiFillInstagram size={40} className="mr-5" />
                                <BsTwitter size={40} className="mr-5" />
                                <GrFacebookOption size={40} />
                            </div>
                        </div>
                        <div className="
                                col-span-8 
                                mt-20 
                                px-20 
                                py-10
                            "
                        >
                            <div className="
                                    flex 
                                    flex-row 
                                    justify-between
                                "
                            >
                                <div className="flex flex-col">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                            mb-4
                                        "
                                    >
                                        For Clients
                                    </h2>
                                    <div className="mb-4">
                                        Find Freelancers
                                    </div>
                                    <div className="mb-4">
                                        Post Project
                                    </div>
                                    <div className="mb-4">
                                        Refund Policy
                                    </div>
                                    <div className="mb-4">
                                        Privacy Policy
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                            mb-4
                                        "
                                    >
                                        For Freelancers
                                    </h2>
                                    <div className="mb-4">
                                        Find Work
                                    </div>
                                    <div className="mb-4">
                                        Create Account
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                            mb-4
                                        "
                                    >
                                        Contact Us
                                    </h2>
                                    <div className="
                                            flex 
                                            flex-row 
                                            mb-4
                                        "
                                    >
                                        <GrLocation className="mr-1 mt-1" />
                                        <span>Ho Chi Minh City</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row 
                                            mb-4
                                        "
                                    >
                                        <TbPhoneCall className="mr-1 mt-1" />
                                        <span>+0000000</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row 
                                            mb-4
                                        "
                                    >
                                        <TfiEmail className="mr-1 mt-1" />
                                        <span>FreelanceX@gmail.com</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer