import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Risk Meme Ladder',
  description: 'A fun game of risk and memes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}