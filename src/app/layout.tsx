'use client';

import { useEffect } from 'react';
import './globals.css';
import StyledComponentsRegistry from '~/lib/registry';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <html lang='en'>
      <link
        href='https://fonts.googleapis.com/css?family=Inter'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css?family=Public Sans'
        rel='stylesheet'
      ></link>
      <body id='layout-body'>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
