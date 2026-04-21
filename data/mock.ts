export type SchoolProfile = {
  shortName: string;
  fullName: string;
  tagline: string;
  foundation: string;
  accreditation: string;
  npsn: string;
  status: string;
  level: string;
  principalName: string;
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
  fileType: "PDF" | "PNG";
  updatedAt: string;
  previewImageUrl?: string;
  fileUrl?: string;
};

export type ExtracurricularItem = {
  id: string;
  name: string;
  mentor: string;
  schedule: string;
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
  shortName: "SMA Budhaya II",
  fullName: "SMA Budhaya II Santo Agustinus",
  tagline: "Mewujudkan siswa yang berkarakter Pancasila dengan Spiritualitas Santo Agustinus.",
  foundation: "Yayasan Perguruan Budhaya",
  accreditation: "A",
  npsn: "20103216",
  status: "Swasta",
  level: "Sekolah Menengah Atas (SMA)",
  principalName: "Drs. Leocardia Suparman, M.M",
  address: "Jl. Radin Inten II, Buaran, Duren Sawit",
  district: "Duren Sawit",
  city: "Jakarta Timur",
  province: "DKI Jakarta",
  postalCode: "13440",
  phone: "021-8630746",
  email: "smabudhaya2stagustinus@gmail.com",
  website: "http://sma-bdh2.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=SMA+Budhaya+II+Santo+Agustinus+Jakarta+Timur",
  logoUrl: "/logo-budhaya2.webp",
  heroImageUrl: "https://cdn-sekolah.annibuku.com/20103216/1.jpg",
  about:
    "SMA Budhaya II Santo Agustinus percaya bahwa pendidikan sejati adalah pendidikan yang menyentuh akal, hati, dan tindakan. Dengan menanamkan nilai-nilai Pancasila dan spiritualitas Santo Agustinus, sekolah membentuk generasi muda yang cerdas dalam berpikir, tulus dalam bertindak, tangguh dalam menghadapi tantangan, dan setia kepada Tuhan serta bangsa.",
  vision: "Mewujudkan siswa yang berkarakter Pancasila dengan Spiritualitas Santo Agustinus.",
  missions: [
    "Menumbuhkan peserta didik yang beriman dan bertakwa kepada Tuhan Yang Maha Esa dalam kehidupan sehari-hari.",
    "Membangun rasa cinta tanah air melalui kegiatan yang menumbuhkan nasionalisme dan kepedulian terhadap bangsa dan negara.",
    "Mengembangkan kemampuan berpikir kritis dalam menyelesaikan masalah secara logis dan bertanggung jawab.",
    "Mendorong peserta didik untuk menjadi individu yang kreatif dalam mengekspresikan ide, karya, dan solusi inovatif.",
    "Menanamkan nilai kolaborasi dalam proses belajar dan kehidupan sosial melalui kerja sama yang sehat dan produktif.",
    "Membina kemandirian peserta didik agar mampu mengambil keputusan dan bertanggung jawab atas tindakannya.",
    "Mendorong gaya hidup sehat secara fisik dan mental melalui kebiasaan positif dan lingkungan yang mendukung.",
    "Mengasah keterampilan komunikasi yang efektif, santun, dan membangun baik secara lisan maupun tulisan.",
  ],
  values: [
    "Cerdas dalam berpikir",
    "Tulus dalam bertindak",
    "Tangguh menghadapi tantangan",
    "Setia kepada Tuhan dan bangsa",
  ],
  facilities: [
    "Ruang kelas yang nyaman dan ber-AC",
    "Aula serbaguna",
    "Laboratorium IPA dan Komputer",
    "Perpustakaan",
    "Lapangan olahraga",
    "Ruang ibadat",
    "CCTV dan sistem keamanan sekolah",
    "Area parkir dan kantin sekolah",
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
  name: "Drs. Leocardia Suparman, M.M",
  role: "Kepala Sekolah",
  photoUrl: "/principal-placeholder.svg",
  intro:
    "Sambutan kepala sekolah ditempatkan di beranda untuk memberi kesan resmi, hangat, dan langsung memperkenalkan arah pendidikan SMA Budhaya II Santo Agustinus kepada publik.",
  paragraphs: [
    "Website ini dihadirkan sebagai ruang informasi resmi sekolah sekaligus jembatan komunikasi yang rapi antara sekolah, siswa, orang tua, dan masyarakat.",
    "Melalui website ini, sekolah ingin setiap informasi penting, dokumentasi kegiatan, serta dokumen resmi dapat diakses dengan mudah, nyaman, dan tetap terasa profesional dari berbagai perangkat.",
  ],
  highlights: ["Berkarakter Pancasila", "Spiritualitas Santo Agustinus", "Informatif", "Mudah diakses"],
};

export const teachers: Teacher[] = [
  {
    id: "t-1",
    name: "Drs. Leocardia Suparman, M.M",
    role: "Tenaga Pendidik",
    subject: "Matematika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Matematika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Matematika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-2",
    name: "Tarcisius Suhirman, M.M",
    role: "Tenaga Pendidik",
    subject: "Geografi",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Geografi", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Geografi di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-3",
    name: "Dra. Godeliva Kris Saptariningsih, M.Pd",
    role: "Tenaga Pendidik",
    subject: "Informatika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Informatika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Informatika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-4",
    name: "Drs. Martinus Karyana",
    role: "Tenaga Pendidik",
    subject: "Sejarah",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Sejarah", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Sejarah di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-5",
    name: "Drs. Robertus Artana",
    role: "Tenaga Pendidik",
    subject: "Sosiologi",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Sosiologi", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Sosiologi di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-6",
    name: "Ch. Nanik Sulistyawati, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Bahasa Indonesia",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Bahasa Indonesia", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Bahasa Indonesia di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-7",
    name: "Drs. Irwan Hutomo, M.Pd",
    role: "Tenaga Pendidik",
    subject: "Informatika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Informatika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Informatika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-8",
    name: "Didik Nurra Edy",
    role: "Tenaga Pendidik",
    subject: "Seni + Prakarya",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Seni + Prakarya", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Seni + Prakarya di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-9",
    name: "Hotma Gomgom Berliana, S.Si",
    role: "Tenaga Pendidik",
    subject: "Fisika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Fisika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Fisika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-10",
    name: "Miharja, S.Pd",
    role: "Tenaga Pendidik",
    subject: "PJOK",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["PJOK", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran PJOK di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-11",
    name: "Christina N Pardosi, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Matematika/Informatika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Matematika/Informatika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Matematika/Informatika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-12",
    name: "Feronika Nababan, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Bahasa Indonesia",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Bahasa Indonesia", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Bahasa Indonesia di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-13",
    name: "Kiki Rud Hutagalung, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Matematika/Informatika",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Matematika/Informatika", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Matematika/Informatika di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-14",
    name: "Derwi Melisa Silaen, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Matematika/Matematika Lanjutan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Matematika/Matematika Lanjutan", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Matematika/Matematika Lanjutan di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-15",
    name: "Vicky Andarina, S.S",
    role: "Tenaga Pendidik",
    subject: "Bahasa Jepang",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Bahasa Jepang", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Bahasa Jepang di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-16",
    name: "Dra. Caecilia Farida SM",
    role: "Tenaga Pendidik",
    subject: "PKn",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["PKn", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran PKn di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-17",
    name: "Drs. Yohanes Wahyanto",
    role: "Tenaga Pendidik",
    subject: "P. Agama Katolik",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["P. Agama Katolik", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran P. Agama Katolik di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-18",
    name: "Dra. Eti Sarwiyati",
    role: "Tenaga Pendidik",
    subject: "Kimia",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Kimia", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Kimia di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-19",
    name: "MF Endang Hardjati, S.Pd",
    role: "Tenaga Pendidik",
    subject: "BK",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["BK", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran BK di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-20",
    name: "Vincentius Arkalis Ken Hantoro, S.Pd",
    role: "Tenaga Pendidik",
    subject: "BK",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["BK", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran BK di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-21",
    name: "D. Dwi Sapta Nugraha, S.Pd",
    role: "Tenaga Pendidik",
    subject: "PKn",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["PKn", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran PKn di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-22",
    name: "Riyanti Krusita Butarbutar, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Ekonomi",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Ekonomi", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Ekonomi di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-23",
    name: "Gresia Palentina Hutagaol, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Biologi",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Biologi", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Biologi di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-24",
    name: "Dra. Maria Kusnawati",
    role: "Tenaga Pendidik",
    subject: "Geografi/Sej Lan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Geografi/Sej Lan", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Geografi/Sej Lan di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-25",
    name: "Yemima Angel Pethresia, S.Pd",
    role: "Tenaga Pendidik",
    subject: "BK",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["BK", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran BK di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-26",
    name: "Yeni Elisabet Nababan, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Biologi",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Biologi", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Biologi di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-27",
    name: "Sulistyanto, S.Pd",
    role: "Tenaga Pendidik",
    subject: "PKn",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["PKn", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran PKn di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-28",
    name: "Vincentius Tangga, S.Pd",
    role: "Tenaga Pendidik",
    subject: "P. Agama Katolik",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["P. Agama Katolik", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran P. Agama Katolik di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-29",
    name: "Aloysia Astri Cerelia, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Bahasa Inggris Mendalam",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Bahasa Inggris Mendalam", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Bahasa Inggris Mendalam di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-30",
    name: "Lim Sui Silitonga, S.Pd, M.Pd",
    role: "Tenaga Pendidik",
    subject: "Bahasa Inggris/EC",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Bahasa Inggris/EC", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran Bahasa Inggris/EC di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "t-31",
    name: "Rovinus Hewot Sabato, S.Pd",
    role: "Tenaga Pendidik",
    subject: "EC",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["EC", "Pendampingan siswa", "Pembelajaran aktif"],
    shortBio: "Mengajar mata pelajaran EC di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  }
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

export const staffMembers: Teacher[] = [
  {
    id: "s-1",
    name: "Chatarina Saminah",
    role: "Tenaga Kependidikan",
    subject: "Bendahara Sekolah",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Keuangan sekolah", "Administrasi", "Pelayanan internal"],
    shortBio: "Mendukung operasional sekolah sebagai bendahara sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-2",
    name: "Antonia Rini Indrastuti",
    role: "Tenaga Kependidikan",
    subject: "Pelayanan Administrasi Siswa",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Administrasi siswa", "Pelayanan sekolah", "Dokumentasi"],
    shortBio: "Mendukung layanan administrasi siswa di SMA Budhaya II Santo Agustinus.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-3",
    name: "Sumardio",
    role: "Tenaga Kependidikan",
    subject: "Pelayanan Administrasi Guru & Orang Tua",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Administrasi guru", "Pelayanan orang tua", "Koordinasi sekolah"],
    shortBio: "Mendukung layanan administrasi guru dan komunikasi dengan orang tua.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-4",
    name: "Skolastika Dwi Banowati",
    role: "Tenaga Kependidikan",
    subject: "Pelayanan Administrasi Siswa & Operator",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Administrasi siswa", "Operator sekolah", "Pelayanan data"],
    shortBio: "Mendukung administrasi siswa sekaligus tugas operator sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-5",
    name: "Nurul Widya Astuti, S.AP",
    role: "Tenaga Kependidikan",
    subject: "Pelayanan Perpustakaan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Perpustakaan", "Layanan literasi", "Pelayanan siswa"],
    shortBio: "Mendukung layanan perpustakaan dan literasi sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-6",
    name: "Suyanto",
    role: "Tenaga Kependidikan",
    subject: "Pembantu Umum & Kebersihan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Kebersihan", "Kerapian area sekolah", "Dukungan operasional"],
    shortBio: "Mendukung kebersihan dan kerapian lingkungan sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-7",
    name: "Ari Riyanto",
    role: "Tenaga Kependidikan",
    subject: "Pembantu Umum & Kebersihan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Kebersihan", "Kerapian area sekolah", "Dukungan operasional"],
    shortBio: "Mendukung kebersihan dan kerapian lingkungan sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-8",
    name: "Husen",
    role: "Tenaga Kependidikan",
    subject: "Pembantu Umum & Kebersihan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Kebersihan", "Kerapian area sekolah", "Dukungan operasional"],
    shortBio: "Mendukung kebersihan dan kerapian lingkungan sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
  },
  {
    id: "s-9",
    name: "Evita Gusnia",
    role: "Tenaga Kependidikan",
    subject: "Pembantu Umum & Kebersihan",
    photoUrl: "/teacher-placeholder.svg",
    education: "Data pendidikan belum ditampilkan",
    focus: ["Kebersihan", "Kerapian area sekolah", "Dukungan operasional"],
    shortBio: "Mendukung kebersihan dan kerapian lingkungan sekolah.",
    email: "smabudhaya2stagustinus@gmail.com",
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
    title: "Kalender Pendidikan 2025/2026",
    description:
      "Preview kalender pendidikan resmi SMA Budhaya II Santo Agustinus untuk tahun pelajaran 2025/2026. Pada tahap mockup FE, dokumen ini ditampilkan sebagai preview visual dan tombol unduh.",
    fileType: "PNG",
    updatedAt: "2025-06-21",
    previewImageUrl: "/kalender-pendidikan-2025-2026.png",
    fileUrl: "/kalender-pendidikan-2025-2026.png",
  },
];

export const extracurricularOptions: ExtracurricularItem[] = [
  { id: "ep-1", name: "Basket Putra", mentor: "Bpk. Jenly", schedule: "Hari Senin, Hari Rabu" },
  { id: "ep-2", name: "Basket Putri", mentor: "Bpk. Miharja", schedule: "Hari Senin, Hari Rabu" },
  { id: "ep-3", name: "Futsal", mentor: "Bpk. Miharja", schedule: "Hari Selasa, Hari Kamis" },
  { id: "ep-4", name: "Band", mentor: "Bpk. Karyana", schedule: "Hari Selasa, Hari Jumat" },
  { id: "ep-5", name: "Jurnalistik", mentor: "Bpk. Nugraha", schedule: "Hari Kamis" },
  { id: "ep-6", name: "E-Sport", mentor: "Ibu Fero", schedule: "Hari Kamis" },
  { id: "ep-7", name: "Modern Dance (MD)", mentor: "Ibu Ruth", schedule: "Hari Jumat" },
  { id: "ep-8", name: "Desain Grafis", mentor: "Bpk. Didik", schedule: "Hari Kamis" },
  { id: "ep-9", name: "Taekwondo", mentor: "Bpk. Andre", schedule: "Hari Jumat" },
  { id: "ep-10", name: "Bola Volly", mentor: "Bpk. Cholis", schedule: "Hari Kamis" },
  { id: "ep-11", name: "Paskibra", mentor: "Bpk. Yandri", schedule: "Tentatif" },
  { id: "ep-12", name: "Paduan Suara", mentor: "Ibu Nanik + Ibu Mukti", schedule: "Tentatif" },
  { id: "ep-13", name: "Tari Tradisional", mentor: "Ibu Retno", schedule: "Hari Kamis" },
  { id: "ep-14", name: "Teater Budhaya", mentor: "Bpk. Didik", schedule: "Hari Senin" },
];

export const extracurricularMandatory: ExtracurricularItem[] = [
  { id: "ew-1", name: "Pend. Iman Katolik", mentor: "Bpk. Wahyanto + Frater", schedule: "Hari Sabtu" },
  { id: "ew-2", name: "Pend. Iman Kristen", mentor: "Ibu Hotma + Ibu Derwi", schedule: "Hari Jumat" },
  { id: "ew-3", name: "Rohani Islam (Rois) Putra", mentor: "Bpk. Jaja", schedule: "Hari Jumat" },
  { id: "ew-4", name: "Rohani Islam (Rois) Putri", mentor: "Ibu Eti", schedule: "Hari Jumat" },
  { id: "ew-5", name: "Pramuka", mentor: "Pembina Pramuka", schedule: "Hari Rabu" },
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
