import type { Metadata } from "next";
import { Cantarell, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import React from "react";
import cn from "classnames";

const cantarell = Cantarell({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-cantarell"
});

const jkt = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jkt"
})

export const metadata: Metadata = {
  title: "Otherways",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(cantarell.className, 'm-0')}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
