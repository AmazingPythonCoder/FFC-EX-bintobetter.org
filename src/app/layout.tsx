import type { Metadata } from "next";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/google-tag-manager";
import CookieConsent from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Bin to Better | Turning Waste into Opportunity",
  description: "At Bin to Better, we believe that waste isn't just trash, it's opportunity. Join us in creating a more sustainable, circular future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
