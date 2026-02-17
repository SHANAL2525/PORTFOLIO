import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";


export const metadata: Metadata = {
  title: "Shanal — Software Engineer Intern",
  description:
    "Portfolio of Shanal Thanushka Weerathunga — Software Engineer Intern (React, Vue, Java, SQL).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <BackgroundFX />
        <Particles/>
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
