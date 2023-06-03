import { useState } from 'react';
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc';

interface RatingFilterProps {
    onChange: (rating: number) => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({ onChange }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
        onChange(rating);
    };

    const handleRatingHover = (rating: number) => {
        setHoveredRating(rating);
    };

    const handleRatingHoverEnd = () => {
        setHoveredRating(0);
    };

    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
                <span
                    key={rating}
                    className={`cursor-pointer ${rating <= selectedRating || rating <= hoveredRating
                            ? 'text-pink-cus-bt'
                            : 'text-pink-cus-bt'
                        }`}
                    onMouseEnter={() => handleRatingHover(rating)}
                    onMouseLeave={handleRatingHoverEnd}
                    onClick={() => handleRatingChange(rating)}
                >
                    {rating <= selectedRating || rating <= hoveredRating ? (
                        <VscStarFull size={25} />
                    ) : (
                        <VscStarEmpty size={25} />
                    )}
                </span>
            ))}
        </div>
    );
};

export default RatingFilter;