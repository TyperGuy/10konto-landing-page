import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '~/lib/registry';

export const metadata: Metadata = {
  title: '10konto',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
