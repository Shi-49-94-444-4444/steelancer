import Image from "next/image"

interface RecentBoxProps {
    src: string;
    label: string;
    description: string;
    price: string
}

const RecentBox: React.FC<RecentBoxProps> = ({
    src,
    label,
    description,
    price
}) => {
    return (
        <div className="
                flex 
                flex-col 
                justify-between
                items-center
                w-auto
                md:w-[330px]
                shadow-lg
                rounded-[10px]
            "
        >
            <Image
                alt="Recent"
                className="mt-10"
                height="80"
                width="80"
                src={src}
            />
            <section className="
                    text-center 
                    px-2 
                    mt-10
                "
            >
                <h1 className="
                        text-2xl 
                        font-semibold 
                        text-regular
                    "
                >
                    {label}
                </h1>
                <h1 className="
                        text-[#9D9D9D] 
                        text-xl 
                        px-6 
                        text-center
                    "
                >
                    {description}
                </h1>
            </section>
            <section className="
                    flex 
                    flex-row 
                    justify-between 
                    items-center 
                    mt-10 
                    mb-10
                "
            >
                <h1 className="
                        text-xl 
                        text-center 
                        text-[#808082] 
                        mr-10
                    "
                >
                    Highest bid
                    <br />
                    ${price}
                </h1>
                <h1 className="
                        text-xl 
                        text-pink-300 
                        underline
                        cursor-pointer
                    "
                >
                    Apply now
                </h1>
            </section>
        </div>
    )
}

export default RecentBox