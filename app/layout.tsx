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
import AiResourcesSection from '@/components/sections/ai-resources-section';
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cheapest SMM Panel in Bangladesh Pay with bKash | TrendEvo',
  description:
    'TrendEvo is a trusted SMM Panel Bangladesh platform for Facebook, Instagram, YouTube, TikTok, and more. Pay easily with bKash, Nagad, or Rocket.',
  alternates: {
    types: {
      'text/markdown': '/index.md',
    },
  },
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
        <link rel="alternate" type="text/markdown" href={`${siteUrl}/index.md`} />
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerNoscript />
        <GoogleTagManager />
        <ThemeProvider defaultTheme="system" disableTransitionOnChange>
          <SiteHeader />
          <main>
            {children}
            <AiResourcesSection />
          </main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
