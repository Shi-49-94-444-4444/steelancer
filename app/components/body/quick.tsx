import { RiLockPasswordLine } from "react-icons/ri"
import { AiOutlineFileSearch } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import { quicks } from "../constants"
import QuickBox from '../QuickBox'
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
                            {quicks.map((item) => (
                                <QuickBox
                                    key={item.label}
                                    icon={item.icon}
                                    label={item.label}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Quick