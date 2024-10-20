import { ThemeProvider } from 'next-themes'
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from 'next'
// import { CSPostHogProvider } from '@/providers/PosthogProvider';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: "--font-space-grotesk"
});

// const spaceGrotesk = localFont({
//   src: "fonts/space-grotesk-v15-latin-regular.woff2",
//   variable: "--font-space-grotesk",
//   weight: "100 900",
// })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import type { Metadata, Viewport } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://vishalkumar.wiki'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vishal Kumar | Full Stack Developer",
    template: "%s | Vishal Kumar"
  },
  description: "Full Stack Developer specializing in Next.js, Node.js, and scalable web applications. Explore my portfolio for innovative projects and technical expertise.",
  keywords: ["Full Stack Developer", "Next.js", "Node.js", "Web Development", "Vishal Kumar", "Software Engineer"],
  authors: [{ name: "Vishal Kumar" }],
  creator: "Vishal Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Vishal Kumar | Full Stack Developer",
    description: "Innovative Full Stack Developer with expertise in Next.js, Node.js, and scalable web applications. Explore my portfolio for cutting-edge projects and technical insights.",
    siteName: "Vishal Kumar's Portfolio",
    images: [
      {
        url: `${baseUrl}/vishalkumar1.jpg`,
        width: 1200,
        height: 630,
        alt: "Vishal Kumar - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Kumar | Full Stack Developer",
    description: "Check out my portfolio for innovative web development projects and technical expertise.",
    images: [`${baseUrl}/vishalkumar1.jpg`],
    creator: "@VishalKumar03__"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-site-verification-code',  // Replace with your actual verification code
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630', 
    'og:locale': 'en_US',
    'og:site_name': "Vishal Kumar's Portfolio",
    'linkedin:author': 'https://www.linkedin.com/in/vishal-kumar-61b2b4254/',
  },
}

export const viewport: Viewport = {
  themeColor: '#CDD8FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${inter.variable}`}>
      {/* <CSPostHogProvider> */}
        <body

          className={`${spaceGrotesk.variable} ${roboto.variable} ${inter.variable} transition-colors ease-linear bg-background duration-300 antialiased flex justify-center`}
        >
          <ThemeProvider attribute="class" defaultTheme='light'>
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      {/* </CSPostHogProvider> */}
    </html>
  );
}
