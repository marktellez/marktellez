import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata = {
  title: "Mark Tellez | AI Engineer & 10x Developer",
  description: "AI Engineer and ML specialist with 25+ years of coding experience. Expert in functional programming, building ML pipelines, and AI voice technology at VoxBird. Previously mentored 3000+ developers.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Voice Technology",
    "Functional Programming",
    "LISP",
    "JavaScript",
    "Python",
    "10x Developer",
    "VoxBird AI",
    "ML Pipelines",
    "System Architecture",
    "Software Development",
    "Technical Mentoring"
  ],
  authors: [{ name: "Mark Tellez" }],
  creator: "Mark Tellez",
  publisher: "Mark Tellez",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marktellez.com",
    siteName: "Mark Tellez",
    title: "Mark Tellez | AI Engineer & 10x Developer",
    description: "AI Engineer and ML specialist with 25+ years of coding experience. Expert in functional programming, building ML pipelines, and AI voice technology at VoxBird.",
    images: [
      {
        url: "/marktellez.jpg",
        width: 800,
        height: 800,
        alt: "Mark Tellez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Tellez | AI Engineer & 10x Developer",
    description: "AI Engineer and ML specialist with 25+ years of coding experience. Building advanced voice AI at VoxBird.",
    images: ["/marktellez.jpg"],
    creator: "@agenticmark",
  },
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
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://marktellez.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-sky-500 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
