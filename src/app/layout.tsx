// app/dashboard/layout.tsx (or .js)
import { DarkModeProvider } from '../components/darkmode'; // Adjust path as necessary
import Navbar from '../components/Navbar'; // Adjust path as necessary

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the layout content with DarkModeProvider */}
        <DarkModeProvider>
          {/* Layout UI, including Navbar or other shared components */}
          <Navbar />
          {/* Main content */}
          <main>{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
