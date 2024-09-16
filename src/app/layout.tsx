import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/app/_components/navbars/NavBar";

const nanumSquare = localFont({
  src: "./fonts/NanumSquareR.ttf",
  variable: "--font-nanum-square",
  weight: "100 900",
});

const ssanToKKi = localFont({
  src: "./fonts/HSSantokki.ttf",
  variable: "--font-ssan-tokki",
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
      <body
        className={`${nanumSquare.variable} ${ssanToKKi.variable} antialiased`}
      >
        <NavBar />
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
