import Link from "next/link";
import { Container } from "@/components/Container";
import { newsPosts } from "@/data/mock";

export default function BeritaPage() {
  const posts = [...newsPosts];

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Berita / Pengumuman</h1>
        <p className="mt-2 text-black/70">
          Listing + detail page, kategori minimal Berita & Pengumuman. 
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/berita/${p.slug}`} className="rounded-xl border bg-white p-4 hover:border-black/40">
              <div className="text-xs text-black/60">
                {p.category} • {p.date}
              </div>
              <div className="mt-1 font-semibold">{p.title}</div>
              <div className="mt-1 text-sm text-black/70">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}