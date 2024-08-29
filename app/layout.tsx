import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zap – toda fofoca é bem vinda",
  description: "Conecte-se por meio da fofoca e notícia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn('dark', inter.className)}>
        {children}
        <Toaster
          theme="dark"
        />
      </body>
    </html>
  );
}
