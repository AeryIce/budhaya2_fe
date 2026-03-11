import Link from "next/link";
import { Container } from "@/components/Container";
import { newsPosts } from "@/data/mock";

export default function BeritaPage() {
  const posts = [...newsPosts];

  return (
    <Container>
      <div className="py-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Berita & Pengumuman</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Informasi terbaru sekolah</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Halaman ini dibuat lebih visual agar user langsung membayangkan bagaimana berita, pengumuman, dan dokumentasi sekolah akan tampil pada versi final.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/berita/${post.slug}`}
              className="group overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
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
      </div>
    </Container>
  );
}
