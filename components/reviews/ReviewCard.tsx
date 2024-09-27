import { Card, CardContent, CardHeader } from '../ui/card';
import Rating from './Rating';
import Comment from './Comment';
import Image from 'next/image';
type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};
export default function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className='relative bg-muted shadow-none'>
      <CardHeader>
        <div className='flex items-center'>
          <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            className='w-12 h-12 rounded-full object-cover '
            width={48}
            height={48}
          />
          <div className='ml-4'>
            <h3 className='text-sm font-bold capitalize mb-1'>
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  );
}
