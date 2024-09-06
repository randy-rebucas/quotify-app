import '@/app/global.css';

import { Metadata } from 'next';

import { Lato } from 'next/font/google'
import SessionProvider from './ui/session-provider';
import { getSession } from '@/actions/session';

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Quotify',
  },
  description: 'Quotify.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_AUTH_URL}`),
};

export default async function RootLayout({
  children, modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <SessionProvider session={session}>
          {children}
          {modal}
        </SessionProvider>
      </body>
    </html>
  );
}