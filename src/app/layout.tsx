import { DarkModeProvider } from '../components/darkmode';

export const metadata = {
  title: 'Gad Kalisa - Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Boldonse&family=Caveat:wght@400..700&family=Chewy&family=Comfortaa:wght@300..700&family=Jura:wght@300..700&family=Nata+Sans:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Permanent+Marker&family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="dark">
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
