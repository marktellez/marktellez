import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata = {
  title: "Mark Tellez - Software Engineer & AI Enthusiast",
  description: "Professional software engineer specializing in AI and web development. Ranked 8th globally in Fantastic Bits AI Programming Contest.",
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
