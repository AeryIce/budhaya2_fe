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
  subject?: string;
  photoUrl: string;
  education?: string;
  focus?: string[];
  shortBio: string;
  email?: string;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  shortBio: string;
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


  heroImageUrl: "/images/school/school-1.webp",
  about:
    "Mockup ini disusun sebagai gambaran website sekolah yang lebih dekat dengan kebutuhan nyata pihak sekolah setelah sesi presentasi dan diskusi lanjutan, sekaligus mulai memakai foto asli dari pihak sekolah pada beberapa bagian penting.",
  vision: "Menjadi komunitas belajar yang unggul, berkarakter, dan adaptif terhadap perkembangan zaman.",
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
    "Ruang kelas dan area belajar yang tertata",
    "Dokumentasi kegiatan sekolah yang mudah dipublikasi",
    "Pusat informasi dan unduhan resmi sekolah",
    "Galeri sekolah dengan caption yang memberi konteks",
  ],
  highlights: ["Berkarakter Pancasila", "Spiritualitas Santo Agustinus", "Informatif", "Mudah diakses"],
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
  name: "Drs. Leocardia Suparman, M.M.",
  role: "Kepala Sekolah SMA Budhaya 2 Santo Agustinus",
  photoUrl: "/images/principal/drs-leocardia-suparman-mm.webp",
  intro: "Sambutan kepala sekolah diletakkan di beranda agar halaman depan terasa lebih resmi, hangat, dan langsung memperkenalkan wajah kepemimpinan sekolah.",
  paragraphs: [
    "Selamat datang di website SMA Budhaya 2 Santo Agustinus. Website ini dirancang sebagai ruang informasi resmi sekolah sekaligus jembatan komunikasi yang rapi antara sekolah, siswa, orang tua, dan masyarakat.",
    "Kami berharap website ini dapat membantu setiap informasi penting, dokumentasi kegiatan, karya siswa, dan pengumuman sekolah diakses dengan mudah, nyaman, dan tetap terasa profesional dari berbagai perangkat.",
  ],
  highlights: ["Resmi", "Hangat", "Informatif", "Mudah diakses"],
};

export const teachers: Teacher[] = [
  {
    id: "t-1",
    name: "Aloysia Astri Cerelia. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/aloysia-astri-cerelia-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Aloysia Astri Cerelia. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-2",
    name: "Christiana Nanik Sulistyawati. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/christiana-nanik-sulistyawati-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Christiana Nanik Sulistyawati. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-3",
    name: "Christina Natalia Pardosi. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/christina-natalia-pardosi-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Christina Natalia Pardosi. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-4",
    name: "Derwi Malisa Silaen. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/derwi-malisa-silaen-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Derwi Malisa Silaen. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-5",
    name: "Didik Nurra Edy",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/didik-nurra-edy.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Didik Nurra Edy akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-6",
    name: "Dra. Eti Sarwiyati",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/dra-eti-sarwiyati.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Dra. Eti Sarwiyati akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-7",
    name: "Dra. Godeliva Kris Saptariningsih, M.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/dra-godeliva-kris-saptariningsih-m.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Dra. Godeliva Kris Saptariningsih, M.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-8",
    name: "Dra. Maria Kusnawati",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/dra-maria-kusnawati.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Dra. Maria Kusnawati akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-9",
    name: "Drs. Irwan Hutomo. M.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/drs-irwan-hutomo-m.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Drs. Irwan Hutomo. M.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-10",
    name: "Drs. Leocardia Suparman",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/principal/drs-leocardia-suparman-mm.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Drs. Leocardia Suparman akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-11",
    name: "Drs. Martinus Karyana",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/drs-martinus-karyana.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Drs. Martinus Karyana akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-12",
    name: "Drs. Robertus Artana",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/drs-robertus-artana.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Drs. Robertus Artana akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-13",
    name: "Drs. Yohanes Wahyanto",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/drs-yohanes-wahyanto.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Drs. Yohanes Wahyanto akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-14",
    name: "Dwi Sapta Nugraha, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/dwi-sapta-nugraha-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Dwi Sapta Nugraha, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-15",
    name: "Feronika Nababan, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/feronika-nababan-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Feronika Nababan, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-16",
    name: "Gresia Palentina Hutagaol. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/gresia-palentina-hutagaol-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Gresia Palentina Hutagaol. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-17",
    name: "Hotma Gomgom Berliana Simanjutak,S.Si",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/hotma-gomgom-berliana-simanjutak-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Hotma Gomgom Berliana Simanjutak,S.Si akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-18",
    name: "Kiki Rudh Hutagalung, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/kiki-rudh-hutagalung-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Kiki Rudh Hutagalung, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-19",
    name: "Lim Sui Silitonga. S.Pd, M.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/lim-sui-silitonga-s-pd-m.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Lim Sui Silitonga. S.Pd, M.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-20",
    name: "Miharja. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/miharja-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Miharja. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-21",
    name: "Riyanti Krusita Butar Butar S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/riyanti-krusita-butar-butar-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Riyanti Krusita Butar Butar S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-22",
    name: "Rovinus Hewot Sabato, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/rovinus-hewot-sabato-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Rovinus Hewot Sabato, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-23",
    name: "Sulistyanto, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/sulistyanto-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Sulistyanto, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-24",
    name: "Tarcicius Suhirman, S.Pd, M.M",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/tarcicius-suhirman-s-pd.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Tarcicius Suhirman, S.Pd, M.M akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-25",
    name: "Vicky Andarina, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/vicky-andarina-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Vicky Andarina, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-26",
    name: "Vincentius Arkalis Ken Hantoro RM, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/vincentius-arkalis-ken-hantoro-rm-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Vincentius Arkalis Ken Hantoro RM, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-27",
    name: "Vinsensius Tangga. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/vinsensius-tangga-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Vinsensius Tangga. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-28",
    name: "Yemima Angel Pethresia. S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/yemima-angel-pethresia-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Yemima Angel Pethresia. S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  },
  {
    id: "t-29",
    name: "Yeni Elisabeth Nababan, S.Pd",
    role: "Tenaga Pendidik",
    subject: "Mata pelajaran akan menyesuaikan data resmi sekolah",
    photoUrl: "/images/teachers/yeni-elisabeth-nababan-s.webp",
    education: "Data pendidikan akan disesuaikan bersama pihak sekolah",
    focus: ["Pembinaan siswa", "Pendampingan belajar", "Penguatan karakter"],
    shortBio: "Profil singkat Yeni Elisabeth Nababan, S.Pd akan menyesuaikan data resmi sekolah.",
    email: "",
  }
];

export const staffMembers: StaffMember[] = [
  {
    id: "s-1",
    name: "Antonia Rini Indrastuti",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/antonia-rini-indrastuti.webp",
    shortBio: "Profil singkat Antonia Rini Indrastuti akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-2",
    name: "Ari Riyanto",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/ari-riyanto.webp",
    shortBio: "Profil singkat Ari Riyanto akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-3",
    name: "Chatarina Saminah",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/chatarina-saminah.webp",
    shortBio: "Profil singkat Chatarina Saminah akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-4",
    name: "Evita Gusnia",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/evita-gusnia.webp",
    shortBio: "Profil singkat Evita Gusnia akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-5",
    name: "Husen",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/husen.webp",
    shortBio: "Profil singkat Husen akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-6",
    name: "Nurul Widya Astuti. S.AP",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/nurul-widya-astuti-s.webp",
    shortBio: "Profil singkat Nurul Widya Astuti. S.AP akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-7",
    name: "Skolastika Dwi Banowati",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/skolastika-dwi-banowati.webp",
    shortBio: "Profil singkat Skolastika Dwi Banowati akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-8",
    name: "Sumardio",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/sumardio.webp",
    shortBio: "Profil singkat Sumardio akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  },
  {
    id: "s-9",
    name: "Suyanto",
    role: "Karyawan Sekolah",
    photoUrl: "/images/staff/suyanto.webp",
    shortBio: "Profil singkat Suyanto akan menyesuaikan data tugas dan bidang layanan resmi sekolah.",
  }
];

export const newsPosts: InfoPost[] = [
  {
    slug: "literasi-dan-karakter-menjadi-fokus-semester-baru",
    title: "Literasi dan Karakter Menjadi Fokus Semester Baru",
    type: "Berita",
    date: "2026-04-16",
    excerpt: "Contoh berita resmi sekolah dengan tone yang lebih formal dan institusional.",
    imageUrl: "/images/school/school-1.webp",
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
    imageUrl: "/images/school/school-2.webp",
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
    imageUrl: "/images/school/school-1.webp",
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
    imageUrl: "/images/school/school-2.webp",
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
    imageUrl: "/images/school/school-1.webp",
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
    imageUrl: "/images/school/school-2.webp",
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
    coverImageUrl: "/images/school/school-1.webp",
    photos: [
      {
        id: "gce-1",
        caption: "Siswa tampil pada sesi pembukaan festival karya sekolah.",
        imageUrl: "/images/school/school-2.webp",
      },
      {
        id: "gce-2",
        caption: "Suasana kelas saat presentasi proyek kolaboratif berlangsung.",
        imageUrl: "/images/school/school-2.webp",
      },
      {
        id: "gce-3",
        caption: "Momen kebersamaan guru dan siswa pada kegiatan sekolah tematik.",
        imageUrl: "/images/school/school-1.webp",
      },
    ],
  },
  {
    id: "gc-2",
    title: "Galeri Ekstrakurikuler",
    description: "Ruang untuk memperlihatkan semangat, kreativitas, dan pembinaan minat bakat siswa.",
    coverImageUrl: "/images/school/school-1.webp",
    photos: [
      {
        id: "gck-1",
        caption: "Latihan band sekolah sebagai bagian dari pembinaan bakat musik siswa.",
        imageUrl: "/images/school/school-1.webp",
      },
      {
        id: "gck-2",
        caption: "Diskusi tim kreatif siswa saat menyiapkan karya presentasi.",
        imageUrl: "/images/school/school-1.webp",
      },
      {
        id: "gck-3",
        caption: "Aktivitas ekstrakurikuler yang memperkuat kolaborasi dan kepercayaan diri.",
        imageUrl: "/images/school/school-2.webp",
      },
    ],
  },
  {
    id: "gc-3",
    title: "Galeri Fasilitas",
    description: "Menampilkan lingkungan sekolah agar publik lebih mudah membayangkan suasana belajar.",
    coverImageUrl: "/images/school/school-2.webp",
    photos: [
      {
        id: "gcf-1",
        caption: "Tampak depan lingkungan sekolah yang menjadi identitas kampus.",
        imageUrl: "/images/school/school-1.webp",
      },
      {
        id: "gcf-2",
        caption: "Area sekolah yang tertata untuk mendukung kegiatan belajar dan pembinaan siswa.",
        imageUrl: "/images/school/school-2.webp",
      },
      {
        id: "gcf-3",
        caption: "Visual identitas sekolah untuk memperkuat kesan profesional pada website.",
        imageUrl: "/images/school/school-2.webp",
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
