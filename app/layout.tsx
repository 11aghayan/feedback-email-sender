import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Feedback Form',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children,}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className='p-4 sm:pt-24' >
        {children}
      </body>
    </html>
  )
} 
