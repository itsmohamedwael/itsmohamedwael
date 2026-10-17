import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NoiseOverlay } from "../components/visual/NoiseOverlay";
import { profileData } from "../data/profile";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsmohamedwael.info"),
  title: {
    default: "MWAEL — Mohamed Abdelhamid | AI Systems Architect & Visual Designer",
    template: "%s | MWAEL",
  },
  description:
    "Official portfolio monograph of Mohamed Abdelhamid (Mohamed Wael). Computer Engineering scholar at The British University in Egypt (3.8 GPA Honors), creator of Clowdy desktop AI, and architect of offline enterprise systems.",
  keywords: [
    "Mohamed Abdelhamid",
    "Mohamed Wael",
    "MWAEL",
    "Clowdy AI",
    "The British University in Egypt",
    "Computer Engineering",
    "AI Software Engineer",
    "Desktop AI Companion",
    "Offline-First Systems",
    "Creative Developer",
  ],
  authors: [{ name: "Mohamed Abdelhamid (Mohamed Wael)", url: "https://www.itsmohamedwael.info" }],
  creator: "Mohamed Abdelhamid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.itsmohamedwael.info",
    title: "MWAEL — Mohamed Abdelhamid | AI Systems Architect",
    description:
      "Official portfolio monograph of Mohamed Abdelhamid (Mohamed Wael). Creator of Clowdy desktop AI companion, BUE Computer Engineering 3.8 GPA honors.",
    siteName: "MWAEL Portfolio Monograph",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MWAEL — Mohamed Abdelhamid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MWAEL — Mohamed Abdelhamid",
    description:
      "AI Systems Architect & Visual Designer. BUE Computer Engineering 3.8 GPA honors, creator of Clowdy.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo/mw-logo-white.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.alias,
    jobTitle: profileData.title,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.academic.institution,
    },
    url: "https://www.itsmohamedwael.info",
    sameAs: [
      profileData.socials.linkedin,
      profileData.socials.instagram,
      profileData.socials.github,
    ],
    knowsAbout: [
      "Multimodal Artificial Intelligence",
      "Computer Vision",
      "Desktop System Automation",
      "Distributed Offline POS Networks",
      "Computer Engineering",
      "Creative Motion Design",
    ],
  };

  return (
    <html lang="en" className="dark bg-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
