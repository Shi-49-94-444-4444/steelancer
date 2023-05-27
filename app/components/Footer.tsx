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
                            gap-10 
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
                                    gap-5
                                "
                            >
                                <AiFillInstagram size={40} />
                                <BsTwitter size={40} />
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
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        For Clients
                                    </h2>
                                    <div>
                                        Find Freelancers
                                    </div>
                                    <div>
                                        Post Project
                                    </div>
                                    <div>
                                        Refund Policy
                                    </div>
                                    <div>
                                        Privacy Policy
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        For Freelancers
                                    </h2>
                                    <div>
                                        Find Work
                                    </div>
                                    <div>
                                        Create Account
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        Contact Us
                                    </h2>
                                    <div className="
                                            flex 
                                            flex-row
                                            gap-2 
                                        "
                                    >
                                        <GrLocation className="mt-1" />
                                        <span>Ho Chi Minh City</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row
                                            gap-2 
                                        "
                                    >
                                        <TbPhoneCall className="mt-1" />
                                        <span>+0000000</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row 
                                            gap-2 
                                        "
                                    >
                                        <TfiEmail className="mt-1" />
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