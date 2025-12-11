import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Gowtham Ravi – Senior Full Stack Developer | Portfolio, Projects & Experience",
  description:
    "Explore the portfolio of Gowtham Ravi, a Senior Full Stack Developer specializing in scalable web applications, cloud architecture, AI-driven solutions, and user-focused product engineering. View case studies, skills, work experience, and live projects.",
  keywords: [
    "Gowtham Ravi",
    "Full Stack Developer",
    "Senior Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
    "Software Architect",
    "AI Developer",
  ],
  openGraph: {
    title: "Gowtham Ravi – Senior Full Stack Developer",
    description:
      "Portfolio of Gowtham Ravi — Full Stack Developer with expertise in scalable applications, modern UI engineering, backend architecture, and AI-enhanced development.",
    url: "https://gowtham.dev", // <-- update this with your final domain
    type: "website",
    locale: "en_US",
    siteName: "Gowtham Ravi Portfolio",
    images: [
      {
        url: "https://gowtham.dev/preview.png", // <-- update if needed
        width: 1200,
        height: 630,
        alt: "Preview image of Gowtham Ravi website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowtham Ravi – Senior Full Stack Developer",
    description:
      "Full Stack Developer building high-performance applications using React, Next.js, TypeScript, Node.js and cloud-based tech.",
    creator: "@gowthamravi", // optional if you have Twitter
    images: ["https://gowtham.dev/preview.png"], // <-- update
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-JetBrains",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jetBrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
