import { Container } from "@/components/Container";
import { galleryAlbums } from "@/data/mock";

export default function GaleriPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Galeri Kegiatan</h1>
        <p className="mt-2 text-black/70">Album / dokumentasi foto (placeholder demo). </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {galleryAlbums.map((g) => (
            <div key={g.id} className="rounded-xl border bg-white p-4">
              <div className="mb-3 flex aspect-[16/9] items-center justify-center rounded-lg bg-neutral-100 text-xs text-black/60">
                {g.coverLabel}
              </div>
              <div className="font-semibold">{g.title}</div>
              <div className="mt-1 text-sm text-black/70">
                {g.photoCount} foto • {g.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}