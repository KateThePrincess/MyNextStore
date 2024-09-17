import { IconType } from 'react-icons/lib';
import {
  RxHome,
  RxHeart,
  RxStar,
  RxBell,
  RxCube,
  RxMixerHorizontal,
  RxPencil2,
  RxMix,
  RxMagicWand,
} from 'react-icons/rx';
type NavLink = {
  href: string;
  label: string;
  icon: IconType;
};
export const links: NavLink[] = [
  { href: '/', label: 'home', icon: RxHome },
  { href: '/favorites', label: 'favorites', icon: RxHeart },
  { href: '/products', label: 'products', icon: RxCube },
  { href: '/reviews', label: 'reviews', icon: RxStar },
  { href: '/orders', label: 'orders', icon: RxBell },
  { href: '/admin/sales', label: 'dashboard', icon: RxMixerHorizontal },
];

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'sales', icon: RxMagicWand },
  { href: '/admin/products', label: 'my products', icon: RxMix },
  { href: '/admin/products/create', label: 'create product', icon: RxPencil2 },
];
