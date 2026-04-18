"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { schoolProfile } from "@/data/mock";

const nav = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Info Sekolah", href: "/info-sekolah" },
  { label: "Galeri", href: "/galeri" },
  { label: "Karya", href: "/karya" },
  { label: "Unduhan", href: "/unduhan" },
  { label: "Kontak", href: "/kontak" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl supports-[backdrop-filter]:bg-white/72">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-3xl px-1 py-1 transition hover:bg-sky-50/70"
          >
            <div className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_18px_40px_-28px_rgba(14,116,144,0.65)]">
              <img
                alt="Logo Budhaya 2"
                className="h-10 w-auto object-contain"
                src={schoolProfile.logoUrl}
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-semibold tracking-tight text-slate-900">
                {schoolProfile.shortName}
              </div>
              <div className="truncate text-xs text-slate-500">
                Mockup FE pasca meeting
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-sky-100/80 bg-white/95 p-1.5 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.35)] lg:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-full px-4 py-2.5 text-sm transition",
                    active
                      ? "bg-sky-900 !text-white font-semibold shadow-[0_18px_40px_-24px_rgba(12,74,110,0.65)]"
                      : "!text-slate-700 hover:bg-sky-50 hover:!text-sky-800",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white text-sky-900 shadow-[0_18px_40px_-28px_rgba(14,116,144,0.28)] transition hover:bg-sky-50 lg:hidden"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-none stroke-current stroke-[2.2]"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-none stroke-current stroke-[2.2]"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 rounded-[28px] border border-sky-100 bg-white p-3 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.28)] lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-sky-900 !text-white font-semibold shadow-[0_18px_40px_-24px_rgba(12,74,110,0.65)]"
                        : "bg-sky-50/70 !text-slate-700 hover:bg-sky-100 hover:!text-sky-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}