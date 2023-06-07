'use client'

interface ReviewBusinessProps {
    title?: string;
    price?: number;
}

const ReviewBusiness: React.FC<ReviewBusinessProps> = ({
    title,
    price
}) => {
    return (
        <div className="grid grid-cols-3 text-4xl font-bold text-gray-cus px-36 py-10 bg-white">
            <h1 className="col-span-2">
                {title}
            </h1>
            <h1 className="col-span-1 text-2xl text-right">
                BUDGET
                <span className="text-4xl"> ${price}</span>
            </h1>
        </div>
    )
}

export default ReviewBusiness