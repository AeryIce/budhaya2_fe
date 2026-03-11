import { Container } from "@/components/Container";
import { agendas } from "@/data/mock";

export default function AgendaPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Agenda Sekolah</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Kalender kegiatan yang rapi dan mudah dibaca</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Untuk tahap demo, agenda dibuat simpel namun tetap terasa resmi sehingga pihak sekolah bisa langsung membayangkan fungsi halaman kalender pada website final.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {agendas.map((agenda) => (
            <div key={agenda.id} className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm md:p-6">
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-900">{agenda.date}</div>
                <div>
                  <div className="text-xl font-semibold text-slate-900">{agenda.title}</div>
                  {agenda.location ? <div className="mt-2 text-sm font-medium text-slate-700">Lokasi: {agenda.location}</div> : null}
                  {agenda.description ? <p className="mt-2 text-sm leading-7 text-slate-600">{agenda.description}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
