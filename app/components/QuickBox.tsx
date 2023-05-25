import { IconType } from "react-icons"

interface QuickBoxProps {
    icon: IconType;
    label: string;
    description: string;
}

const QuickBox: React.FC<QuickBoxProps> = ({
    icon: Icon,
    label,
    description
}) => {
    return (
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
                <Icon size={50} />
            </div>
            <div className="
                    font-semibold
                    text-[25px]
                    mt-5
                "
            >
                {label}
            </div>
            <div className="
                    text-[20px]
                    text-[#9D9D9D]
                    text-center
                "
            >
                {description}
            </div>
        </div>
    )
}

export default QuickBox