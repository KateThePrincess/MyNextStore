import { Separator } from '@radix-ui/react-separator';
import React from 'react';
import Sidebar from './Sidebar';
import SectionTitle from '@/components/global/SectionTitle';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Image from 'next/image';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionTitle text='admin panel' Icon={MdOutlineAdminPanelSettings} />
      <Separator className='mt-2' />
      <section className='grid lg:grid-cols-12 gap-12 mt-12'>
        <div className='lg:col-span-2'>
          <Sidebar />
        </div>
        <div className='lg:col-span-10 px-4'>{children}</div>
      </section>
    </>
  );
}
