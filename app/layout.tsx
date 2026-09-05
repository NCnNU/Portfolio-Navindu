import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { Toaster } from "./homee/toast/toaster";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navindu Chathuranga | Software Engineer",
  description:
    "Software Engineer at Enlear and AWS Community Builder (AI Engineering). Building scalable applications and exceptional user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${titillium.className}`}>
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
