import { RxStar, RxStarFilled } from 'react-icons/rx';

export default function Rating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className='flex items-center gap-x-1'>
      {stars.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? 'text-primary' : 'text-grey-400'
        }`;
        return isFilled ? (
          <RxStarFilled className={className} key={i} />
        ) : (
          <RxStar className={className} key={i} />
        );
      })}
    </div>
  );
}
