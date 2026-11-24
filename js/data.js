const PORTFOLIO_DATA = {
  skills: [
    "HTML5 & CSS3",
    "Tailwind CSS",
    "TypeScript / JavaScript",
    "Next.js / React",
    "Database & Cloud Deployment",
    "UI/UX & Desain Grafis",
  ],

  projects: [
    {
      title: "Web Sekolah & Portal SI-TAQWA",
      badge: "Ekosistem Terpadu",
      icon: "school",
      theme: "emerald",
      url: "https://sistem-cms.vercel.app/si-taqwa",
      cta: "Buka Portal SI-TAQWA",
      description:
        "Situs resmi dan pusat layanan digital terintegrasi (SSO) yang menyatukan seluruh operasional sekolah: penerimaan murid baru (SPMB), manajemen akademik & rapor digital, presensi, jurnal harian, hingga layanan administrasi.",
    },
    {
      title: "WorkGrid — Collaborative Kanban",
      badge: "Realtime SaaS",
      icon: "kanban",
      theme: "sky",
      url: "https://work-grid-liard.vercel.app",
      cta: "Coba Demo WorkGrid",
      description:
        "Aplikasi manajemen proyek berbasis Kanban dengan sinkronisasi Supabase Realtime, optimistic drag-and-drop, filter prioritas, serta isolasi keamanan multi-tenant Row Level Security (RLS) dengan akun demo 1-klik.",
    },
    {
      title: "DeskSpace HQ — Virtual Office",
      badge: "2D Virtual Office",
      icon: "building-2",
      theme: "indigo",
      url: "https://deskspace-gilt.vercel.app",
      cta: "Masuk ke DeskSpace HQ",
      description:
        "Ruang kerja virtual 2D multiplayer interaktif berbasis HTML5 Canvas dan Supabase Realtime. Dilengkapi kustomisasi avatar chibi, deteksi zona dan kursi otomatis, spatial chat di atas karakter, serta notifikasi Wave beraudio.",
    },
  ],

  contacts: [
    {
      label: "Email",
      handle: "ekiyogawanto@gmail.com",
      url: "mailto:ekiyogawanto@gmail.com",
      hoverClass: "hover:border-brand-500 hover:bg-brand-50/30",
      iconWrapClass: "group-hover:bg-brand-100 group-hover:text-brand-700",
      iconHtml: '<i data-lucide="mail" class="w-4 h-4"></i>',
    },
    {
      label: "LinkedIn",
      handle: "/in/ekiyogawanto",
      url: "https://www.linkedin.com/in/ekiyogawanto/",
      hoverClass: "hover:border-blue-500 hover:bg-blue-50/30",
      iconWrapClass: "group-hover:bg-blue-100 group-hover:text-blue-700",
      iconHtml:
        '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
    },
    {
      label: "Instagram",
      handle: "@10_kiyo",
      url: "https://www.instagram.com/10_kiyo",
      hoverClass: "hover:border-pink-500 hover:bg-pink-50/30",
      iconWrapClass: "group-hover:bg-pink-100 group-hover:text-pink-700",
      iconHtml:
        '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
    },
    {
      label: "YouTube",
      handle: "@10_kiyo",
      url: "https://www.youtube.com/@10_kiyo",
      hoverClass: "hover:border-red-500 hover:bg-red-50/30",
      iconWrapClass: "group-hover:bg-red-100 group-hover:text-red-700",
      iconHtml:
        '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    },
    {
      label: "Letterboxd",
      handle: "910_kiyo",
      url: "https://letterboxd.com/910_kiyo/",
      hoverClass: "hover:border-orange-500 hover:bg-orange-50/30",
      iconWrapClass: "group-hover:bg-orange-100 group-hover:text-orange-700",
      iconHtml: '<i data-lucide="film" class="w-4 h-4"></i>',
    },
    {
      label: "Strava",
      handle: "Catatan Lari & Sepeda",
      url: "https://bit.ly/strava-kiyo",
      hoverClass: "hover:border-orange-600 hover:bg-orange-50/30",
      iconWrapClass: "group-hover:bg-orange-100 group-hover:text-orange-600",
      iconHtml: '<i data-lucide="activity" class="w-4 h-4"></i>',
    },
  ],
};
