import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PreviewModal from "@/components/preview-modal";
import PreviewModelProvider from "@/providers/previewmodelprovider";
import ToastProvider from "@/providers/toast-provider";

const urbanFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppy",
  description: "Created by Sharoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanFont.className}>
        <PreviewModelProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
