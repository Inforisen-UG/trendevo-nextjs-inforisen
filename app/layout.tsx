import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import SiteHeader from '@/components/layout/site-header';
import {
  GoogleTagManager,
  GoogleTagManagerNoscript,
} from '@/components/analytics/google-tag-manager';
import FooterSection from './(home)/_components/footer-section';
import { getSiteUrl } from '@/lib/site-url';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'Cheapest SMM Panel in Bangladesh Pay with bKash | TrendEvo',
  description:
    'TrendEvo is a trusted SMM Panel Bangladesh platform for Facebook, Instagram, YouTube, TikTok, and more. Pay easily with bKash, Nagad, or Rocket.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <head>
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerNoscript />
        <GoogleTagManager />
        <ThemeProvider defaultTheme="system" disableTransitionOnChange>
          <SiteHeader />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
