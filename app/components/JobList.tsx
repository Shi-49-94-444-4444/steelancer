'use client'

import { useState } from "react";

interface JobsListProps {
    title?: string;
    date?: number;
    description?: string;
    categories?: string;
    price?: number;
    businessName?: string;
}

const JobList: React.FC<JobsListProps> = ({
    title,
    date,
    description,
    categories,
    price,
    businessName,
}) => {
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
                        Skill: {categories}
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
                            Business: {businessName}
                        </h3>
                    </section>
                    <button className="
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

export default JobList