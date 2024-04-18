import '@/app/ui/global.css';
import "/public/css/main.css";

import { Metadata } from 'next';
import { lato } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Quotify',
  },
  description: 'Quotify.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}