import { RxHeart, RxHeartFilled } from 'react-icons/rx';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

export default async function FavoriteToggleButton({
  productId,
  text,
}: {
  productId: string;
  text?: string;
}) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });
  return (
    // <Button
    //   size={text ? 'lg' : 'icon'}
    //   variant='outline'
    //   className={`cursor-pointer flex capitalize gap-x-2 w-full ${
    //     text ? '' : 'p-2.5 bg-card'
    //   }`}
    // >
    //   <RxHeart />
    //   {text}
    // </Button>
    <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
  );
}
