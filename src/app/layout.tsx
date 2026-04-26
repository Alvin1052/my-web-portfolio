import { BaseUrl, metadataKeyword } from '@/constants/metadata';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ProviderComponent from './main-provider';

const inter = Inter({
  variable: '--font-inter',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portofolio | Alvin Wiliawan',
  description:
    'Experiences in Building Website as Front End Web Developer field with design Accuracy 99% as Figma Design From UI Designer using updated technology for better performance and user Experiences. Available for Freelance and Remote Work.',
  keywords: metadataKeyword,
  openGraph: {
    title: 'Front End Developer in Indonesia',
    description: 'Best Front End Developer in Indonesia',
    siteName: BaseUrl,
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: BaseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn(inter.variable, 'antialiased')}>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}
