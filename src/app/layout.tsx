import { Noto_Sans_JP } from 'next/font/google';
import React from 'react';

import './globals.css';

const notoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
