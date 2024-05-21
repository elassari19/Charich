import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Provider from "../components/layout/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charich Store",
  description: "Charich Store is a modern e-commerce platform for all your shopping needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen flex flex-col justify-between', inter.className)}>
        <Provider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
