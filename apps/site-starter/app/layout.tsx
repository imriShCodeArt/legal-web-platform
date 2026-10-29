import type { Metadata } from "next";
import { ThemeRegistry } from "@legal/ui";
import { firm } from "../content/firm";
import { firmColors } from "./theme";

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
      <body>
        <ThemeRegistry colors={firmColors}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
