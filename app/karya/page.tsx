import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { workCategories } from "@/data/mock";

export default function KaryaPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Karya"
          title="Ruang apresiasi karya siswa dan sekolah"
          description="Menu Karya dibuat sebagai nilai tambah penting supaya website terasa lebih hidup, lebih membanggakan, dan lebih shareable untuk siswa maupun wali murid."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {workCategories.map((category) => (
            <section key={category.id} className={`rounded-[30px] border border-sky-100 bg-gradient-to-br ${category.tone} p-6 shadow-sm`}>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-800">Kategori Karya</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{category.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.notes.map((note) => (
                  <span key={note} className="rounded-full border border-white/70 bg-white/75 px-3 py-1 text-xs font-medium text-slate-700">
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <div key={item.id} className="rounded-[22px] border border-white/70 bg-white/80 p-4 backdrop-blur-sm">
                    <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm font-medium text-slate-700">{item.creator}</div>
                    <div className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</div>
                    {category.title === "Video" ? (
                      <div className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-6 text-center text-sm text-slate-500">
                        Area embed YouTube untuk preview video karya.
                      </div>
                    ) : null}
                    {category.title === "Musik" ? (
                      <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-4 text-sm text-slate-500">
                        ▶︎ Mockup audio player karya musik siswa.
                      </div>
                    ) : null}
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
