import { Geist, Geist_Mono, Josefin_Slab } from "next/font/google";
import Header from "../components/Header"
import BottomNav from "../components/BottomNav"

import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
})

export const metadata = {
  title: "StyleLogue - Nigerian Fashion Catalogue",
  description: "Discover and share beautiful Nigerian fashion styles. Browse Senator, Ankara, Adire, Agbada, Lace and more. Share your favourite designs with your tailor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/fregan-serif" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSlab.variable} antialiased min-h-screen bg-background pb-20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-lg mx-auto py-6">
            {children}
          </main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
