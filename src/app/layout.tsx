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
    AOS.init();
  }, []);

  return (
    <html lang='en'>
      <head>
        <title>10konto</title>
        <meta charSet='UTF-8'></meta>
        <meta property='og:title' content='10konto' />
        <meta
          property='og:description'
          content='Encontrar produtos baratos em Angola nunca foi tão Uma plataforma onde podes encontrar as melhores ofertas nos mercados'
        />
        <meta
          property='description'
          content='Encontrar produtos baratos em Angola nunca foi tão Uma plataforma onde podes encontrar as melhores ofertas nos mercados'
        />
        <meta
          property='og:description'
          content='Encontrar produtos baratos em Angola nunca foi tão Uma plataforma onde podes encontrar as melhores ofertas nos mercados'
        />
        <meta
          name='keywords'
          content='10konto, descontos, Preços baratos, Preços, Comida, Sócia'
        ></meta>
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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
