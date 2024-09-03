import '@/app/global.css';

import { Metadata } from 'next';

import { Lato } from 'next/font/google'
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

import "/public/css/main.css";
import { getUser } from './lib/dal';

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
  const user = await getUser();
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
          {children}
          {modal}
      </body>
    </html>
  );
}