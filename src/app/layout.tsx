import { Metadata } from 'next'

import "./globals.css";
import './../../public/css/main.css'

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
