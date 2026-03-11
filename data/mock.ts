export type NewsCategory = "Berita" | "Pengumuman";

export type SchoolProfile = {
  shortName: string;
  fullName: string;
  tagline: string;
  foundation: string;
  accreditation: string;
  npsn: string;
  address: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  mapUrl: string;
  logoUrl: string;
  heroImageUrl: string;
  about: string;
  vision: string;
  missions: string[];
  values: string[];
  facilities: string[];
};

export type NewsPost = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // YYYY-MM-DD
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  content: string[];
};

export type AgendaItem = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  location?: string;
  description?: string;
};

export type GalleryAlbum = {
  id: string;
  title: string;
  imageUrl: string;
  photoCount: number;
  date: string;
  description: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  fileType: "PDF";
  updatedAt: string;
};

export const schoolProfile: SchoolProfile = {
  shortName: "SMA Budhaya 2",
  fullName: "SMA Budhaya 2 Santo Agustinus",
  tagline: "Sekolah swasta berakreditasi A di Jakarta Timur dengan semangat belajar, karakter, dan pelayanan.",
  foundation: "Yayasan Perguruan Budhaya",
  accreditation: "A",
  npsn: "20103216",
  address: "Jl. Radin Inten II, Buaran, Duren Sawit",
  district: "Duren Sawit",
  city: "Jakarta Timur",
  province: "DKI Jakarta",
  postalCode: "13440",
  phone: "021-8630746",
  email: "sma_bdh2@yahoo.co.id",
  website: "http://sma-bdh2.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=SMA+Budhaya+2+Santo+Agustinus+Jakarta+Timur",
  logoUrl: "/logo-budhaya2.webp",
  heroImageUrl: "https://cdn-sekolah.annibuku.com/20103216/1.jpg",
  about:
    "Halaman ini disusun sebagai mockup demo website standar sekolah. Identitas inti sekolah, alamat, yayasan, dan nuansa visual sudah disesuaikan agar calon pengguna lebih mudah membayangkan bentuk website finalnya.",
  vision: "Menjadi komunitas belajar yang unggul, berkarakter, dan adaptif terhadap perkembangan zaman.",
  missions: [
    "Menghadirkan pembelajaran yang terarah, aktif, dan relevan dengan kebutuhan peserta didik.",
    "Menumbuhkan disiplin, integritas, kepedulian, dan semangat pelayanan dalam kehidupan sekolah.",
    "Mendorong kolaborasi yang sehat antara sekolah, orang tua, dan lingkungan sekitar.",
  ],
  values: ["Iman", "Karakter", "Disiplin", "Kolaborasi", "Pelayanan"],
  facilities: [
    "Ruang kelas dan area belajar",
    "Area kegiatan siswa",
    "Dokumentasi berita & galeri sekolah",
    "Pusat unduhan informasi sekolah",
  ],
};

export const newsPosts: NewsPost[] = [
  {
    slug: "sambut-semester-baru-dengan-semangat-bertumbuh",
    title: "Sambut Semester Baru dengan Semangat Bertumbuh",
    category: "Berita",
    date: "2026-03-11",
    excerpt: "Contoh tampilan berita sekolah dengan gaya visual yang lebih hidup untuk kebutuhan demo ke user.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Siswa belajar di kelas",
    content: [
      "Konten ini adalah contoh berita untuk kebutuhan demo website standar sekolah. Tujuannya agar pihak sekolah bisa melihat bagaimana tampilan berita ketika nanti diisi konten nyata oleh PIC sekolah.",
      "Pada versi final, setiap berita dapat memuat foto kegiatan, ringkasan informasi, dan detail lengkap yang mudah dibaca baik dari laptop maupun ponsel.",
      "Tampilan ini sengaja dibuat rapi dan ringan agar halaman sekolah terasa hidup, informatif, dan profesional saat pertama kali dibuka.",
    ],
  },
  {
    slug: "agenda-literasi-dan-penguatan-karakter",
    title: "Agenda Literasi dan Penguatan Karakter",
    category: "Pengumuman",
    date: "2026-03-09",
    excerpt: "Contoh pengumuman yang bisa dipakai untuk menyampaikan jadwal kegiatan, agenda, maupun informasi penting sekolah.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Suasana literasi di perpustakaan",
    content: [
      "Halaman pengumuman pada website standar sekolah berfungsi untuk menyampaikan informasi penting secara cepat dan mudah dicari kembali.",
      "Pada demo ini, gaya penulisan dibuat formal namun tetap hangat, sehingga cocok digunakan untuk agenda literasi, penguatan karakter, maupun pemberitahuan umum lainnya.",
      "Nantinya sekolah dapat mengunggah dokumen pendukung atau menautkan informasi ke halaman unduhan bila dibutuhkan.",
    ],
  },
  {
    slug: "kolaborasi-sekolah-dan-orang-tua",
    title: "Kolaborasi Sekolah dan Orang Tua untuk Lingkungan Belajar Positif",
    category: "Berita",
    date: "2026-03-07",
    excerpt: "Contoh narasi berita yang menonjolkan komunikasi antara sekolah dan keluarga dalam membangun budaya belajar yang sehat.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Kolaborasi dan diskusi bersama",
    content: [
      "Mockup berita ini menunjukkan bagaimana website sekolah dapat dipakai untuk menampilkan semangat kolaboratif, bukan sekadar papan pengumuman digital.",
      "Pihak sekolah bisa mengisi berita tentang rapat orang tua, kegiatan pembinaan, prestasi siswa, atau dokumentasi kegiatan bersama.",
      "Dengan pola tampilan seperti ini, website terasa lebih hidup dan lebih meyakinkan saat dipresentasikan kepada calon pengguna.",
    ],
  },
];

export const agendas: AgendaItem[] = [
  {
    id: "ag-1",
    date: "2026-03-15",
    title: "Rapat Orang Tua / Wali",
    location: "Aula Sekolah",
    description: "Contoh agenda resmi yang menampilkan waktu dan lokasi kegiatan secara jelas.",
  },
  {
    id: "ag-2",
    date: "2026-03-18",
    title: "Kegiatan Literasi Pagi",
    location: "Lapangan & Area Baca",
    description: "Ruang untuk menampilkan agenda rutin sekolah dengan ringkas dan rapi.",
  },
  {
    id: "ag-3",
    date: "2026-03-22",
    title: "Class Meeting dan Kreasi Siswa",
    location: "Area Sekolah",
    description: "Cocok untuk kalender akademik ringan atau agenda kegiatan siswa.",
  },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "ga-1",
    title: "Tampak Depan Kampus",
    imageUrl: "https://cdn-sekolah.annibuku.com/20103216/1.jpg",
    photoCount: 12,
    date: "2026-03-11",
    description: "Foto eksterior sekolah yang membantu pengunjung mengenali identitas kampus sejak awal.",
  },
  {
    id: "ga-2",
    title: "Area Lingkungan Sekolah",
    imageUrl: "https://cdn-sekolah.annibuku.com/20103216/2.jpg",
    photoCount: 9,
    date: "2026-03-10",
    description: "Contoh tampilan album dokumentasi lingkungan dan fasilitas sekitar sekolah.",
  },
  {
    id: "ga-3",
    title: "Identitas Budhaya Santo Agustinus",
    imageUrl: "https://cdn-sekolah.annibuku.com/20103216/3.jpg",
    photoCount: 8,
    date: "2026-03-10",
    description: "Nuansa visual yang memperkuat identitas sekolah dan yayasan dalam mockup demo.",
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "dl-1",
    title: "Kalender Akademik (Contoh Demo)",
    description: "Contoh file untuk memperlihatkan bagaimana pusat unduhan akan tampil saat sudah diisi PIC sekolah.",
    fileType: "PDF",
    updatedAt: "2026-03-11",
  },
  {
    id: "dl-2",
    title: "Tata Tertib Sekolah (Contoh Demo)",
    description: "Contoh dokumen resmi agar user langsung membayangkan fungsi halaman unduhan.",
    fileType: "PDF",
    updatedAt: "2026-03-08",
  },
  {
    id: "dl-3",
    title: "Formulir Informasi Peserta Didik (Contoh Demo)",
    description: "Contoh file sederhana untuk kebutuhan simulasi menu unduhan pada tahap demo.",
    fileType: "PDF",
    updatedAt: "2026-03-06",
  },
];
