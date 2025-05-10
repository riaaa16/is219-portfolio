import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "@fontsource/silkscreen"; // Import Silkscreen font CSS
import { MainNav } from "@/components/main-nav"; // Re-add the MainNav import

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Font variables to use in className
const fontVariables = `${inter.variable} ${ibmPlexMono.variable}`;

export const metadata: Metadata = {
  title: {
    default: "Viktoria Gaiser",
    template: "%s | Viktoria Gaiser",
  },
  description: "Personal portfolio of Viktoria Gaiser showcasing creative projects.",
  authors: [{ name: "Viktoria Gaiser" }],
  keywords: ["web development", "coding", "portfolio", "creative coding", "projects"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* No custom favicon link, let Next.js use public/favicon.png automatically */}
      <body className={`${fontVariables} font-sans antialiased`}>
        <header className="container mx-auto px-4">
          <MainNav />
        </header>
        {children}
      </body>
    </html>
  );
}
