import "@/app/global.css";
import "../static/styles/base.css";

import { Metadata } from "next";

import { Lato } from "next/font/google";

import { getSession } from "@/actions/session";
import { Toaster } from "react-hot-toast";
import SessionProvider from "@/components/session-provider";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Quotify",
  },
  description: "Quotify.",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Toaster position="top-center" />
        <SessionProvider session={session}>
          {children}
          {modal}
        </SessionProvider>
      </body>
    </html>
  );
}
