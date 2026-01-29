import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO: Metadata completa optimizada para Google y redes sociales
export const metadata: Metadata = {
  title: "Julián Rodríguez - Full Stack Developer | React, Next.js, Node.js",
  description:
    "Desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables con React, Next.js, TypeScript y Node.js. Portfolio profesional con proyectos reales.",
  keywords: [
    "desarrollador full stack",
    "full stack developer",
    "react developer",
    "next.js",
    "node.js",
    "typescript developer",
    "portfolio desarrollador",
    "desarrollador web",
  ],
  authors: [{ name: "Julián Rodríguez" }],
  creator: "Julián Rodríguez",
  publisher: "Julián Rodríguez",
  openGraph: {
    title: "Julián Rodríguez - Full Stack Developer | React, Next.js, Node.js",
    description:
      "Desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables con React, Next.js, TypeScript y Node.js. Portfolio profesional con proyectos reales.",
    url: "https://tudominio.com",
    siteName: "Julián Rodríguez - Portfolio",
    images: [
      {
        url: "/icon_code.png",
        width: 1200,
        height: 630,
        alt: "Julián Rodríguez - Full Stack Developer Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // SEO: Twitter Card para compartir en Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Julián Rodríguez - Full Stack Developer | React, Next.js, Node.js",
    description:
      "Desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables con React, Next.js, TypeScript y Node.js. Portfolio profesional con proyectos reales.",
    creator: "@tuusername",
    images: ["/twitter-image.png"],
  },
  // SEO: Configuración de robots para indexación en Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon_code.png",

        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon_code.png",

        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon_code.png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
