import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Softinities - Full-Stack Development Company',
  description: 'Building modern applications with cutting-edge technology. Full-stack development services for web and mobile. Fast, scalable, production-ready solutions.',
  keywords: ['web development', 'mobile development', 'full-stack', 'React', 'Next.js', 'Node.js', 'software development'],
  authors: [{ name: 'Softinities' }],
  openGraph: {
    title: 'Softinities - Full-Stack Development Company',
    description: 'Building modern applications with cutting-edge technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softinities - Full-Stack Development Company',
    description: 'Building modern applications with cutting-edge technology',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0a0a0a] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Softinities',
              description: 'Full-stack development company specializing in modern web and mobile applications',
              url: 'https://softinities.com',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-234-567-890',
                contactType: 'customer service',
                email: 'contact@softinities.com',
              },
              sameAs: [
                'https://www.linkedin.com/company/110894017/',
                'https://www.facebook.com/share/1GDVM3cZND/?mibextid=wwXIfr',
                'https://github.com/softinities',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Software Development',
              provider: {
                '@type': 'Organization',
                name: 'Softinities',
              },
              areaServed: 'Worldwide',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

