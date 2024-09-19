import { Suspense } from 'react';
import Container from '../global/Container';
import Logo from './Logo';
import NavSearch from './NavSearch';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';

export default function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex justify-between gap-4 py-5 items-center'>
        <Logo />
        <Suspense>
          <NavSearch className='hidden sm:flex' />
        </Suspense>
        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
