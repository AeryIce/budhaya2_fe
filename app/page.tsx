import Link from "next/link";
import { Container } from "@/components/Container";
import { SocialLinksRow } from "@/components/SocialLinksRow";
import { events, galleryCategories, newsPosts, principalGreeting, schoolProfile, workCategories } from "@/data/mock";

export default function HomePage() {
  const latestNews = newsPosts.slice(0, 2);
  const latestEvents = events.slice(0, 2);

  return (
    <Container>
      <section className="py-8 md:py-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative overflow-hidden rounded-[36px] border border-sky-200/70 bg-[linear-gradient(135deg,_#17436f_0%,_#24548f_52%,_#3576d1_100%)] p-7 text-white shadow-[0_30px_90px_-42px_rgba(2,132,199,0.42)] md:p-10">
            <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full bg-blue-200/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="inline-flex w-fit rounded-full border border-white/22 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] !text-white/95">
                Website Sekolah • Mockup FE Revisi + Foto Asli
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight !text-white md:text-6xl">
                {schoolProfile.fullName}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 !text-blue-50 md:text-lg">
                {schoolProfile.tagline}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-8 !text-white/82 md:text-base">
                {schoolProfile.about}
              </p>

             <div className="mt-8 grid gap-4 sm:grid-cols-3">
  <div className="rounded-[28px] border border-white/12 bg-white/10 px-5 py-6 backdrop-blur-sm">
    <div className="flex min-h-[150px] flex-col items-center justify-center text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] !text-white/65">Akreditasi</div>
      <div className="mt-5 text-5xl font-semibold leading-none tracking-tight !text-white">
        {schoolProfile.accreditation}
      </div>
    </div>
  </div>

  <div className="rounded-[28px] border border-white/12 bg-white/10 px-5 py-6 backdrop-blur-sm">
    <div className="flex min-h-[150px] flex-col items-center justify-center text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] !text-white/65">NPSN</div>
      <div className="mt-5 text-[1rem] font-semibold leading-none tracking-tight !text-white md:text-[2rem]">
  {schoolProfile.npsn}
</div>
    </div>
  </div>

  <div className="rounded-[28px] border border-white/12 bg-white/10 px-5 py-6 backdrop-blur-sm">
    <div className="flex min-h-[150px] flex-col items-center justify-center text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] !text-white/65">Naungan</div>
      <div className="mt-5 max-w-[11rem] text-xl font-semibold leading-9 !text-white">
        {schoolProfile.foundation}
      </div>
    </div>
  </div>
</div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-sky-950 shadow-[0_20px_45px_-28px_rgba(255,255,255,0.55)] transition hover:-translate-y-0.5"
                  href="/profil"
                >
                  Lihat Profil Sekolah
                </Link>

                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold !text-white transition hover:bg-white/10"
                  href="/info-sekolah"
                >
                  Buka Info Sekolah
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white/88 p-3 shadow-[0_26px_70px_-46px_rgba(15,23,42,0.38)] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[30px] bg-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt="Tampak depan SMA Budhaya 2 Santo Agustinus"
                  className="h-full w-full object-cover"
                  src={schoolProfile.heroImageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-flex rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                    Lingkungan Sekolah
                  </div>
                  <div className="mt-3 text-2xl font-semibold">Radin Inten, Duren Sawit</div>
                  <div className="mt-2 max-w-md text-sm leading-7 text-white/82">
                    Area visual ini mulai memakai foto asli sekolah agar mockup terasa lebih nyata saat dipresentasikan.
                  </div>
                </div>
              </div>

              <div className="px-8 py-9">
                <p className="mx-auto max-w-2xl text-center text-2xl italic leading-10 text-slate-700 md:text-[30px] md:leading-[3rem]">
                  “{schoolProfile.tagline}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.72fr]">
          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.32)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Identitas Sekolah</div>
            <div className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
              {schoolProfile.address}, {schoolProfile.city}, {schoolProfile.province} {schoolProfile.postalCode}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.32)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Kontak Utama</div>
            <div className="mt-4 space-y-2 text-sm leading-8 text-slate-600 md:text-base">
              <div>{schoolProfile.phone}</div>
              <div>{schoolProfile.email}</div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.32)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Sosial Media</div>
            <div className="mt-5">
              <SocialLinksRow />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/88 p-7 shadow-[0_26px_70px_-46px_rgba(15,23,42,0.38)] backdrop-blur-sm md:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Sambutan Kepala Sekolah</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Kesan resmi yang hangat dan langsung terasa hidup
            </h2>

            <div className="mt-5 grid gap-4">
              <p className="text-sm leading-8 text-slate-600 md:text-base">{principalGreeting.intro}</p>

              {principalGreeting.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-slate-600 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {principalGreeting.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-sm text-sky-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/80 bg-white/88 p-4 shadow-[0_26px_70px_-46px_rgba(15,23,42,0.38)] backdrop-blur-sm">
            <div className="grid h-full gap-4 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[250px] overflow-hidden rounded-[30px] bg-slate-100">
                  <img
                    alt={principalGreeting.name}
                    className="h-[470px] w-full object-cover object-center"
                    src={principalGreeting.photoUrl}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[28px] bg-gradient-to-br from-sky-50 to-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
Profil Kepala Sekolah
                </div>
                <div className="mt-2 text-2xl font-semibold leading-tight text-slate-900">{principalGreeting.name}</div>
                <div className="mt-1 text-sm text-slate-600">{principalGreeting.role}</div>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <p>
                    Section ini dibuat supaya walau teks sambutan nanti pendek, blok visualnya tetap terasa penuh,
                    resmi, dan tidak meninggalkan ruang kosong yang aneh.
                  </p>
                  <p>
                    Jadi ketika pihak sekolah hanya memberi 1–2 paragraf, layout tetap aman dan tetap kelihatan rapi.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-sky-100 bg-white/80 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Karakter</div>
                    <div className="mt-2 text-sm font-medium leading-6 text-slate-700">Hangat, resmi, informatif</div>
                  </div>
                  <div className="rounded-[22px] border border-sky-100 bg-white/80 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Fungsi</div>
                    <div className="mt-2 text-sm font-medium leading-6 text-slate-700">Wajah utama sekolah</div>
                  </div>
                </div>

                <Link
                  href="/profil"
                  className="mt-6 inline-flex w-fit rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold !text-sky-800 transition hover:bg-sky-50"
                >
                  Lanjut ke Profil Sekolah
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Info Sekolah</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Konten terbaru di beranda
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-8 text-slate-600">
              Sesuai brief terbaru, beranda menampilkan 2 berita dan 2 event terbaru agar halaman depan terasa aktif,
              relevan, dan tidak seperti website yang mati.
            </p>
          </div>

          <Link
            className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold !text-sky-800 transition hover:bg-sky-50"
            href="/info-sekolah"
          >
            Lihat semua
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[...latestNews, ...latestEvents].map((post) => {
            const base = post.type === "Berita" ? "/info-sekolah/berita" : "/info-sekolah/event";

            return (
              <Link
                key={post.slug}
                href={`${base}/${post.slug}`}
                className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/88 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-44px_rgba(15,23,42,0.45)]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={post.imageHint}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={post.imageUrl}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
                    {post.type} • {post.date}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{post.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="pb-10">
        <div className="mb-5">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Galeri</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Galeri dipecah menjadi tiga kategori
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-8 text-slate-600">
            Pendekatan ini bikin pengunjung langsung paham konteks isi galeri tanpa merasa sedang melihat tumpukan foto campur aduk.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {galleryCategories.map((category) => (
            <Link
              key={category.id}
              href="/galeri"
              className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/88 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-44px_rgba(15,23,42,0.45)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={category.coverImageUrl}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xl font-semibold text-slate-900">{category.title}</div>
                <div className="mt-2 text-sm leading-8 text-slate-600">{category.description}</div>
                <div className="mt-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-800">
                  Buka kategori →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="mb-5">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Karya</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Ruang apresiasi yang lebih hidup dan shareable
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-8 text-slate-600">
            Area ini bikin website sekolah terasa lebih bangga, lebih aktif, dan lebih punya nyawa.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {workCategories.map((category) => (
            <Link
              key={category.id}
              href="/karya"
              className={`rounded-[32px] border border-white/80 bg-gradient-to-br ${category.tone} p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-44px_rgba(15,23,42,0.45)]`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">Kategori Karya</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">{category.title}</div>
              <div className="mt-3 text-sm leading-8 text-slate-600">{category.description}</div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.notes.slice(0, 2).map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}