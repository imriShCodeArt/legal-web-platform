import type { Metadata } from "next";
import "@legal/ui/styles.css";
import { firm } from "../content/firm";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: firm.name,
    template: `%s · ${firm.name}`,
  },
  description: firm.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
