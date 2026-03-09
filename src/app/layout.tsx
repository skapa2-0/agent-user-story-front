import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skapa User Story - G\u00e9n\u00e9rateur IA de User Stories',
  description: 'AI-powered user story generation and management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="fr" className="dark">
        <body className="bg-dark text-white antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
