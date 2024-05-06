import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/Aside";
import { SearchForm } from "@/components/SerachForm";

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div>
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
