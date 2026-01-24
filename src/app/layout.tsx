import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Accounting Home | Premium Outsourced Bookkeeping',
  description: 'Scalable financial management to fuel your company\'s expansion without the executive overhead.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.className} bg-[#F9FAFA] dark:bg-[#F9FAFA] font-display text-primary antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}