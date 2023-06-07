'use client'

import { useRouter } from "next/router";

interface BusinessListProps {
    id: string;
    title?: string;
    date?: number;
    description?: string;
    skills?: string;
    price?: number;
    business?: string;
}

const BusinessList: React.FC<BusinessListProps> = ({
    id,
    title,
    date,
    description,
    skills,
    price,
    business,
}) => {
    const router = useRouter();

    const handleRentNow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(`/detail_business/${id}`);
    };

    return (
        <div className="
                grid 
                grid-cols-12 
                w-full 
                h-auto 
                bg-white 
                rounded-15 
                px-2 
                py-2 
                gap-10 
                shadow-lg
            "
        >
            <div className="
                    col-span-10 
                    px-5 
                    gap-3
                "
            >
                <section className="flex flex-col">
                    <div className="
                            flex 
                            flex-row 
                            justify-between
                        "
                    >
                        <h1 className="text-2xl font-bold">
                            {title}
                        </h1>
                        <h2 className="text-2xl text-pink-cus-tx">
                            {date} day left
                        </h2>
                    </div>
                    <div className="
                            text-xl 
                            bg-pink-cus-bt 
                            text-white 
                            font-bold 
                            w-28 
                            h-12 
                            pt-2 
                            text-center 
                            rounded-full 
                            cursor-pointer
                        "
                    >
                        Verified
                    </div>
                    <p className="line-clamp-3">
                        {description}
                    </p>
                    <div className="font-semibold">
                        Skill: {skills}
                    </div>
                </section>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col">
                    <section className="font-medium mb-10">
                        <h3>
                            Price: {price}$/hour
                        </h3>
                        <h3>
                            Business: {business}
                        </h3>
                    </section>
                    <button
                        onClick={handleRentNow} 
                        className="
                            bg-pink-cus-bt 
                            text-2xl 
                            text-white 
                            font-medium 
                            rounded-50 
                            py-2
                        "
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BusinessList