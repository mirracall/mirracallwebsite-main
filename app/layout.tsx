import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mirracall.example"), // Replace with production domain before launch.
  title: "Mirra Call | Smarter Mirror for Self-Care",
  description: "Mirra Call is a smart self-care and coaching mirror using computer vision and real-time movement feedback to create a more interactive experience.",
  alternates: { canonical: "/" },
  openGraph: { title: "Mirra Call | Smarter Mirror for Self-Care", description: "A mirror that understands movement and responds with guidance in real time.", type: "website", images: [{ url: "/og.png", width: 1792, height: 910, alt: "Mirra Call smarter mirror for self-care" }] },
  twitter: { card: "summary_large_image", title: "Mirra Call | Smarter Mirror for Self-Care", description: "A mirror that understands movement and responds with guidance in real time.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
