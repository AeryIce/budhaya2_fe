import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { downloads } from "@/data/mock";

export default function UnduhanPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Unduhan"
          title="Pusat unduhan resmi sekolah"
          description="Halaman ini tetap penting agar dokumen seperti kalender akademik, tata tertib, atau panduan kegiatan mudah dicari kembali oleh publik."
        />

        <div className="mt-8 grid gap-4">
          {downloads.map((item) => (
            <div key={item.id} className="rounded-[26px] border border-sky-100 bg-white p-5 shadow-sm md:flex md:items-center md:justify-between md:gap-4">
              <div>
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{item.description}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Update {item.updatedAt}</div>
              </div>
              <div className="mt-4 flex shrink-0 items-center gap-3 md:mt-0">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800">{item.fileType}</span>
                <button type="button" className="rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white">
                  Unduh
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
