import { ThemeProvider } from 'next-themes'
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

// Import local fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${roboto.variable} ${inter.variable}`}>
      <body
        // ${geistSans.variable} ${geistMono.variable}
        className={`${spaceGrotesk.variable} ${roboto.variable} ${inter.variable} transition-colors ease-linear bg-background duration-300 antialiased flex justify-center h-[5000px]`}
      >
        <ThemeProvider attribute="class" defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
