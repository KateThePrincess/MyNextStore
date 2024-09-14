import { RxHeart, RxHeartFilled } from 'react-icons/rx';
import { Button } from '../ui/button';

export default function FavoriteToggleButton({
  productId,
  text,
}: {
  productId: string;
  text?: string;
}) {
  return (
    <Button
      size={`${text ? 'lg' : 'icon'}`}
      variant='outline'
      className={`cursor-pointer flex capitalize gap-x-2 w-full ${
        text ? '' : 'p-2'
      }`}
    >
      <RxHeart />
      {text}
    </Button>
  );
}
