import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Anurag Kumar | Portfolio',
  description: 'Portfolio of a Full Stack Developer — React, Node.js, TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
