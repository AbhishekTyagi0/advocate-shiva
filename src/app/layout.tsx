import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advocate Shiva",
  description:
    "Experienced legal counsel in Surajpur Court,Gautam Budh Nagar, India. Specialized in corporate law, real estate, and litigation. Committed to providing effective legal solutions.",
};

const Navbar = dynamic(() => import("@/app/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/app/components/Footer"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
