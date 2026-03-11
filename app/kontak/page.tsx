import { Container } from "@/components/Container";
import { schoolProfile } from "@/data/mock";

export default function KontakPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Kontak</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Informasi kontak dan lokasi sekolah</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Halaman ini memakai identitas sekolah yang nyata agar saat demo dibuka, user langsung melihat bentuk halaman kontak yang terasa lengkap dan meyakinkan.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">{schoolProfile.fullName}</div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              <p>
                <span className="font-semibold text-slate-900">Alamat:</span> {schoolProfile.address}, {schoolProfile.city}, {schoolProfile.province} {schoolProfile.postalCode}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Telepon:</span> {schoolProfile.phone}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {schoolProfile.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Website:</span> {schoolProfile.website}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white"
                href={schoolProfile.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                Buka Google Maps
              </a>
              <a className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-sky-800" href={`mailto:${schoolProfile.email}`}>
                Kirim Email
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white p-3 shadow-sm">
            <div className="aspect-[16/10] overflow-hidden rounded-[22px]">
              <img alt="Penanda lokasi dan lingkungan SMA Budhaya 2 Santo Agustinus" className="h-full w-full object-cover" src="https://cdn-sekolah.annibuku.com/20103216/3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
