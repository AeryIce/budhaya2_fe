import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { events } from "@/data/mock";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((post) => ({ slug: post.slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = events.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="py-10">
        <div className="max-w-4xl">
          <Link href="/info-sekolah/event" className="text-sm font-medium text-sky-800 underline decoration-sky-300 underline-offset-4">
            ← Kembali ke event
          </Link>
          <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{post.type}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{post.excerpt}</p>
          <div className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{post.date}{post.location ? ` • ${post.location}` : ""}</div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-sky-100 bg-white p-3 shadow-sm">
          <div className="aspect-[16/8] overflow-hidden rounded-[22px]">
            <img alt={post.imageHint} className="h-full w-full object-cover" src={post.imageUrl} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Cerita Event</div>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Arah lanjut untuk backend</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                Event idealnya bisa dihubungkan dengan galeri, caption foto, dan aturan masa tayang supaya konten publik lebih rapi dikelola.
              </div>
            </div>

            <div className="rounded-[28px] border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Catatan mockup</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                Kategori event sengaja dibuat lebih hangat dan hidup agar publik bisa merasakan aktivitas sekolah, bukan hanya membaca pengumuman resmi.
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Container>
  );
}
