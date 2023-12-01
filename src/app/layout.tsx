import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });
const Josefin = Josefin_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Danial Saleemi",
  description: "Portfolio - Modern Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${Josefin.className} flex flex-row-reverse`}>
      <div className="flex h-screen items-center bg-gradient-to-t from-[#20163f96] via-black  to-[#20163f96]">
      <Navbar />
    </div>
        {children}</body>
    </html>
  );
}
