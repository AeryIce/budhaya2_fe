import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { SubmenuTabs } from "@/components/SubmenuTabs";
import { events } from "@/data/mock";

export default function EventPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Info Sekolah"
          title="Event"
          description="Halaman event dibuat untuk kegiatan yang lebih hidup: OSIS, ekstrakurikuler, festival, dan agenda siswa. Nuansanya lebih dinamis, tetapi tetap rapi."
        />
        <SubmenuTabs
          items={[
            { label: "Berita", href: "/info-sekolah/berita" },
            { label: "Event", href: "/info-sekolah/event", active: true },
          ]}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((post) => (
            <Link
              key={post.slug}
              href={`/info-sekolah/event/${post.slug}`}
              className="group overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img alt={post.imageHint} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={post.imageUrl} />
              </div>
              <div className="p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-sky-700">{post.type} • {post.date}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{post.title}</div>
                {post.location ? <div className="mt-2 text-sm font-medium text-slate-700">{post.location}</div> : null}
                <div className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
