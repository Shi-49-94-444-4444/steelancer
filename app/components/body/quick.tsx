import { quicks } from "@/app/constants"
import QuickBox from "../modal"
import Container from "../Container"
import FormatCusSm from "../format"

const Quick = () => {
    return (
        <FormatCusSm>
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
        </FormatCusSm>
    )
}

export default Quick