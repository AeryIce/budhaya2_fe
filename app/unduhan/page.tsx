import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { downloads } from "@/data/mock";

export default function UnduhanPage() {
  const calendar = downloads[0];

  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Unduhan"
          title="Pusat unduhan resmi sekolah"
          description="Dokumen penting seperti kalender pendidikan bisa mulai dimockup dari FE sebagai preview visual + tombol unduh, sambil menunggu integrasi backend dan upload file final oleh tim sekolah."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="overflow-hidden rounded-[32px] border border-sky-100 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-[24px] border border-sky-100 bg-slate-50">
              <img
                alt={calendar.title}
                className="h-full w-full object-cover"
                src={calendar.previewImageUrl}
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-sky-100 bg-white p-6 shadow-sm md:p-7">
            <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800">
              {calendar.fileType}
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{calendar.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{calendar.description}</p>
            <div className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Update {calendar.updatedAt}</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={calendar.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-50"
              >
                Preview Kalender ↗
              </a>
              <a
                href={calendar.fileUrl}
                download
                className="inline-flex items-center justify-center rounded-full bg-sky-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Unduh Kalender
              </a>
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-sky-200 bg-sky-50/70 p-5 text-sm leading-7 text-slate-600">
              Mockup ini sementara menampilkan kalender pendidikan sebagai file gambar agar tim sekolah bisa melihat alur preview dan unduh dokumen di FE tanpa menunggu backend selesai.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
