import { RiLockPasswordLine } from "react-icons/ri"
import { AiOutlineFileSearch } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import Container from "../Container"

const Quick = () => {
    return (
        <div className="px-20">
            <div className="
                flex 
                flex-row 
                justify-center
                "
            >
                <div className="
                    w-[90%] 
                    md:h-[325px] 
                    bg-white 
                    z-10 
                    shadow-lg 
                    rounded-[10px]
                    "
                >
                    <Container>
                        <div className="
                            flex 
                            flex-row 
                            gap-3
                            md:gap-0
                            py-10
                            justify-between
                            mt-5
                            "
                        >
                            <div className="
                                flex
                                flex-col
                                justify-between
                                items-center
                                w-auto
                                md:w-[250px]
                                shadow-sm
                                rounded-[10px]
                                "
                            >
                                <div className='
                                    p-4 
                                    bg-blue-100 
                                    rounded-full 
                                    text-pink-300
                                    cursor-pointer
                                    '
                                >
                                    <RiLockPasswordLine size={50} />
                                </div>
                                <div className="
                                    font-poppins
                                    font-semibold
                                    font-normal
                                    text-[25px]
                                    mt-5
                                    "
                                >
                                    Create Account
                                </div>
                                <div className="
                                    font-poppins
                                    text-[20px]
                                    text-[#9D9D9D]
                                    text-center
                                    ml-5
                                    "
                                >
                                    First create an account and update your profile
                                </div>
                            </div>
                            <div className="
                                flex
                                flex-col
                                justify-between
                                items-center
                                w-auto
                                md:w-[300px]
                                shadow-sm
                                rounded-[10px]
                                "
                            >
                                <div className='
                                    p-4 
                                    bg-blue-100 
                                    rounded-full 
                                    text-pink-300
                                    cursor-pointer
                                    '
                                >
                                    <AiOutlineFileSearch size={50} />
                                </div>
                                <div className="
                                    font-poppins
                                    font-semibold
                                    font-normal
                                    text-[25px]
                                    mt-5
                                    "
                                >
                                    Search work 
                                </div>
                                <div className="
                                    font-poppins
                                    text-[20px]
                                    text-[#9D9D9D]
                                    text-center
                                    ml-5
                                    "
                                >
                                    FSearch the best freelance work
                                </div>
                            </div>
                            <div className="
                                flex
                                flex-col
                                justify-between
                                items-center
                                w-auto
                                md:w-[300px]
                                shadow-sm
                                rounded-[10px]
                                "
                            >
                                <div className='
                                    p-4 
                                    bg-blue-100 
                                    rounded-full 
                                    text-pink-300
                                    cursor-pointer
                                    '
                                >
                                    <MdOutlineSecurity size={50} />
                                </div>
                                <div className="
                                    font-poppins
                                    font-semibold
                                    font-normal
                                    text-[25px]
                                    mt-5
                                    "
                                >
                                    Save and apply
                                </div>
                                <div className="
                                    font-poppins
                                    text-[20px]
                                    text-[#9D9D9D]
                                    text-center
                                    ml-5
                                    "
                                >
                                    Apply or save and start working today
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Quick