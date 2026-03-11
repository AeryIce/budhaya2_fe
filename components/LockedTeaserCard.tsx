"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type Props = {
  title: string;
  phase: string;
  desc: string;
};

type PreviewConfig = {
  label: string;
  headline: string;
  summary: string;
  valuePoints: string[];
  preview: ReactNode;
};

function getPreviewConfig(title: string): PreviewConfig {
  switch (title) {
    case "PPDB Online":
      return {
        label: "Simulasi PPDB",
        headline: "Preview alur pendaftaran siswa yang lebih tertata",
        summary:
          "Modul ini menampilkan gambaran sistem pendaftaran calon siswa lengkap dengan form data, upload berkas, dan alur review agar pihak sekolah dapat membayangkan proses digital yang lebih rapi daripada formulir manual.",
        valuePoints: [
          "Form pendaftaran dapat disusun per gelombang atau jalur masuk.",
          "Berkas calon siswa dapat diunggah dan dicek secara lebih sistematis.",
          "Status pendaftaran dapat dipantau oleh admin sekolah secara bertahap.",
        ],
        preview: (
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                "1. Buat Akun",
                "2. Isi Data Calon Siswa",
                "3. Upload Berkas",
                "4. Review & Kirim",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3 text-xs font-semibold text-sky-900">
                  {step}
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Formulir Pendaftaran Peserta Didik Baru</div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[
                    ["Nama lengkap", "Calon peserta didik"],
                    ["NISN", "Nomor induk nasional"],
                    ["Asal sekolah", "SMP asal"],
                    ["No. WhatsApp orang tua", "08xxxxxxxxxx"],
                    ["Jalur pendaftaran", "Reguler / Prestasi"],
                    ["Email aktif", "contoh@email.com"],
                  ].map(([label, placeholder]) => (
                    <label key={label} className="block">
                      <div className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{label}</div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-400">{placeholder}</div>
                    </label>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-sky-200 bg-sky-50/70 p-4 text-sm text-slate-600">
                  Area upload berkas: kartu keluarga, rapor, pas foto, dan dokumen pendukung lain.
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-[24px] border border-sky-100 bg-sky-950 p-4 text-white shadow-sm">
                  <div className="text-xs uppercase tracking-[0.18em] text-blue-100">Ringkasan Admin</div>
                  <div className="mt-3 grid gap-3">
                    <div className="rounded-2xl bg-white/10 px-3 py-3">
                      <div className="text-2xl font-semibold">128</div>
                      <div className="text-xs text-blue-100">Simulasi pendaftar masuk</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-3">
                      <div className="text-2xl font-semibold">34</div>
                      <div className="text-xs text-blue-100">Menunggu verifikasi berkas</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Nilai tambah</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Mengurangi input berulang dari formulir manual.</li>
                    <li>• Memudahkan panitia memonitor status calon siswa.</li>
                    <li>• Lebih mudah dipresentasikan ke orang tua dan calon peserta didik.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ),
      };

    case "Notifikasi WA/Email":
      return {
        label: "Simulasi Notifikasi",
        headline: "Preview komunikasi sekolah yang lebih cepat dan konsisten",
        summary:
          "Modul ini cocok untuk menjelaskan bagaimana sekolah dapat mengirim pengingat agenda, pengumuman resmi, atau update status layanan tertentu melalui kanal WhatsApp dan email secara lebih terstruktur.",
        valuePoints: [
          "Membantu penyebaran pengumuman resmi agar tidak tercecer.",
          "Dapat dipakai untuk reminder agenda, rapat, atau informasi akademik.",
          "Memperkuat komunikasi sekolah dengan siswa, orang tua, dan tenaga pendidik.",
        ],
        preview: (
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Segmentasi penerima</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Orang Tua", "312 kontak"],
                    ["Siswa", "480 kontak"],
                    ["Guru & Staff", "52 kontak"],
                  ].map(([label, total]) => (
                    <div key={label} className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                      <div className="text-xs uppercase tracking-[0.14em] text-sky-700">{label}</div>
                      <div className="mt-2 text-lg font-semibold text-slate-900">{total}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Contoh template pesan</div>
                <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">WhatsApp Reminder</div>
                    <div className="mt-2">Yth. Orang tua/wali, rapat orang tua akan dilaksanakan pada Jumat, 15 Maret pukul 08.00 WIB di aula sekolah.</div>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Email Pengumuman</div>
                    <div className="mt-2">Pemberitahuan agenda literasi dan penguatan karakter minggu ini beserta lampiran informasi resmi sekolah.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Panel pengiriman</div>
                  <div className="mt-1 text-sm text-slate-500">Preview composer untuk broadcast resmi sekolah</div>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">WA & Email</span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Judul pesan", "Pengingat rapat orang tua"],
                  ["Waktu kirim", "Kamis, 14 Maret • 18.30 WIB"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{label}</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-500">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <div className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Isi pesan</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 text-sm leading-6 text-slate-500">
                  Yth. Bapak/Ibu, kami mengingatkan kembali agenda rapat orang tua/wali. Mohon hadir tepat waktu. Terima kasih.
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-sky-800">
                {[
                  "Template resmi sekolah",
                  "Bisa dijadwalkan",
                  "Riwayat pengiriman",
                  "Segmentasi penerima",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ),
      };

    case "Chatbot Tanya Sekolah":
      return {
        label: "Simulasi Chatbot",
        headline: "Preview layanan tanya jawab cepat dengan sentuhan AI",
        summary:
          "Modul ini membantu pihak sekolah membayangkan kehadiran asisten digital yang dapat menjawab pertanyaan umum berdasarkan konten resmi website, sehingga pengunjung tidak harus mencari informasi secara manual satu per satu.",
        valuePoints: [
          "Menjawab pertanyaan umum secara cepat dengan gaya yang rapi dan konsisten.",
          "Dapat diarahkan untuk menjelaskan profil, kontak, agenda, hingga alur layanan sekolah.",
          "Memberi kesan modern dan informatif saat website dibuka pertama kali.",
        ],
        preview: (
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Keistimewaan preview chatbot</div>
              <div className="mt-4 space-y-3">
                {[
                  ["Powered by AI", "Dapat diarahkan untuk menjawab FAQ berdasarkan konten resmi sekolah."],
                  ["Floating assistant", "Muncul sebagai tombol chat di sudut halaman agar lebih familiar bagi pengunjung."],
                  ["Konten terjaga", "Jawaban bisa dibatasi hanya pada data dan halaman resmi yang disetujui sekolah."],
                ].map(([titleItem, descItem]) => (
                  <div key={titleItem} className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                    <div className="text-sm font-semibold text-slate-900">{titleItem}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{descItem}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Contoh percakapan</div>
                  <div className="mt-1 text-sm text-slate-500">Simulasi jawaban untuk pengunjung website</div>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">AI Preview</span>
              </div>

              <div className="mt-4 space-y-3 rounded-[22px] bg-sky-50/70 p-4">
                <div className="flex justify-end">
                  <div className="max-w-[78%] rounded-2xl bg-sky-900 px-3.5 py-2.5 text-sm text-white shadow-sm">Bagaimana alamat sekolah dan kontaknya?</div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[84%] rounded-2xl border border-sky-100 bg-white px-3.5 py-2.5 text-sm leading-6 text-slate-700 shadow-sm">
                    SMA Budhaya 2 Santo Agustinus berada di Jl. Radin Inten II, Buaran, Duren Sawit. Kontak utama dapat diarahkan ke telepon sekolah dan email resmi yang ditampilkan pada halaman kontak.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[78%] rounded-2xl bg-sky-900 px-3.5 py-2.5 text-sm text-white shadow-sm">Apakah chatbot ini sudah aktif penuh?</div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[84%] rounded-2xl border border-sky-100 bg-white px-3.5 py-2.5 text-sm leading-6 text-slate-700 shadow-sm">
                    Saat ini yang ditampilkan adalah preview Add-On. Pada versi aktif, chatbot dapat dipakai sebagai pusat tanya jawab cepat berbasis konten resmi sekolah.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      };

    default:
      return {
        label: "Simulasi Dashboard",
        headline: "Preview data analitik untuk kebutuhan internal sekolah",
        summary:
          "Modul dashboard membantu sekolah membayangkan bagaimana data kunjungan website, minat PPDB, atau halaman yang paling sering diakses bisa dibaca lebih mudah untuk mendukung evaluasi dan keputusan berikutnya.",
        valuePoints: [
          "Meringkas data penting dalam tampilan yang mudah dipahami.",
          "Membantu evaluasi halaman populer, minat pendaftaran, dan performa informasi sekolah.",
          "Cocok sebagai pijakan awal untuk pengembangan dashboard internal yang lebih lengkap.",
        ],
        preview: (
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["Pengunjung mingguan", "2.184"],
                ["Klik halaman PPDB", "486"],
                ["Berita terpopuler", "Agenda Literasi"],
                ["Form tersimpan", "67 draft"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[22px] border border-sky-100 bg-white p-4 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.14em] text-slate-500">{label}</div>
                  <div className="mt-3 text-xl font-semibold text-slate-900">{value}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Simulasi tren minat pengunjung</div>
                <div className="mt-4 flex h-56 items-end gap-3 rounded-[20px] bg-sky-50/70 px-4 pb-4 pt-6">
                  {[
                    ["Sen", "40%"],
                    ["Sel", "62%"],
                    ["Rab", "55%"],
                    ["Kam", "76%"],
                    ["Jum", "88%"],
                    ["Sab", "48%"],
                  ].map(([day, height]) => (
                    <div key={day} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-2xl bg-gradient-to-t from-sky-700 to-sky-400" style={{ height }} />
                      <div className="text-xs font-medium text-slate-500">{day}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-sky-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Area insight yang bisa dibayangkan</div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                    Halaman paling sering dibuka untuk melihat ketertarikan pengunjung.
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                    Minat calon siswa terhadap PPDB atau agenda sekolah tertentu.
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3">
                    Ringkasan data untuk evaluasi komunikasi digital sekolah secara berkala.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      };
  }
}

export function LockedTeaserCard({ title, phase, desc }: Props) {
  const [open, setOpen] = useState(false);
  const config = useMemo(() => getPreviewConfig(title), [title]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full rounded-[24px] border border-sky-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <span className="rounded-full border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-800">
            Add-On {phase}
          </span>
        </div>
        <div className="text-sm leading-7 text-slate-600">{desc}</div>
        <div className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-sky-700 group-hover:underline">Lihat preview modul</div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/55 p-4" onClick={() => setOpen(false)}>
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center py-8">
            <div
              className="w-full rounded-[28px] border border-sky-100 bg-[#f8fbff] p-5 shadow-2xl md:p-6"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="flex flex-col gap-4 border-b border-sky-100 pb-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">{config.label}</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{title}</div>
                  <div className="mt-2 text-sm font-medium text-sky-900">{config.headline}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{config.summary}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  Tutup Preview
                </button>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Nilai yang bisa ditawarkan</div>
                  <div className="mt-4 space-y-3">
                    {config.valuePoints.map((point) => (
                      <div key={point} className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3 text-sm leading-6 text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 px-3 py-3 text-sm leading-6 text-slate-600">
                    Tampilan ini masih berupa preview demo agar pihak sekolah dapat membayangkan arah pengembangan modul sebelum diputuskan untuk diaktifkan.
                  </div>
                </div>

                <div className="rounded-[24px] border border-sky-100 bg-sky-50/60 p-4 md:p-5">{config.preview}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
