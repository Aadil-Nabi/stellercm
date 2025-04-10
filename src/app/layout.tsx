import type { Metadata } from "next";
import "./globals.css";
import NavigationPage from "@/components/ui/navigation_bar";
import FooterPage from "@/components/ui/footer";
import  Link from "next/link";

export const metadata: Metadata = {
  title: "StellerCM",
  description: "StellerCM",
};

export default function RootLayout({
    auth,
  children,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <NavigationPage/>
    {auth}
    {children}
    <FooterPage/>
    </body>
    </html>
  );
}