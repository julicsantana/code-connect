import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/Aside";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para Devs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
