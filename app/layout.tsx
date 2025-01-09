import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Certifications",
    default: "Certifications",
  },

  description: "My Certifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏆</text></svg>'></link>

      <body
        className={`flex flex-col max-w-7xl min-h-screen mx-auto bg-violet-50 text-violet-900 dark:bg-slate-800 dark:text-violet-200 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className='flex-1 py-16 px-12 md:py-20 md:px-8 lg:py-28 gap-8 md:gap-8 my-6'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster position='bottom-center' theme='dark' />
      </body>
    </html>
  );
}
