'use client'

import { useState } from "react";
import ProductItem from "./ProductItem";

interface ProductFreelancerProps {
    product?: any[];
}

const ProductFreelancer: React.FC<ProductFreelancerProps> = ({ product }) => {
    const [showMore, setShowMore] = useState(false);

    const visibleProducts = showMore ? product : product?.slice(0, 6);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="grid grid-cols-3 gap-3">
            {visibleProducts?.map((item?: any) => (
                <ProductItem 
                    key={item.title} 
                    src={item.src} 
                    title={item.title}
                />
            ))}
            {product && product.length > 6 && (
                <div className="col-span-3 text-center">
                    {!showMore ? (
                        <button
                            onClick={toggleShowMore}
                            className="
                                text-pink-cus-tx 
                                text-xl 
                                hover:underline
                            "
                        >
                            More
                        </button>
                    ) : (
                        <button
                            onClick={toggleShowMore}
                            className="
                                text-pink-cus-tx 
                                text-xl 
                                hover:underline
                            "
                        >
                            Less
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductFreelancer;
