import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { profileData } from "@/data/profile";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#100e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itsmohamedwael.info"),
  title: {
    default: "MWAEL — Mohamed Abdelhamid | AI Software Engineer & Visual Designer",
    template: "%s | MWAEL",
  },
  description:
    "Official award-worthy interactive portfolio of Mohamed Abdelhamid (Mohamed Wael) — Computer Engineering scholar, AI Software Engineer (creator of Clowdy), and Digital Art Designer based in Cairo, Egypt.",
  keywords: [
    "Mohamed Abdelhamid",
    "Mohamed Wael",
    "MWAEL",
    "itsmohamedwael",
    "AI Software Engineer",
    "Creative Developer",
    "Computer Engineering",
    "British University in Egypt",
    "Clowdy Assistant",
    "Digital Art Design",
    "Cairo Egypt",
  ],
  authors: [{ name: "Mohamed Abdelhamid", url: "https://itsmohamedwael.info" }],
  creator: "Mohamed Abdelhamid (MWAEL)",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo/mw-logo-white.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsmohamedwael.info",
    title: "MWAEL — Mohamed Abdelhamid | AI Software Engineer & Visual Designer",
    description:
      "Award-worthy, ultra-minimal interactive portfolio combining computational AI engineering, embedded systems, and high-end visual art direction.",
    siteName: "MWAEL Portfolio",
    images: [
      {
        url: "/images/itsmohamedwael-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MWAEL Studio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MWAEL — Mohamed Abdelhamid | AI Software Engineer & Visual Designer",
    description:
      "Computational AI systems, embedded robotics, and luxury digital craftsmanship.",
    images: ["/images/itsmohamedwael-hero.jpg"],
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
  // Rich JSON-LD Structured Data (Person & WebSite)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://itsmohamedwael.info/#person",
        name: profileData.name,
        alternateName: [profileData.brandName, "Mohamed Wael", "itsmohamedwael"],
        jobTitle: profileData.title,
        url: profileData.website,
        email: profileData.email,
        telephone: profileData.phone,
        image: "https://itsmohamedwael.info/character/mohamed-portrait.jpg",
        sameAs: [
          profileData.socials.linkedin,
          profileData.socials.instagram,
          profileData.socials.github,
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "The British University In Egypt (BUE)",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "Egypt",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://itsmohamedwael.info/#website",
        url: "https://itsmohamedwael.info",
        name: "MWAEL — Interactive Portfolio",
        publisher: {
          "@id": "https://itsmohamedwael.info/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#100e0b] text-[#fbfaf8] font-sans selection:bg-emerald-400/20 selection:text-emerald-300">
        {/* Skip to Content Link (Accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-black focus:font-mono focus:text-xs"
        >
          Skip to main content
        </a>

        {/* Global Kinetic Scroll Indicator */}
        <ScrollProgress />

        {/* Main Floating Header */}
        <Header />

        {/* Page Stacking Content */}
        <main id="main-content" className="relative z-10 min-h-screen">
          {children}
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </body>
    </html>
  );
}
