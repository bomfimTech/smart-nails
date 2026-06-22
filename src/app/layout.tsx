import type { Metadata } from "next";

import { AppShell } from "@/core/AppShell";

import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Nails",
  description: "Sistema de agendamentos para manicure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}