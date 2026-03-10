import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { newsPosts } from "@/data/mock";

export default function BeritaDetailPage({ params }: { params: { slug: string } }) {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <Container>
      <div className="py-10">
        <Link className="text-sm underline" href="/berita">
          ← Kembali
        </Link>

        <div className="mt-4 text-xs text-black/60">
          {post.category} • {post.date}
        </div>
        <h1 className="mt-2 text-2xl font-semibold">{post.title}</h1>

        <div className="mt-6 space-y-3 rounded-xl border bg-white p-5 text-black/80">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}