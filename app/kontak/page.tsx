import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { SocialLinksRow } from "@/components/SocialLinksRow";
import { schoolProfile } from "@/data/mock";

export default function KontakPage() {
  return (
    <Container>
      <div className="py-10">
        <PageIntro
          eyebrow="Kontak"
          title="Informasi kontak sekolah"
          description="Halaman kontak perlu sederhana, jelas, dan enak dibaca agar publik tidak bingung saat mencari alamat, email, nomor telepon, atau tautan lokasi sekolah."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-sky-100 bg-white p-6 shadow-sm md:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Kontak Utama</div>

            <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                <span className="font-semibold text-slate-900">Alamat:</span> {schoolProfile.address}, {schoolProfile.city},{" "}
                {schoolProfile.province} {schoolProfile.postalCode}
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

            <a
              href={schoolProfile.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-4 py-2.5 text-sm font-semibold !text-sky-900 shadow-[0_16px_34px_-26px_rgba(12,74,110,0.28)] transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-900 !text-white shadow-[0_10px_24px_-18px_rgba(12,74,110,0.55)] transition group-hover:bg-sky-800">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4.5 w-4.5 fill-none stroke-current stroke-[2]"
                >
                  <path d="M12 21s6-5.686 6-11a6 6 0 1 0-12 0c0 5.314 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] !text-sky-600">
                  Google Maps
                </span>
                <span className="text-sm font-semibold !text-slate-800">Lihat Rute ke Sekolah</span>
              </span>

              <span className="ml-1 text-sm !text-sky-700 transition group-hover:translate-x-0.5">↗</span>
            </a>

            <div className="mt-6 border-t border-sky-100 pt-6">
              <div className="text-sm font-semibold text-slate-900">Sosial media sekolah</div>
              <div className="mt-4">
                <SocialLinksRow />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-sky-100 bg-white p-3 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-[24px]">
              <img
                alt="Lingkungan sekolah"
                className="h-full w-full object-cover"
                src={schoolProfile.heroImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}