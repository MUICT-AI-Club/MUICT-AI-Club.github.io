// app/layout.tsx
import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: 'MUICT AI Club',
  icons: {
    icon: '/logo_tab.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
