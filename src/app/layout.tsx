import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Particles from "@/components/Particles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <div className="fixed inset-0 z-0">
            <Particles />
          </div>
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
