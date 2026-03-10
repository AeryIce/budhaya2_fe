export type NewsCategory = "Berita" | "Pengumuman";

export type NewsPost = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string[];
};

export type AgendaItem = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  location?: string;
};

export type GalleryAlbum = {
  id: string;
  title: string;
  coverLabel: string;
  photoCount: number;
  date: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  fileType: "PDF";
  updatedAt: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "penerimaan-peserta-didik-baru-info-awal",
    title: "Info Awal PPDB (Teaser)",
    category: "Pengumuman",
    date: "2026-03-11",
    excerpt: "Info awal. Sistem PPDB online lengkap masuk modul tambahan (Add-On).",
    content: [
      "Ini hanya info awal untuk demo Website Standar.",
      "PPDB Online lengkap (berkas/verifikasi/notifikasi) masuk Add-On Tahap 2.",
    ],
  },
  {
    slug: "kegiatan-kerja-bakti-sekolah",
    title: "Kegiatan Kerja Bakti Sekolah",
    category: "Berita",
    date: "2026-03-09",
    excerpt: "Dokumentasi singkat kerja bakti bersama siswa dan guru.",
    content: [
      "Hari ini sekolah mengadakan kerja bakti bersama.",
      "Terima kasih untuk semua pihak yang sudah berpartisipasi.",
    ],
  },
  {
    slug: "pengumuman-ujian-tengah-semester",
    title: "Pengumuman UTS Semester Genap",
    category: "Pengumuman",
    date: "2026-03-07",
    excerpt: "Jadwal UTS akan dibagikan melalui wali kelas dan unduhan resmi.",
    content: [
      "Jadwal UTS tersedia di menu Unduhan.",
      "Silakan pantau pengumuman resmi dari sekolah.",
    ],
  },
];

export const agendas: AgendaItem[] = [
  { id: "ag-1", date: "2026-03-15", title: "Rapat Orang Tua / Wali", location: "Aula Sekolah" },
  { id: "ag-2", date: "2026-03-18", title: "Kegiatan Literasi Pagi", location: "Lapangan" },
  { id: "ag-3", date: "2026-03-22", title: "Lomba Class Meeting", location: "Area Sekolah" },
];

export const galleryAlbums: GalleryAlbum[] = [
  { id: "ga-1", title: "Kerja Bakti", coverLabel: "Album Kegiatan", photoCount: 24, date: "2026-03-09" },
  { id: "ga-2", title: "Upacara Bendera", coverLabel: "Album Kegiatan", photoCount: 18, date: "2026-03-04" },
  { id: "ga-3", title: "Kegiatan OSIS", coverLabel: "Album Kegiatan", photoCount: 30, date: "2026-02-26" },
];

export const downloads: DownloadItem[] = [
  {
    id: "dl-1",
    title: "Kalender Akademik (Contoh)",
    description: "Versi demo. File final akan diunggah oleh PIC sekolah.",
    fileType: "PDF",
    updatedAt: "2026-03-11",
  },
  {
    id: "dl-2",
    title: "Tata Tertib Sekolah (Contoh)",
    description: "Dokumen contoh untuk tampilan Download Center.",
    fileType: "PDF",
    updatedAt: "2026-03-08",
  },
];