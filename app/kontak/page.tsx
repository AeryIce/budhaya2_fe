import { Container } from "@/components/Container";

export default function KontakPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Kontak</h1>
        <p className="mt-2 text-black/70">Alamat, link maps, WA/email sekolah. </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Alamat</div>
            <p className="mt-2 text-sm text-black/70">[Placeholder] Alamat sekolah, kota, provinsi.</p>
            <div className="mt-3 text-sm underline">Link Google Maps (demo)</div>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Kontak</div>
            <div className="mt-2 text-sm text-black/70">WA: [placeholder]</div>
            <div className="mt-1 text-sm text-black/70">Email: [placeholder]</div>
          </div>
        </div>
      </div>
    </Container>
  );
}