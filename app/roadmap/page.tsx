import { Container } from "@/components/Container";
import { LockedTeaserCard } from "@/components/LockedTeaserCard";

const addons = [
  { title: "PPDB Online", phase: "Tahap 2", desc: "Pendaftaran, upload berkas, verifikasi, dan notifikasi calon peserta didik." },
  { title: "Notifikasi WA/Email", phase: "Tahap 2/3", desc: "Reminder agenda sekolah dan broadcast pengumuman resmi." },
  { title: "Chatbot Tanya Sekolah", phase: "Tahap 3", desc: "Pusat FAQ sekolah berbasis konten resmi yang lebih interaktif." },
  { title: "Dashboard Statistik", phase: "Tahap 3", desc: "Analitik kunjungan, konten populer, dan data performa halaman." },
];

export default function RoadmapPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="rounded-[28px] border border-sky-200 bg-gradient-to-r from-sky-950 via-blue-900 to-sky-700 p-6 text-white shadow-[0_24px_80px_-48px_rgba(2,132,199,0.8)] md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Roadmap Add-On</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Modul tambahan di luar website standar</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
            Fitur pada halaman ini merupakan modul tambahan dan dihitung terpisah sesuai kebutuhan sekolah. Bagian ini sengaja dipisahkan agar ekspektasi user tetap aman saat demo.
          </p>
        </div>

        <div className="mt-6 rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Preview dibuat agar penawaran terasa lebih konkret</div>
            <div className="mt-1 text-sm leading-7 text-slate-600">
              Klik setiap kartu untuk melihat simulasi tampilan, manfaat, dan arah pengembangan modul tambahan yang dapat dipertimbangkan oleh pihak sekolah.
            </div>
          </div>
          <div className="mt-3 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 md:mt-0">
            Floating chat preview aktif
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {addons.map((addon) => (
            <LockedTeaserCard key={addon.title} title={addon.title} phase={addon.phase} desc={addon.desc} />
          ))}
        </div>
      </div>
    </Container>
  );
}
