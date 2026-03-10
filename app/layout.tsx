import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { ScopeNotice } from "@/components/ScopeNotice";

export const metadata: Metadata = {
  title: "SMA Budhaya 2 — Demo Website Standar",
  description: "Demo Website Standar Sekolah: profil, berita, agenda, galeri, unduhan, kontak.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-dvh bg-neutral-50 text-black">
        <SiteHeader />
        <main>{children}</main>
        <ScopeNotice />
      </body>
    </html>
  );
}