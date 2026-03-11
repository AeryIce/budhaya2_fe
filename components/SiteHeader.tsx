"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { schoolProfile } from "@/data/mock";

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
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/90 bg-white/92 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex cursor-pointer items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-sky-50 ring-1 ring-sky-100">
              <img alt="Logo Budhaya" className="h-9 w-auto object-contain" src={schoolProfile.logoUrl} />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-slate-900">{schoolProfile.shortName}</div>
              <div className="text-xs text-slate-500">Demo Website Standar</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "cursor-pointer rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-sky-50 font-semibold text-sky-900 shadow-sm ring-1 ring-sky-100"
                      : "text-slate-600 hover:bg-sky-50 hover:text-sky-800",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/roadmap"
            className="cursor-pointer rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-white"
          >
            Add-On 🔒
          </Link>
        </div>
      </div>
    </header>
  );
}
