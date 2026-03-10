import { Container } from "@/components/Container";

export default function ProfilPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Profil Sekolah</h1>
        <p className="mt-2 text-black/70">
          Placeholder demo: Visi misi, sejarah, struktur organisasi, fasilitas. Konten final diisi oleh PIC sekolah. 
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Visi</div>
            <p className="mt-2 text-sm text-black/70">Menjadi sekolah yang unggul, berkarakter, dan adaptif.</p>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">Misi</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/70">
              <li>Meningkatkan mutu pembelajaran.</li>
              <li>Membangun budaya disiplin dan literasi.</li>
              <li>Kolaborasi aktif dengan orang tua.</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}