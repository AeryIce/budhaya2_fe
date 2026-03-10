import { Container } from "@/components/Container";

const addons = [
  { title: "PPDB Online", phase: "Tahap 2", desc: "Pendaftaran, upload berkas, verifikasi, notifikasi." },
  { title: "Notifikasi WA/Email", phase: "Tahap 2/3", desc: "Reminder agenda & broadcast pengumuman." },
  { title: "Chatbot Tanya Sekolah", phase: "Tahap 3", desc: "FAQ sekolah dengan konten resmi." },
  { title: "Dashboard Statistik", phase: "Tahap 3", desc: "Analitik kunjungan & konten populer." },
];

export default function RoadmapPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Roadmap Modul Tambahan (Add-On)</h1>
        <div className="mt-2 rounded-xl border bg-white p-4 text-sm text-black/80">
          “Fitur pada halaman ini merupakan modul tambahan (di luar Website Standar) dan dihitung terpisah sesuai kebutuhan.”
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {addons.map((a) => (
            <div key={a.title} className="rounded-xl border bg-white p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="font-semibold">{a.title}</div>
                <span className="rounded-full border px-2 py-0.5 text-xs">ADD-ON {a.phase} 🔒</span>
              </div>
              <div className="mt-2 text-sm text-black/70">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}