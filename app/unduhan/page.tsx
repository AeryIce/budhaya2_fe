import { Container } from "@/components/Container";
import { downloads } from "@/data/mock";

export default function UnduhanPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Download Center</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Unduhan dokumen sekolah</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Contoh tampilan pusat unduhan untuk kalender akademik, tata tertib, formulir, atau file resmi lain yang nantinya dapat diunggah langsung oleh PIC sekolah.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {downloads.map((download) => (
            <div
              key={download.id}
              className="flex flex-col gap-4 rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sm font-semibold text-sky-800">
                  PDF
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">{download.title}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-600">{download.description}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-sky-700">
                    {download.fileType} • updated {download.updatedAt}
                  </div>
                </div>
              </div>

              <button className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-sky-800" type="button">
                Download (demo)
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
