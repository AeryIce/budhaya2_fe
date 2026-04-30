import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { galleryCategories } from "@/data/mock";

export default function GaleriPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Galeri"
          title="Galeri dibagi menjadi tiga bagian"

          description="Sesuai brief terbaru, galeri dipecah menjadi Galeri Event, Galeri Ekstrakurikuler, dan Galeri Fasilitas. Pada revisi ini, sebagian foto asli sekolah sudah mulai dipakai sebagai base visual agar mockup terasa lebih nyata."

        />

        <div className="mt-6 rounded-[28px] border border-sky-100 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Mockup pencarian galeri</div>
            <div className="mt-1 text-sm leading-7 text-slate-600">Nanti di backend, galeri idealnya bisa dicari berdasarkan nama event atau judul berita terkait.</div>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 md:mt-0 md:min-w-[300px]">
            Cari nama event / judul berita...
          </div>
        </div>

        <div className="mt-8 space-y-10">
          {galleryCategories.map((category) => (
            <section key={category.id}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Kategori Galeri</div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{category.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {category.photos.map((photo) => (
                  <div key={photo.id} className="overflow-hidden rounded-[26px] border border-sky-100 bg-white shadow-sm">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img alt={photo.caption} className="h-full w-full object-cover" src={photo.imageUrl} />
                    </div>
                    <div className="p-5">
                      <div className="text-sm font-semibold text-slate-900">Caption Foto</div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">{photo.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
