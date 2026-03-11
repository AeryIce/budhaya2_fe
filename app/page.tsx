import Link from "next/link";
import { Container } from "@/components/Container";
import { LockedTeaserCard } from "@/components/LockedTeaserCard";
import { agendas, galleryAlbums, newsPosts, schoolProfile } from "@/data/mock";

export default function HomePage() {
  const latest = [...newsPosts].slice(0, 3);
  const nextAgenda = [...agendas].slice(0, 3);
  const galleryPreview = [...galleryAlbums].slice(0, 3);

  return (
    <Container>
      <section className="py-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[28px] border border-sky-200 bg-gradient-to-br from-sky-950 via-blue-900 to-sky-700 p-7 text-white shadow-[0_24px_80px_-40px_rgba(2,132,199,0.95)] md:p-10">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
              Demo Website Standar Sekolah
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{schoolProfile.fullName}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50 md:text-base">{schoolProfile.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">{schoolProfile.about}</p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Akreditasi {schoolProfile.accreditation}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">NPSN {schoolProfile.npsn}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">{schoolProfile.foundation}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(14,165,233,0.9)] transition hover:-translate-y-0.5 hover:bg-sky-400"
                href="/profil"
              >
                Lihat Profil Sekolah
              </Link>
              <Link
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="/berita"
              >
                Buka Berita Terbaru
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white p-3 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.7)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <img alt="Tampak depan SMA Budhaya 2 Santo Agustinus" className="h-full w-full object-cover" src={schoolProfile.heroImageUrl} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent p-5 text-white">
                <div className="text-xs uppercase tracking-[0.24em] text-blue-100">Nuansa kampus</div>
                <div className="mt-1 text-lg font-semibold">Radin Inten, Duren Sawit, Jakarta Timur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-sky-900">Identitas Sekolah</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              {schoolProfile.address}, {schoolProfile.city}, {schoolProfile.province} {schoolProfile.postalCode}
            </div>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-sky-900">Naungan Yayasan</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">{schoolProfile.foundation}</div>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-sky-900">Kontak Utama</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              {schoolProfile.phone}
              <br />
              {schoolProfile.email}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm md:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Tentang Demo</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Visual lebih hidup untuk kebutuhan presentasi</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Supaya user sekolah tidak melihat halaman kosong, mockup ini diisi kombinasi identitas sekolah yang nyata, nuansa warna biru,
              dan foto eksternal yang relevan. Hasilnya lebih mudah dibayangkan saat dibuka dari laptop maupun ponsel.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {schoolProfile.values.map((value) => (
                <span key={value} className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-800">
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {galleryPreview.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img alt={item.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" src={item.imageUrl} />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Berita</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Berita terbaru</h2>
          </div>
          <Link className="text-sm font-medium text-sky-800 underline decoration-sky-300 underline-offset-4" href="/berita">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/berita/${post.slug}`}
              className="group overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img alt={post.imageHint} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={post.imageUrl} />
              </div>
              <div className="p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-sky-700">
                  {post.category} • {post.date}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{post.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Agenda</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Agenda ringkas</h2>
          </div>
          <Link className="text-sm font-medium text-sky-800 underline decoration-sky-300 underline-offset-4" href="/agenda">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {nextAgenda.map((agenda) => (
            <div key={agenda.id} className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-sky-700">{agenda.date}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{agenda.title}</div>
              {agenda.location ? <div className="mt-2 text-sm font-medium text-slate-700">{agenda.location}</div> : null}
              {agenda.description ? <div className="mt-2 text-sm leading-7 text-slate-600">{agenda.description}</div> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="mb-4">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Roadmap</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Penawaran modul lanjutan (Add-On)</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Halaman ini menampilkan contoh pengembangan modul lanjutan yang dapat dipertimbangkan oleh pihak sekolah sesuai kebutuhan. Seluruh modul berikut bersifat opsional dan berada di luar cakupan paket Website Standar.
          </p>
        </div>

        <div className="mb-4 rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Klik kartu untuk melihat preview modul</div>
            <div className="mt-1 text-sm leading-7 text-slate-600">
              Setiap kartu menampilkan simulasi singkat agar pihak sekolah dapat membayangkan fungsi add-on secara lebih konkret saat demo.
            </div>
          </div>
          <div className="mt-3 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 md:mt-0">
            Chat preview tersedia di kanan bawah
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <LockedTeaserCard title="PPDB Online" phase="Tahap 2" desc="Pendaftaran, upload berkas, verifikasi, dan alur penerimaan yang lebih lengkap." />
          <LockedTeaserCard title="Notifikasi WA/Email" phase="Tahap 2/3" desc="Reminder agenda dan pengumuman resmi yang bisa dikirim lebih cepat." />
          <LockedTeaserCard title="Chatbot Tanya Sekolah" phase="Tahap 3" desc="Pusat tanya jawab cepat berbasis konten resmi sekolah." />
          <LockedTeaserCard title="Dashboard Statistik" phase="Tahap 3" desc="Analitik dasar untuk melihat halaman atau konten yang paling sering dibuka." />
        </div>
      </section>
    </Container>
  );
}
