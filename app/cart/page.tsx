import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import SectionTitle from '@/components/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PiShoppingCartLight } from 'react-icons/pi';
export default async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect('/');
  //to get most recent cart IMPORTANT!!!
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);
  if (currentCart.numItemsInCart === 0)
    return <SectionTitle text='Empty Cart' />;
  return (
    <>
      <SectionTitle text='Shopping Cart' Icon={PiShoppingCartLight} />
      <div className='mt-8 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={currentCart.cartitems} />
        </div>
        <div className='lg:col-span-4'>
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
