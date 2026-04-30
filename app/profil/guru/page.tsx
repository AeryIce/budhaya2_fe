import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { SubmenuTabs } from "@/components/SubmenuTabs";
import { StaffDirectory } from "@/components/StaffDirectory";
import { TeacherDirectory } from "@/components/TeacherDirectory";

export default function ProfilGuruPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Profil"
          title="Profil Guru & Karyawan"
          description="Sesuai hasil meeting, profil guru ditampilkan sebagai galeri kartu dan karyawan ditempatkan pada section terpisah di bawahnya. Saat kartu dipilih, detail profil muncul dalam panel bergaya popup agar alurnya mudah dibayangkan pada tahap mockup."
        />
        <SubmenuTabs
          items={[
            { label: "Profil Sekolah", href: "/profil" },
            { label: "Profil Guru", href: "/profil/guru", active: true },
          ]}
        />

        <div className="mt-8">
          <TeacherDirectory />
        </div>

        <section className="mt-12">
          <div className="mb-5">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Profil Karyawan</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Karyawan sekolah juga mendapat ruang profil</h2>
            <p className="mt-2 max-w-3xl text-sm leading-8 text-slate-600">Sesuai arah diskusi, profil karyawan diletakkan terpisah di bawah guru agar lebih rapi, tetap adil, dan mudah dikembangkan saat data tugas atau bidang layanan sudah dikonfirmasi lebih lengkap.</p>
          </div>
          <StaffDirectory />
        </section>
      </div>
    </Container>
  );
}
