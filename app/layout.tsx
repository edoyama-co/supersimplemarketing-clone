import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Super Simple Marketing | Create a Marketing Message that Works",
  description:
    "Clarify your message, build your platform, and grow your business with confidence. Business Made Simple Certified Coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-navy">
        {children}
      </body>
    </html>
  );
}
