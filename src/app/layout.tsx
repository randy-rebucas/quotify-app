import '@/app/ui/global.css';
import "/public/css/main.css";
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s | Quotify',
    default: 'Quotify Dashboard',
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
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      {/* <Script src="/lib/flowbite.min.js" /> */}
      <Script src="/lib/anime.min.js" />
      <Script src="/js/main.js" />
      <Script src="/js/animations.js" />
    </html>
  );
}
