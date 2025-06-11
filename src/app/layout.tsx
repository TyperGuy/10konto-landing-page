'use client';

import { useEffect } from 'react';
import './globals.css';
import StyledComponentsRegistry from '~/lib/registry';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang='en'>
      <head>
        <title>
          MarcheApp | A maior plataforma de comparação de preços em Angola -Uma
          plataforma onde podemos encontrar as melhores ofertas em mais de 10
          super mercados
        </title>
        <meta charSet='UTF-8'></meta>
        <meta property='og:title' content='MarcheApp' />
        <meta
          property='og:description'
          content='MarcheApp - A maior plataforma de comparação de preços em Angola'
        />
        <meta
          property='description'
          content='MarcheApp - A maior plataforma de comparação de preços em Angola'
        />
        <meta
          property='og:description'
          content='MarcheApp - A maior plataforma de comparação de preços em Angola'
        />
        <meta
          name='keywords'
          content='MarcheApp - A maior plataforma de comparação de preços em Angola'
        />
        <meta name='robots' content='index, follow' />
        <meta property='og:image' content='./preview.png' />
        <meta name='twitter:card' content='summary' />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </head>
      <link
        href='https://fonts.googleapis.com/css?family=Inter'
        rel='stylesheet'
      />

      <link
        href='https://fonts.googleapis.com/css?family=Public Sans'
        rel='stylesheet'
      />

      <body id='layout-body'>
        <Navbar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
