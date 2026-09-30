import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youth Pledge 1928 and Indonesia Raya",
  description: "Academic presentation about Youth Pledge 1928 and Its Contribution to The Indonesian Nation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col text-gray-900 font-sans overflow-x-hidden relative">
        {/* Grain/Noise Texture */}
        <div className="bg-noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
