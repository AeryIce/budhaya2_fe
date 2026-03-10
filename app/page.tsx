import Link from "next/link";
import { Container } from "@/components/Container";
import { LockedTeaserCard } from "@/components/LockedTeaserCard";
import { agendas, newsPosts } from "@/data/mock";

export default function HomePage() {
  const latest = [...newsPosts].slice(0, 3);
  const nextAgenda = [...agendas].slice(0, 3);

  return (
    <Container>
      <section className="py-10">
        <div className="rounded-2xl border bg-white p-6">
          <div className="text-xs text-black/60">Versi Demo • Website Standar Sekolah</div>
          <h1 className="mt-2 text-2xl font-semibold">SMA Budhaya 2</h1>
          <p className="mt-2 max-w-2xl text-black/70">
            Fokus demo: profil, berita/pengumuman, agenda, galeri, unduhan, kontak. Modul lanjutan ditandai Add-On.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Berita Terbaru</h2>
          <Link className="text-sm underline" href="/berita">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.slug} href={`/berita/${p.slug}`} className="rounded-xl border bg-white p-4 hover:border-black/40">
              <div className="text-xs text-black/60">
                {p.category} • {p.date}
              </div>
              <div className="mt-1 font-semibold">{p.title}</div>
              <div className="mt-1 text-sm text-black/70">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Agenda Ringkas</h2>
          <Link className="text-sm underline" href="/agenda">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {nextAgenda.map((a) => (
            <div key={a.id} className="rounded-xl border bg-white p-4">
              <div className="text-xs text-black/60">{a.date}</div>
              <div className="mt-1 font-semibold">{a.title}</div>
              {a.location ? <div className="mt-1 text-sm text-black/70">{a.location}</div> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <h2 className="mb-3 text-lg font-semibold">Teaser Modul Lanjutan (Add-On)</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <LockedTeaserCard title="PPDB Online" phase="Tahap 2" desc="Pendaftaran, upload berkas, verifikasi, notifikasi." />
          <LockedTeaserCard title="Notifikasi WA/Email" phase="Tahap 2/3" desc="Broadcast pengumuman & reminder otomatis." />
          <LockedTeaserCard title="Chatbot Tanya Sekolah" phase="Tahap 3" desc="FAQ sekolah dengan konten resmi." />
          <LockedTeaserCard title="Dashboard Statistik" phase="Tahap 3" desc="Analitik kunjungan & konten populer." />
        </div>
      </section>
    </Container>
  );
}