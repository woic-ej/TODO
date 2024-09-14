import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nanumSquare = localFont({
  src: "./fonts/NanumSquareR.ttf",
  variable: "--font-nanum-square",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TODO App",
  description: "todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${nanumSquare.variable} antialiased`}>{children}</body>
    </html>
  );
}
