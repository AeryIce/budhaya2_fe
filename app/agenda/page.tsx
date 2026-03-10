import { Container } from "@/components/Container";
import { agendas } from "@/data/mock";

export default function AgendaPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Agenda / Kalender</h1>
        <p className="mt-2 text-black/70">Minimal daftar agenda. </p>

        <div className="mt-6 space-y-3">
          {agendas.map((a) => (
            <div key={a.id} className="rounded-xl border bg-white p-4">
              <div className="text-xs text-black/60">{a.date}</div>
              <div className="mt-1 font-semibold">{a.title}</div>
              {a.location ? <div className="mt-1 text-sm text-black/70">{a.location}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}