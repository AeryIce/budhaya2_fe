import { Container } from "@/components/Container";
import { downloads } from "@/data/mock";

export default function UnduhanPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Unduhan (Download Center)</h1>
        <p className="mt-2 text-black/70">PDF: kalender akademik, formulir, tata tertib.</p>

        <div className="mt-6 space-y-3">
          {downloads.map((d) => (
            <div key={d.id} className="flex flex-col gap-2 rounded-xl border bg-white p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{d.title}</div>
                <div className="text-sm text-black/70">{d.description}</div>
                <div className="mt-1 text-xs text-black/60">
                  {d.fileType} • updated {d.updatedAt}
                </div>
              </div>
              <button className="rounded-lg border px-3 py-1 text-sm md:self-start" type="button">
                Download (demo)
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}