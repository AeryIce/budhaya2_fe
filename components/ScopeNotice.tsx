import Link from "next/link";

export function ScopeNotice() {
  return (
    <div className="border-t bg-white/60 py-3 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          Versi Demo <b>Website Standar Sekolah</b>. Modul lanjutan (PPDB/Chatbot/Notifikasi/Dashboard) tersedia sebagai{" "}
          <b>Add-On</b>.
        </div>
        <Link className="underline" href="/roadmap">
          Lihat Roadmap Add-On
        </Link>
      </div>
    </div>
  );
}