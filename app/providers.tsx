'use client';
import { ReactNode } from 'react';
import ThemeProvider from './theme-provider';
import { Toaster } from '@/components/ui/toaster';
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
