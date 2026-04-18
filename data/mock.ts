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

export type SocialLink = {
  label: string;
  href: string;
  accent: string;
};

export type PrincipalGreeting = {
  name: string;
  role: string;
  photoUrl: string;
  intro: string;
  paragraphs: string[];
  highlights: string[];
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  subject: string;
  photoUrl: string;
  education: string;
  focus: string[];
  shortBio: string;
  email: string;
};

export type InfoPost = {
  slug: string;
  title: string;
  type: "Berita" | "Event";
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  location?: string;
  content: string[];
};

export type GalleryPhoto = {
  id: string;
  caption: string;
  imageUrl: string;
};

export type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  photos: GalleryPhoto[];
};

export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  fileType: "PDF";
  updatedAt: string;
};

export type WorkItem = {
  id: string;
  title: string;
  creator: string;
  summary: string;
};

export type WorkCategory = {
  id: string;
  title: string;
  tone: string;
  description: string;
  notes: string[];
  items: WorkItem[];
};

export const schoolProfile: SchoolProfile = {
  shortName: "SMA Budhaya 2",
  fullName: "SMA Budhaya 2 Santo Agustinus",
  tagline: "Komunitas belajar yang menumbuhkan karakter, semangat pelayanan, dan prestasi siswa secara seimbang.",
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
    "Mockup ini disusun sebagai gambaran website sekolah yang lebih dekat dengan kebutuhan nyata pihak sekolah setelah sesi presentasi dan diskusi lanjutan.",
  vision: "Menjadi komunitas belajar yang unggul, berkarakter, dan adaptif terhadap perkembangan zaman.",
  missions: [
    "Menghadirkan pembelajaran yang terarah, aktif, dan relevan dengan kebutuhan peserta didik.",
    "Menumbuhkan disiplin, integritas, kepedulian, dan semangat pelayanan dalam kehidupan sekolah.",
    "Mendorong kolaborasi yang sehat antara sekolah, orang tua, dan lingkungan sekitar.",
  ],
  values: ["Iman", "Karakter", "Disiplin", "Kolaborasi", "Pelayanan"],
  facilities: [
    "Ruang kelas dan area belajar yang tertata",
    "Dokumentasi kegiatan sekolah yang mudah dipublikasi",
    "Pusat informasi dan unduhan resmi sekolah",
    "Galeri sekolah dengan caption yang memberi konteks",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    accent: "from-pink-500 to-orange-400",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    accent: "from-red-500 to-rose-500",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    accent: "from-blue-600 to-sky-500",
  },
];

export const principalGreeting: PrincipalGreeting = {
  name: "Drs. Agustinus Wijaya",
  role: "Kepala Sekolah • Contoh Mockup",
  photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  intro: "Sambutan ini diletakkan di beranda agar halaman depan terasa lebih resmi, hangat, dan langsung memperkenalkan wajah kepemimpinan sekolah.",
  paragraphs: [
    "Selamat datang di website SMA Budhaya 2 Santo Agustinus. Website ini dirancang sebagai ruang informasi resmi sekolah sekaligus jembatan komunikasi yang rapi antara sekolah, siswa, orang tua, dan masyarakat.",
    "Kami ingin setiap informasi penting, dokumentasi kegiatan, karya siswa, dan pengumuman sekolah dapat diakses dengan mudah, nyaman, dan tetap terasa profesional saat dibuka dari berbagai perangkat.",
  ],
  highlights: ["Transparan", "Informatif", "Hangat", "Mudah diakses"],
};

export const teachers: Teacher[] = [
  {
    id: "t-1",
    name: "Maria Yosephine, S.Pd.",
    role: "Wali Kelas XII IPA 1",
    subject: "Bahasa Indonesia",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    education: "S1 Pendidikan Bahasa Indonesia",
    focus: ["Literasi", "Public speaking", "Pembinaan karya tulis"],
    shortBio: "Fokus pada penguatan literasi siswa dan pendampingan presentasi akademik.",
    email: "guru1@mockup-sekolah.id",
  },
  {
    id: "t-2",
    name: "Rafael Dominikus, S.Si.",
    role: "Koordinator Sains",
    subject: "Fisika",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    education: "S1 Fisika",
    focus: ["Eksperimen", "Olimpiade", "Project based learning"],
    shortBio: "Aktif mendampingi kelas sains dan program eksplorasi praktikum siswa.",
    email: "guru2@mockup-sekolah.id",
  },
  {
    id: "t-3",
    name: "Claudia Natalia, S.Pd.",
    role: "Pembina OSIS",
    subject: "Bahasa Inggris",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    education: "S1 Pendidikan Bahasa Inggris",
    focus: ["Conversation", "Leadership", "School event"],
    shortBio: "Mendorong siswa berani tampil, berkomunikasi, dan berorganisasi secara sehat.",
    email: "guru3@mockup-sekolah.id",
  },
  {
    id: "t-4",
    name: "Felix Gunawan, S.Kom.",
    role: "Guru Informatika",
    subject: "Informatika",
    photoUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80",
    education: "S1 Sistem Informasi",
    focus: ["Dasar pemrograman", "Digital literacy", "Project digital"],
    shortBio: "Mengembangkan pembelajaran teknologi yang praktis dan relevan dengan dunia sekarang.",
    email: "guru4@mockup-sekolah.id",
  },
  {
    id: "t-5",
    name: "Theresia Kartika, S.Pd.",
    role: "Guru Seni Budaya",
    subject: "Seni & Musik",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    education: "S1 Pendidikan Seni",
    focus: ["Pentas seni", "Musik sekolah", "Apresiasi karya"],
    shortBio: "Mendorong siswa tampil percaya diri melalui karya seni, pertunjukan, dan musik.",
    email: "guru5@mockup-sekolah.id",
  },
  {
    id: "t-6",
    name: "Yohanes Prasetya, S.Pd.",
    role: "Guru BK",
    subject: "Bimbingan Konseling",
    photoUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    education: "S1 Bimbingan Konseling",
    focus: ["Pendampingan siswa", "Karakter", "Komunikasi orang tua"],
    shortBio: "Berfokus pada pendampingan personal, penguatan karakter, dan dukungan belajar siswa.",
    email: "guru6@mockup-sekolah.id",
  },
];

export const newsPosts: InfoPost[] = [
  {
    slug: "literasi-dan-karakter-menjadi-fokus-semester-baru",
    title: "Literasi dan Karakter Menjadi Fokus Semester Baru",
    type: "Berita",
    date: "2026-04-16",
    excerpt: "Contoh berita resmi sekolah dengan tone yang lebih formal dan institusional.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Siswa belajar di kelas",
    content: [
      "Berita pada website sekolah diposisikan sebagai ruang informasi resmi yang mewakili suara institusi. Karena itu, tampilannya perlu bersih, nyaman dibaca, dan tetap terasa hidup.",
      "Pada mockup ini, format berita dibuat cukup formal agar pihak sekolah mudah membayangkan bagaimana konten kebijakan, program pembinaan, atau penguatan akademik akan dipublikasikan.",
      "Ke depan, berita dapat dilengkapi dokumentasi kegiatan, tautan galeri, dan lampiran bila diperlukan.",
    ],
  },
  {
    slug: "kolaborasi-sekolah-dan-orang-tua-untuk-belajar-positif",
    title: "Kolaborasi Sekolah dan Orang Tua untuk Lingkungan Belajar Positif",
    type: "Berita",
    date: "2026-04-12",
    excerpt: "Contoh berita yang menonjolkan komunikasi sehat antara sekolah dan keluarga.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Kolaborasi guru dan orang tua",
    content: [
      "Website sekolah tidak hanya memuat pengumuman, tetapi juga bisa menjadi wajah komunikasi yang memperlihatkan budaya kerja sekolah.",
      "Melalui berita seperti ini, sekolah dapat menunjukkan pendekatan kolaboratif, perhatian pada siswa, dan keterbukaan terhadap orang tua.",
      "Narasi yang rapi akan membuat website terasa lebih manusiawi dan tidak kaku.",
    ],
  },
  {
    slug: "program-apresiasi-karya-siswa-mulai-disiapkan",
    title: "Program Apresiasi Karya Siswa Mulai Disiapkan",
    type: "Berita",
    date: "2026-04-09",
    excerpt: "Contoh berita yang terhubung dengan rencana menu Karya di website sekolah.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Siswa berdiskusi dan berkarya",
    content: [
      "Salah satu arah baru website ini adalah memberi ruang apresiasi yang lebih jelas bagi karya siswa. Karena itu, berita dan menu karya akan saling menguatkan.",
      "Pihak sekolah dapat mempublikasikan proses, dokumentasi, dan pencapaian karya siswa dalam format yang mudah dibagikan.",
      "Ini membantu website terasa lebih hidup, lebih membanggakan, dan lebih layak disebarkan ke wali murid maupun calon siswa.",
    ],
  },
];

export const events: InfoPost[] = [
  {
    slug: "festival-karya-dan-pentas-seni-sekolah",
    title: "Festival Karya dan Pentas Seni Sekolah",
    type: "Event",
    date: "2026-04-18",
    excerpt: "Contoh event yang lebih hidup, visual, dan cocok dikaitkan dengan galeri kegiatan.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Pentas seni sekolah",
    location: "Aula & Lapangan Sekolah",
    content: [
      "Kategori event dipakai untuk menampilkan kegiatan sekolah yang lebih dinamis, seperti pentas seni, class meeting, kegiatan OSIS, maupun aktivitas ekstrakurikuler.",
      "Halaman event sebaiknya terasa lebih ringan dan hidup, tetapi tetap rapi agar mudah dibaca oleh publik.",
      "Dalam versi backend nanti, event juga idealnya terhubung dengan galeri sehingga dokumentasi foto tidak berdiri sendiri.",
    ],
  },
  {
    slug: "pekan-orientasi-dan-pembinaan-kelas",
    title: "Pekan Orientasi dan Pembinaan Kelas",
    type: "Event",
    date: "2026-04-14",
    excerpt: "Contoh event internal yang menampilkan kegiatan pembinaan siswa secara santai namun terstruktur.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Kegiatan siswa bersama guru",
    location: "Lingkungan Sekolah",
    content: [
      "Event seperti orientasi, pembinaan kelas, dan kegiatan tematik bisa dibedakan dari berita karena nuansanya lebih dokumentatif dan berfokus pada aktivitas.",
      "Pemisahan ini membantu publik memahami mana informasi resmi institusi dan mana kegiatan harian yang memberi warna pada kehidupan sekolah.",
      "Ke depan, fitur auto-hide dapat diterapkan pada event tertentu yang hanya relevan sampai tanggal tertentu.",
    ],
  },
  {
    slug: "latihan-kepemimpinan-osis-dan-ekstrakurikuler",
    title: "Latihan Kepemimpinan OSIS dan Ekstrakurikuler",
    type: "Event",
    date: "2026-04-10",
    excerpt: "Contoh event untuk menampilkan kegiatan organisasi siswa dan pembinaan karakter.",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    imageHint: "Kegiatan organisasi siswa",
    location: "Ruang Pertemuan Siswa",
    content: [
      "Menu event juga bisa menjadi tempat dokumentasi kegiatan kepemimpinan siswa, program OSIS, atau aktivitas kolaboratif lain yang sifatnya lebih kasual dan hidup.",
      "Dengan tampilan yang baik, konten seperti ini lebih berpotensi dibagikan oleh siswa dan wali murid.",
      "Ini sejalan dengan arah proyek untuk membuat website terasa kepakai dan tidak hanya menjadi pajangan statis.",
    ],
  },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: "gc-1",
    title: "Galeri Event",
    description: "Dokumentasi kegiatan sekolah, acara siswa, hingga momen bersama guru dan orang tua.",
    coverImageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    photos: [
      {
        id: "gce-1",
        caption: "Siswa tampil pada sesi pembukaan festival karya sekolah.",
        imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "gce-2",
        caption: "Suasana kelas saat presentasi proyek kolaboratif berlangsung.",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "gce-3",
        caption: "Momen kebersamaan guru dan siswa pada kegiatan sekolah tematik.",
        imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "gc-2",
    title: "Galeri Ekstrakurikuler",
    description: "Ruang untuk memperlihatkan semangat, kreativitas, dan pembinaan minat bakat siswa.",
    coverImageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    photos: [
      {
        id: "gck-1",
        caption: "Latihan band sekolah sebagai bagian dari pembinaan bakat musik siswa.",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "gck-2",
        caption: "Diskusi tim kreatif siswa saat menyiapkan karya presentasi.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "gck-3",
        caption: "Aktivitas ekstrakurikuler yang memperkuat kolaborasi dan kepercayaan diri.",
        imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "gc-3",
    title: "Galeri Fasilitas",
    description: "Menampilkan lingkungan sekolah agar publik lebih mudah membayangkan suasana belajar.",
    coverImageUrl: "https://cdn-sekolah.annibuku.com/20103216/2.jpg",
    photos: [
      {
        id: "gcf-1",
        caption: "Tampak depan lingkungan sekolah yang menjadi identitas kampus.",
        imageUrl: "https://cdn-sekolah.annibuku.com/20103216/1.jpg",
      },
      {
        id: "gcf-2",
        caption: "Area sekolah yang tertata untuk mendukung kegiatan belajar dan pembinaan siswa.",
        imageUrl: "https://cdn-sekolah.annibuku.com/20103216/2.jpg",
      },
      {
        id: "gcf-3",
        caption: "Visual identitas sekolah untuk memperkuat kesan profesional pada website.",
        imageUrl: "https://cdn-sekolah.annibuku.com/20103216/3.jpg",
      },
    ],
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "dl-1",
    title: "Kalender Akademik (Contoh Mockup)",
    description: "Contoh file resmi yang nanti bisa diunggah dan diperbarui admin sekolah secara mandiri.",
    fileType: "PDF",
    updatedAt: "2026-04-16",
  },
  {
    id: "dl-2",
    title: "Tata Tertib Sekolah (Contoh Mockup)",
    description: "Dokumen sekolah yang biasa dicari publik dan perlu mudah diakses dari ponsel.",
    fileType: "PDF",
    updatedAt: "2026-04-12",
  },
  {
    id: "dl-3",
    title: "Panduan Kegiatan Siswa (Contoh Mockup)",
    description: "Simulasi dokumen yang menampilkan fungsi halaman unduhan agar terasa benar-benar kepakai.",
    fileType: "PDF",
    updatedAt: "2026-04-10",
  },
];

export const workCategories: WorkCategory[] = [
  {
    id: "wk-1",
    title: "Karya Tulis",
    tone: "from-amber-500/20 to-orange-500/10",
    description: "Karya tulis wajib tampil sebagai teks native di web agar nyaman dibaca dan terasa hidup.",
    notes: ["Artikel tampil langsung di halaman", "Mudah dibaca dari ponsel", "Bukan PDF tempel"],
    items: [
      {
        id: "wkt-1",
        title: "Belajar Melihat Kota dari Sudut Pandang Pelajar",
        creator: "Tim Literasi XII IPS",
        summary: "Contoh karya tulis siswa yang dipublikasikan langsung di web supaya lebih rapi, lebih hidup, dan lebih mudah dibagikan.",
      },
      {
        id: "wkt-2",
        title: "Makna Disiplin dalam Kehidupan Sekolah",
        creator: "Komunitas Bahasa Indonesia",
        summary: "Artikel pendek bergaya reflektif untuk menunjukkan bahwa website dapat menjadi ruang apresiasi karya, bukan hanya papan info.",
      },
    ],
  },
  {
    id: "wk-2",
    title: "Video",
    tone: "from-rose-500/20 to-pink-500/10",
    description: "Kategori video diarahkan untuk embed YouTube agar ringan dikelola dan mudah diputar langsung dari website.",
    notes: ["Embed YouTube", "Bisa untuk dokumentasi event", "Tampilan tetap di dalam web"],
    items: [
      {
        id: "wkv-1",
        title: "Video Pentas Seni Sekolah",
        creator: "OSIS & Tim Multimedia",
        summary: "Mockup untuk video dokumentasi yang nantinya dapat diputar melalui embed dan dipresentasikan langsung dari halaman karya.",
      },
      {
        id: "wkv-2",
        title: "Highlight Kegiatan Literasi",
        creator: "Komunitas Siswa",
        summary: "Cocok untuk video pendek yang lebih shareable dan memperlihatkan kehidupan sekolah secara hangat.",
      },
    ],
  },
  {
    id: "wk-3",
    title: "Musik",
    tone: "from-sky-500/20 to-cyan-500/10",
    description: "Kategori musik bisa dipakai untuk audio karya siswa, lagu sekolah, atau dokumentasi penampilan vokal dan instrumental.",
    notes: ["Cocok untuk audio karya siswa", "Bisa pakai storage media", "Siap dikembangkan ke backend"],
    items: [
      {
        id: "wkm-1",
        title: "Rekaman Paduan Suara Sekolah",
        creator: "Ekstrakurikuler Musik",
        summary: "Contoh kartu audio dengan player sederhana untuk memperlihatkan arah menu karya musik pada website.",
      },
      {
        id: "wkm-2",
        title: "Komposisi Instrumental Siswa",
        creator: "Kelas Seni Budaya",
        summary: "Ruang apresiasi bagi karya audio yang selama ini sulit ditampilkan rapi di website sekolah biasa.",
      },
    ],
  },
];
