import { Container } from "@/components/Container";
import { schoolProfile } from "@/data/mock";

export default function ProfilPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-sky-50">
                <img alt="Logo Budhaya" className="h-14 w-auto object-contain" src={schoolProfile.logoUrl} />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Profil Sekolah</div>
                <h1 className="mt-1 text-2xl font-semibold text-slate-900">{schoolProfile.fullName}</h1>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">{schoolProfile.about}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-4">
                <div className="text-sm font-semibold text-sky-900">Akreditasi</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">{schoolProfile.accreditation}</div>
              </div>
              <div className="rounded-2xl bg-sky-50 p-4">
                <div className="text-sm font-semibold text-sky-900">Naungan</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{schoolProfile.foundation}</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white p-3 shadow-sm">
            <div className="aspect-[16/10] overflow-hidden rounded-[22px]">
              <img alt="Lingkungan sekolah Budhaya Santo Agustinus" className="h-full w-full object-cover" src={schoolProfile.heroImageUrl} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm lg:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Identitas</div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Alamat:</span> {schoolProfile.address}, {schoolProfile.city}
              </p>
              <p>
                <span className="font-semibold text-slate-900">NPSN:</span> {schoolProfile.npsn}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {schoolProfile.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Telepon:</span> {schoolProfile.phone}
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Visi</div>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{schoolProfile.vision}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Misi</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              {schoolProfile.missions.map((mission) => (
                <li key={mission} className="rounded-2xl bg-sky-50 px-4 py-3">
                  {mission}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Fasilitas & Nilai</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {schoolProfile.facilities.map((facility) => (
                <div key={facility} className="rounded-2xl bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-700">
                  {facility}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {schoolProfile.values.map((value) => (
                <span key={value} className="rounded-full border border-sky-200 px-3 py-1 text-sm text-sky-800">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
