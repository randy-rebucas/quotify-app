import '@/app/ui/global.css';
import "/public/css/main.css";

import { Metadata } from 'next';
import { lato } from './ui/fonts';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Quotify',
  },
  description: 'Quotify.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function RootLayout({
  children, modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${lato.className} antialiased`}>
          {children}
          {modal}
        </body>
      </html>
    </StoreProvider>
  );
}