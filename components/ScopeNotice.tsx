import Link from "next/link";

export function ScopeNotice() {
  return (
    <div className="border-t border-sky-100 bg-white/85 py-4 text-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          Ini adalah <b className="text-slate-900">mockup FE pasca meeting</b>. Fokus utamanya adalah struktur publik website sekolah. Add-On tetap dipisahkan agar scope paket standar tetap jelas.
        </div>
        <Link className="font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4" href="/roadmap">
          Lihat Roadmap Add-On
        </Link>
      </div>
    </div>
  );
}
