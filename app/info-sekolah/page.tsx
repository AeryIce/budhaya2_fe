import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { PageIntro } from "@/components/PageIntro";
import { SubmenuTabs } from "@/components/SubmenuTabs";
import { events, newsPosts } from "@/data/mock";

export default function InfoSekolahPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Info Sekolah"
          title="Pemisahan Berita dan Event"
          description="Kategori ini dipisah agar website terasa lebih terstruktur: berita untuk informasi resmi dan institusional, event untuk kegiatan yang lebih hidup dan dokumentatif."
        />
        <SubmenuTabs
          items={[
            { label: "Berita", href: "/info-sekolah/berita" },
            { label: "Event", href: "/info-sekolah/event" },
          ]}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard
            eyebrow="Resmi & Institusional"
            title="Berita"
            description={`Saat ini ada ${newsPosts.length} contoh berita mockup. Format ini cocok untuk kebijakan, penguatan akademik, informasi resmi, dan narasi sekolah yang lebih formal.`}
            href="/info-sekolah/berita"
          />
          <InfoCard
            eyebrow="Hidup & Dokumentatif"
            title="Event"
            description={`Saat ini ada ${events.length} contoh event mockup. Format ini cocok untuk kegiatan siswa, OSIS, ekstrakurikuler, dan aktivitas sekolah yang lebih dinamis.`}
            href="/info-sekolah/event"
          />
        </div>

        <div className="mt-6 rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm md:p-7">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Arah Visual</div>
          <div className="mt-3 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
            Struktur ini sengaja dibuat simpel: navbar atas hanya membawa pengunjung ke halaman besar, lalu pemilahan detail dilakukan di dalam halaman. Hasilnya terasa lebih modern, lebih rapi, dan tidak seperti web bertingkat yang kuno.
          </div>
        </div>
      </div>
    </Container>
  );
}