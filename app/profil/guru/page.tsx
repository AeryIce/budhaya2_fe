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
          title="Profil Guru & Karyawan"
          description="Halaman ini menampilkan guru terlebih dahulu, lalu karyawan sekolah di bagian bawah dengan jeda section yang jelas. Foto masih memakai placeholder sementara agar tim sekolah dapat mengganti foto resmi secara bertahap."
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