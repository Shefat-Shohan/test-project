import type { Metadata } from "next";
import { Actor, Tilt_Warp, Nobile, Oranienbaum } from "next/font/google";
import "./globals.css";

// Nobile font configuration
const nobile = Nobile({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nobile",
  weight: ["400", "500", "700"],
});

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oranienbaum"
})

// Actor font configuration
const actorFont = Actor({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-actor",
});

// Tilt Warp font configuration
const tiltWarpFont = Tilt_Warp({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-warp",
});

export const metadata: Metadata = {
  title: "GMK Dakonderhoud",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nobile.variable} ${actorFont.variable} ${tiltWarpFont.variable} ${oranienbaum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
