import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plusjakarta',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export { plusJakartaSans, inter };
