import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skapa User Story - Générateur IA de User Stories",
  description: "Plateforme de génération de user stories par IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
