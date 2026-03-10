"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil Sekolah" },
  { href: "/berita", label: "Berita / Pengumuman" },
  { href: "/agenda", label: "Agenda / Kalender" },
  { href: "/galeri", label: "Galeri" },
  { href: "/unduhan", label: "Unduhan" },
  { href: "/kontak", label: "Kontak" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="font-semibold tracking-tight">
            SMA Budhaya 2
          </Link>

          <nav className="hidden gap-4 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm hover:underline",
                  isActive(pathname, item.href) ? "font-semibold" : "text-black/70",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/roadmap" className="rounded-full border px-3 py-1 text-xs">
            Add-On 🔒
          </Link>
        </div>
      </Container>
    </header>
  );
}