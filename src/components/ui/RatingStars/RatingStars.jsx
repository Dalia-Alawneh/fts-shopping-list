import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} />
      ))}
      {hasHalf && <StarHalf size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className='text-gray-300' size={16} />
      ))}
    </div>
  );
};

export default RatingStars;
