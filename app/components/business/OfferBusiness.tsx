'use client'

import Image from "next/image"
import { useState } from "react";

interface OfferBusinessProps {
    src: string;
    title?: string;
    offer?: {
        comment: string;
        price: number;
        date: number;
    }[];
}

const OfferBusiness: React.FC<OfferBusinessProps> = ({
    src,
    title,
    offer
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
        setIsExpanded(true);
    };

    const handleShowLess = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <div className="grid grid-cols-12 py-5 space-x-5">
                <div className="col-span-2">
                    <Image
                        alt="avatar"
                        src={src}
                        width="150"
                        height="150"
                        className="cursor-pointer"
                    />
                </div>
                {offer?.map((item) => (
                    <>
                        <section className="col-span-6 space-y-5">
                            <h1 className="font-bold">{title}</h1>
                            <p className={isExpanded ? "" : "line-clamp-6"}>
                                {item.comment}
                            </p>
                            {!isExpanded && (
                                <button onClick={handleShowMore} className="text-pink-cus-tx">
                                    Show More
                                </button>
                            )}
                            {isExpanded && (
                                <button onClick={handleShowLess} className="text-pink-cus-tx">
                                    Show Less
                                </button>
                            )}
                        </section>
                        <div className="col-span-4">
                            <h2 className="font-bold text-pink-cus-bt">
                                {item.price}$
                                <span className="text-black font-medium"> in {item.date} day</span>
                            </h2>
                        </div>
                    </>
                ))}
            </div>
            <div className="border-b-2"></div>
        </>
    )
}

export default OfferBusiness