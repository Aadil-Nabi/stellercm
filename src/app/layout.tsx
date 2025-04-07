import type { Metadata } from 'next';
import './globals.css';
import NavigationPage from '@/components/ui/navigation_bar';
import FooterPage from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'StellerCM',
  description: 'StellerCM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
