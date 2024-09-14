import { Button } from '../ui/button';
import { PiShoppingCartLight } from 'react-icons/pi';
export default function AddToCart({ productId }: { productId: string }) {
  return (
    <Button
      size='lg'
      variant='outline'
      className='capitalize cursor-pointer flex gap-x-2 w-full'
    >
      <PiShoppingCartLight />
      add to cart
    </Button>
  );
}
