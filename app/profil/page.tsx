import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { SubmenuTabs } from "@/components/SubmenuTabs";
import { extracurricularMandatory, extracurricularOptions, schoolProfile } from "@/data/mock";

export default function ProfilPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Profil"
          title="Profil Sekolah"
          description="Konten profil mulai disesuaikan dengan materi resmi sekolah agar mockup terasa lebih nyata, lebih formal, dan semakin siap dipakai sebagai acuan finalisasi website."
        />
        <SubmenuTabs
          items={[
            { label: "Profil Sekolah", href: "/profil", active: true },
            { label: "Profil Guru", href: "/profil/guru" },
          ]}
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-18 w-18 items-center justify-center overflow-hidden rounded-[24px] border border-sky-100 bg-sky-50 shadow-[0_18px_40px_-28px_rgba(14,116,144,0.45)]">
                <img alt="Logo Budhaya" className="h-14 w-auto object-contain" src={schoolProfile.logoUrl} />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Identitas Sekolah</div>
                <h1 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">{schoolProfile.fullName}</h1>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">{schoolProfile.about}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] bg-gradient-to-br from-sky-50 to-white p-5">
                <div className="text-sm font-semibold text-sky-900">Akreditasi</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">{schoolProfile.accreditation}</div>
              </div>
              <div className="rounded-[24px] bg-gradient-to-br from-sky-50 to-white p-5">
                <div className="text-sm font-semibold text-sky-900">Status Sekolah</div>
                <div className="mt-2 text-base font-semibold leading-7 text-slate-900">{schoolProfile.status}</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/80 bg-white/88 p-3 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
              <img alt="Lingkungan sekolah Budhaya Santo Agustinus" className="h-full w-full object-cover" src={schoolProfile.heroImageUrl} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Visual Kampus Sekolah</div>
                <div className="mt-2 text-lg font-semibold">Area foto utama profil sekolah</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Identitas</div>
            <div className="mt-4 space-y-3 text-sm leading-8 text-slate-600">
              <p><span className="font-semibold text-slate-900">Alamat:</span> {schoolProfile.address}, {schoolProfile.city}</p>
              <p><span className="font-semibold text-slate-900">NPSN:</span> {schoolProfile.npsn}</p>
              <p><span className="font-semibold text-slate-900">Jenjang:</span> {schoolProfile.level}</p>
              <p><span className="font-semibold text-slate-900">Kepala Sekolah:</span> {schoolProfile.principalName}</p>
              <p><span className="font-semibold text-slate-900">Yayasan:</span> {schoolProfile.foundation}</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Visi</div>
            <p className="mt-4 text-base italic leading-8 text-slate-700">“{schoolProfile.vision}”</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {schoolProfile.values.map((value) => (
                <span key={value} className="rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-sm text-sky-800">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Misi Sekolah</div>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
              {schoolProfile.missions.map((mission, index) => (
                <li key={mission} className="rounded-[24px] bg-gradient-to-r from-sky-50 to-white px-4 py-4">
                  <span className="mr-2 font-semibold text-sky-800">{index + 1}.</span>
                  {mission}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Fasilitas Sekolah</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {schoolProfile.facilities.map((facility) => (
                <div key={facility} className="rounded-[22px] bg-gradient-to-r from-sky-50 to-white px-4 py-4 text-sm leading-7 text-slate-700">
                  {facility}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Ekstrakurikuler Pilihan</div>
            <div className="mt-4 grid gap-3">
              {extracurricularOptions.map((item) => (
                <div key={item.id} className="rounded-[22px] border border-sky-100 bg-white/90 px-4 py-4">
                  <div className="text-base font-semibold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-600">Pendamping: {item.mentor}</div>
                  <div className="text-sm leading-7 text-sky-800">Jadwal: {item.schedule}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Ekstrakurikuler Wajib</div>
            <div className="mt-4 grid gap-3">
              {extracurricularMandatory.map((item) => (
                <div key={item.id} className="rounded-[22px] border border-sky-100 bg-white/90 px-4 py-4">
                  <div className="text-base font-semibold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-600">Pendamping: {item.mentor}</div>
                  <div className="text-sm leading-7 text-sky-800">Jadwal: {item.schedule}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
