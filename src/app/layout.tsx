import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

// import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');

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
      <body className={Josefin.className}>{children}</body>
    </html>
  );
}
