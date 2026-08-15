import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jcrea-portfolio.example.com"),
  title: {
    default: "Jenny — Product Designer Portfolio",
    template: "%s | Jenny Design",
  },
  description:
    "Jenny's exceptional product design ensures website success. Specializing in UI/UX design, web design, and high-converting landing pages.",
  keywords: [
    "Jenny",
    "Product Designer",
    "UI UX Design",
    "Web Design",
    "Portfolio",
    "Landing Page Design",
    "JCREA",
  ],
  authors: [{ name: "Jenny", url: "https://jcrea-portfolio.example.com" }],
  creator: "Jenny",
  publisher: "JCREA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jenny — Product Designer Portfolio",
    description:
      "Jenny's exceptional product design ensures website success. Specializing in UI/UX design, web design, and high-converting landing pages.",
    url: "https://jcrea-portfolio.example.com",
    siteName: "Jenny Product Designer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero-person.png",
        width: 520,
        height: 380,
        alt: "Jenny Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenny — Product Designer Portfolio",
    description:
      "Jenny's exceptional product design ensures website success.",
    images: ["/hero-person.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jcrea-portfolio.example.com/#person",
      name: "Jenny",
      jobTitle: "Product Designer",
      description:
        "Jenny's exceptional product design ensures website success.",
      knowsAbout: [
        "UI/UX Design",
        "Web Design",
        "Product Design",
        "Landing Page Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jcrea-portfolio.example.com/#website",
      url: "https://jcrea-portfolio.example.com",
      name: "Jenny — Product Designer Portfolio",
      publisher: {
        "@id": "https://jcrea-portfolio.example.com/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-text-dark flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-accent-orange focus:text-white focus:font-bold focus:rounded-full focus:shadow-2xl focus:outline-hidden"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}


