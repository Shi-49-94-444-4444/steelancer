import { VscStarFull, VscStarEmpty } from 'react-icons/vsc';

interface RatingProps {
  rating: number;
  maxStars: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxStars }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={starNumber}
            className={`text-pink-cus-bt ${
              starNumber <= rating ? 'text-pink-cus-bt' : 'text-gray-cus'
            }`}
          >
            {starNumber <= rating ? (
              <VscStarFull size={20} />
            ) : (
              <VscStarEmpty size={20} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating