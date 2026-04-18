import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { SubmenuTabs } from "@/components/SubmenuTabs";
import { TeacherDirectory } from "@/components/TeacherDirectory";

export default function ProfilGuruPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Profil"
          title="Profil Guru"
          description="Sesuai hasil meeting, profil guru ditampilkan sebagai galeri kartu. Saat kartu dipilih, detail guru muncul dalam panel bergaya popup agar alurnya mudah dibayangkan pada tahap mockup."
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
      </div>
    </Container>
  );
}
