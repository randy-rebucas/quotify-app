import "@/app/global.css";
import "../../public/css/main.css";

import { Metadata } from "next";

import { Lato } from "next/font/google";
import SessionProvider from "../components/session-provider";
import { getSession } from "@/actions/session";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

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
      <Head>
        <link href="static/styles/base.css" rel="stylesheet" />
      </Head>
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
