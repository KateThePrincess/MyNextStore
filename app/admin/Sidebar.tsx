'use client';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? 'secondary' : 'ghost';
        return (
          <Button
            asChild
            className='mb-2 capitalize font-normal  '
            variant={variant}
            key={link.href}
          >
            <Link href={link.href} className='flex gap-2 items-center'>
              <link.icon />
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}
