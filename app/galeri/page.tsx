import { Container } from "@/components/Container";
import { galleryAlbums } from "@/data/mock";

export default function GaleriPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Galeri Kegiatan</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Dokumentasi visual sekolah</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Bagian ini sengaja diisi foto eksternal agar halaman demo tidak terasa kosong dan pihak sekolah bisa langsung melihat gambaran galeri kegiatan saat website dipresentasikan.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryAlbums.map((album) => (
            <div key={album.id} className="overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img alt={album.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" src={album.imageUrl} />
              </div>
              <div className="p-5">
                <div className="font-semibold text-slate-900">{album.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{album.description}</div>
                <div className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-sky-700">
                  {album.photoCount} foto • {album.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
