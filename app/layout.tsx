import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agência Aurora",
  description:
    "Agência digital especializada em design, marketing e tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}