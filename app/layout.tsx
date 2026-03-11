import type { Metadata } from "next";
import "./globals.css";
import { AddonFloatingChat } from "@/components/AddonFloatingChat";
import { ScopeNotice } from "@/components/ScopeNotice";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "SMA Budhaya 2 Santo Agustinus — Demo Website Standar",
  description: "Mockup demo website standar sekolah dengan profil, berita, agenda, galeri, unduhan, dan kontak.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.35),_transparent_36%),linear-gradient(180deg,_#f8fbff_0%,_#f2f7ff_100%)] text-slate-900">
        <SiteHeader />
        <main>{children}</main>
        <ScopeNotice />
        <AddonFloatingChat />
      </body>
    </html>
  );
}
