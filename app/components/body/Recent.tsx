import Container from "../Container"
import FormatCusSm from "../FormatCusSm"
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { recents } from "@/app/constants"
import RecentBox from "../RecentBox"

const Recent = () => {
    return (
        <FormatCusSm>
            <Container>
                <div className="
                        flex 
                        flex-col 
                        gap-3 
                        md:gap-0
                    "
                >
                    <div className="
                            flex 
                            flex-row 
                            justify-between
                        "
                    >
                        <section>
                            <h1 className="
                                    text-3xl 
                                    text-[#9D9D9D]
                                "
                            >
                                The latest freelance work!
                            </h1>
                            <h1 className="
                                    font-medium
                                    text-5xl
                                    font-regular
                                "
                            >
                                Recently Posted
                                <span className="text-pink-300"> Works</span>
                            </h1>
                        </section>
                        <div className="
                                flex 
                                flex-row 
                                items-center
                            "
                        >
                            <BsArrowLeftCircleFill
                                size={50}
                                className="
                                    text-pink-500 
                                    rounded-full
                                    hover:text-white
                                    hover:bg-pink-500
                                    cursor-pointer
                                    mr-4
                                "
                            />
                            <BsFillArrowRightCircleFill
                                size={50}
                                className="
                                    text-pink-500 
                                    rounded-full
                                    hover:text-white
                                    hover:bg-pink-500
                                    cursor-pointer
                                "
                            />
                        </div>
                    </div>
                    <div className="
                            flex 
                            flex-row 
                            justify-center
                            mt-20
                        "
                    >
                        <div className="
                                w-full
                                md:h-[450px]
                                bg-white 
                                z-10 
                            "
                        >
                            <div className="
                                    flex 
                                    flex-row 
                                    gap-3
                                    md:gap-0
                                    py-5
                                    justify-between
                                    mt-5
                                "
                            >
                                {recents.map((item) => (
                                    <RecentBox
                                        key={item.label}
                                        src={item.src}
                                        label={item.label}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </FormatCusSm>
    )
}

export default Recent