import Link from "next/link";

export function ScopeNotice() {
  return (
    <div className="border-t border-sky-100 bg-white/80 py-4 text-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          Versi Demo <b className="text-slate-900">Website Standar Sekolah</b>. Modul lanjutan seperti PPDB, chatbot, notifikasi, dan dashboard tersedia sebagai <b className="text-slate-900">Add-On</b>, termasuk preview simulasi agar kebutuhan sekolah lebih mudah dibayangkan.
        </div>
        <Link className="font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4" href="/roadmap">
          Lihat Roadmap Add-On
        </Link>
      </div>
    </div>
  );
}
