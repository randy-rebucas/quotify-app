import '@/app/shared/global.css';
import "/public/css/main.css";
import { lato } from '@/app/shared/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Quotify',
  },
  description: 'Quotify.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
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
