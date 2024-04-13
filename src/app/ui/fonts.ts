import { Inter, Lusitana, Lato } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400"],
  style: ["normal", "italic"],
});
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
