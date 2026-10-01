export type Language = "en" | "id" | "zh";

const en = {
  nav: {
    features: "Features",
    subjects: "Subjects",
    pricing: "Pricing",
    faq: "FAQ",
    login: "Log in",
    startLearning: "Coming soon",
  },
  photoHero: {
    back: "← Back to NAO Group",
    kicker: "THINKNAO / INDEPENDENT CSCA PRACTICE",
    headingLead: "Big steps start with",
    headingAccent: "small practice.",
    body: "Prepare for the CSCA at your own pace. Guided practice, progress tracking, and confidence for your study goals.",
    button: "Explore ThinkNAO",
    foot: "INDEPENDENT PRACTICE",
    imageAlt: "A student studying independently with notes and a laptop",
  },
  hero: {
    title1: "From today's practice",
    titleConnector: "to",
    title2: "tomorrow's campus.",
    subtitle:
      "Master the CSCA with bilingual, verified practice that adapts to you—across Maths, Physics, Chemistry, and Academic Chinese.",
    ctaPrimary: "Start learning free",
    ctaSecondary: "See how it works",
    scrollCue: "Scroll to reveal",
    accuracyLabel: "Accuracy",
    accuracyValue: "+18% this week",
    achievementLabel: "New achievement",
    achievementValue: "Physics climber",
  },
  trust: {
    headline: "ONE SMARTER PATH TO THE CSCA",
    verified: "Verified questions",
    bilingual: "English + Chinese",
    unlimited: "Unlimited practice",
    adaptive: "Adaptive difficulty",
  },
  features: {
    sectionNumber: "01",
    label: "CORE FEATURES",
    heading1: "Everything you need.",
    heading2: "Nothing you don't.",
    subheading:
      "ThinkNAO turns a complicated exam journey into one focused, personal learning loop.",
    items: [
      {
        eyebrow: "01 · Your always-on tutor",
        title: "AI assistant that teaches, not just answers.",
        body: "Ask in English or Chinese. Get a guided hint, a clear explanation, and the next step—grounded in verified answer keys.",
      },
      {
        eyebrow: "02 · Practice without limits",
        title: "Questions that grow with you.",
        body: "When the curated bank runs out, ThinkNAO generates more. Difficulty ratios adapt gradually to your real performance.",
      },
      {
        eyebrow: "03 · Exam-day confidence",
        title: "Full-length mock exams.",
        body: "Train with the real CSCA rhythm: timed, structured, and scored with a useful post-exam breakdown.",
      },
      {
        eyebrow: "04 · Friendly competition",
        title: "A leaderboard worth climbing.",
        body: "Build a study streak, climb the monthly ranks, and unlock winner advantages and community rewards.",
      },
    ],
    aiChat: {
      userMsg: "Why does acceleration stay constant here?",
      naoMsg:
        "Look at the net force first. If the force and mass stay constant, what does a = F / m tell you?",
      opt1: "Force",
      opt2: "Acceleration",
      opt3: "Velocity",
    },
    practice: {
      label: "Adaptive difficulty",
      setMix: "Current set mix",
      easy: "30% easy",
      medium: "50% medium",
      hard: "20% hard",
      generated: "New verified set generated",
    },
    exam: {
      title: "MOCK EXAM · 01",
      questionOf: "QUESTION 18 OF 40",
      question: "Which expression represents the total mechanical energy?",
    },
  },
  subjects: {
    sectionNumber: "02",
    label: "COVERED SUBJECTS",
    heading1: "Five subjects.",
    heading2: "One platform.",
    subheading:
      "Everything you need for the CSCA—organised into focused, adaptive learning paths across science and language.",
    items: [
      {
        label: "Mathematics",
        description:
          "Functions, calculus, algebra, and the quantitative reasoning every CSCA problem demands.",
      },
      {
        label: "Physics",
        description:
          "Mechanics, thermodynamics, and electromagnetism—understand the principles behind every formula.",
      },
      {
        label: "Chemistry",
        description:
          "Atomic structure, reactions, and organic chemistry—grounded in verified CSCA content.",
      },
      {
        label: "STEM Chinese",
        description:
          "Master the technical Mandarin vocabulary needed to communicate science fluently in Chinese.",
      },
      {
        label: "Humanities Chinese",
        description:
          "Academic reading, writing, and critical analysis in Mandarin for the humanities track.",
      },
    ],
  },
  community: {
    sectionNumber: "02",
    label: "COMMUNITY",
    heading: "Join the GatherNAO Discord Community",
    body: "Connect with peers, join study discussions, ask questions, share your progress, and stay motivated together.",
    online: "online",
    joinDiscord: "Join Discord",
  },
  madeFor: {
    sectionNumber: "03",
    label: "MADE FOR",
    heading1: "Built for every",
    heading2: "CSCA aspirant.",
    subheading:
      "Whether you're in high school or already learning independently, ThinkNAO adapts to your journey.",
    doodle1: "Simple steps,",
    doodle2: "real progress.",
    audiences: [
      {
        title: "High school students",
        body: "Start early, build strong foundations, and stay ready ahead of the curve.",
        benefits: ["Build core concepts", "Smart practice", "Track milestones"],
      },
      {
        title: "Independent learners",
        body: "Self-paced learning with AI guidance every step of the way.",
        benefits: ["Flexible study", "Adaptive planner", "Progress tracking"],
      },
      {
        title: "University applicants",
        body: "Target your dream university with the right exam preparation.",
        benefits: ["Accurate insights", "Mock exams", "Apply confidently"],
      },
    ],
  },
  testimonials: {
    sectionNumber: "04",
    label: "LEARNER STORIES",
    heading1: "Small wins.",
    heading2: "Big destinations.",
    ratingLabel: "Early learner rating",
    items: [
      {
        quote:
          "For the first time, I can see exactly why my answer was wrong—and what to do next.",
        name: "Nadia Putri",
        detail: "CSCA applicant · Jakarta",
        initials: "NP",
      },
      {
        quote:
          "The bilingual explanations make technical Chinese feel much less intimidating.",
        name: "Kevin Wijaya",
        detail: "Science track · Surabaya",
        initials: "KW",
      },
      {
        quote:
          "It feels like the practice sets understand when I am ready for harder questions.",
        name: "Felicia Tan",
        detail: "Independent learner · Medan",
        initials: "FT",
      },
    ],
  },
  pricing: {
    sectionNumber: "05",
    label: "PRICING",
    comingSoonLabel: "COMING SOON",
    comingSoonTitle: "Something good is on its way.",
    comingSoonBody: "ThinkNAO plans are being prepared. We will share the details here when they are ready. Have a question in the meantime?",
    comingSoonAction: "Ask NAO Group",
    heading1: "Pick your plan.",
    heading2: "Full access, every tier.",
    subheading:
      "Full access to everything ThinkNAO offers. Pick the commitment that works for you — no hidden fees.",
    mostPopular: "MOST POPULAR",
    previousPlans: "Previous plans",
    nextPlans: "Next plans",
    perMonth: "/ month",
    plans: [
      {
        id: "THINK-FREE-TRIAL",
        name: "Free Access",
        price: "Free",
        billingNote: "No expiry — access ends when usage limits are reached",
        savingsBadge: null as string | null,
        cta: "Start for free",
        popular: false,
        accessLabel: "FREE PLAN LIMITS",
        access: ["10 fixed questions total", "1 topic per subject", "1 mock exam", "3 chatbot conversations total", "No random question generation", "Same questions for every free member"],
      },
      {
        id: "THINK-1MONTH",
        name: "1 Month",
        price: "99k",
        billingNote: "One-time payment of Rp99.000 for 1 month access" as string | null,
        savingsBadge: null as string | null,
        cta: "Purchase now",
        popular: false,
        accessLabel: "FULL ACCESS",
        access: ["Unlimited practice questions", "Unlimited mock exams", "50 chatbot conversations/day"],
      },
      {
        id: "THINK-3MONTH",
        name: "3 Months",
        price: "89.7k",
        billingNote: "One-time payment of Rp269.000 for 3 months access",
        savingsBadge: "SAVE 9%",
        cta: "Purchase now",
        popular: true,
        accessLabel: "FULL ACCESS",
        access: ["Unlimited practice questions", "Unlimited mock exams", "50 chatbot conversations/day"],
      },
      {
        id: "THINK-6MONTH",
        name: "6 Months",
        price: "83.2k",
        billingNote: "One-time payment of Rp499.000 for 6 months access",
        savingsBadge: "SAVE 16%",
        cta: "Purchase now",
        popular: false,
        accessLabel: "FULL ACCESS",
        access: ["Unlimited practice questions", "Unlimited mock exams", "50 chatbot conversations/day"],
      },
    ],
  },
  faq: {
    askWhatsapp: "Ask us via WhatsApp",
    askEmail: "Ask us via Email",
    sectionNumber: "06",
    label: "FAQ",
    heading: "Still curious?",
    subheading:
      "Here are the answers students ask us most. Need more help? Say hello in the community.",
    askUs: "Ask us anything",
    items: [
      {
        question: "What is the CSCA?",
        answer:
          "The CSCA is an entrance assessment used in the Chinese university application journey. ThinkNAO helps Indonesian students prepare across Maths, Physics, Chemistry, and Academic Chinese.",
      },
      {
        question: "How does unlimited practice work?",
        answer:
          "You begin with a curated question bank matched to CSCA-style topics. After you finish those questions, ThinkNAO can generate new, verified practice in the same style so your learning does not stop.",
      },
      {
        question: "Will the difficulty change automatically?",
        answer:
          "Yes. ThinkNAO gradually adjusts the ratio of easy, medium, and hard questions in each set based on your performance—without sudden difficulty spikes.",
      },
      {
        question: "Can I study in English and Chinese?",
        answer:
          "Yes. The experience is bilingual by design, so you can build subject mastery and the academic language confidence needed for the exam.",
      },
    ],
  },
  footer: {
    tagline: "YOUR CAMPUS IS CLOSER THAN IT FEELS.",
    heading1: "Ready to make",
    heading2: "the first move?",
    cta: "Start learning free",
    copyright: "Built for ambitious learners.",
    links: {
      features: "Features",
      community: "Community",
      pricing: "Pricing",
      faq: "FAQ",
    },
  },
  dashboard: {
    greeting: "GOOD MORNING, ALEX",
    subtitle: "Ready for today's climb?",
    streak: "day streak",
    learn: "Learn",
    practice: "Practice",
    ranks: "Ranks",
    profile: "Profile",
    continueLabel: "CONTINUE LEARNING",
    subject: "Physics · Mechanics",
    progressText: "7 of 10 questions complete",
    weeklyMastery: "WEEKLY MASTERY",
    chineseTopic: "Academic Chinese",
    chineseDetail: "Vocabulary · Set 04",
    chineseTime: "8 min review",
    mathsTopic: "Maths",
    mathsDetail: "Functions · Medium",
    mathsLabel: "Adaptive set",
  },
};

const id: typeof en = {
  nav: {
    features: "Fitur",
    subjects: "Mata Pelajaran",
    pricing: "Harga",
    faq: "FAQ",
    login: "Masuk",
    startLearning: "Segera hadir",
  },
  photoHero: {
    back: "← Kembali ke NAO Group",
    kicker: "THINKNAO / LATIHAN CSCA MANDIRI",
    headingLead: "Langkah besar dimulai dari",
    headingAccent: "latihan kecil.",
    body: "Persiapkan CSCA sesuai ritmemu. Latihan terarah, pantau progres, dan bangun percaya diri untuk tujuan studimu.",
    button: "Jelajahi ThinkNAO",
    foot: "LATIHAN MANDIRI",
    imageAlt: "Calon mahasiswa belajar mandiri dengan catatan dan laptop",
  },
  hero: {
    title1: "Dari latihan hari ini",
    titleConnector: "",
    title2: "menuju kampus impianmu.",
    subtitle:
      "Kuasai CSCA dengan latihan bilingual terverifikasi yang adaptif—mencakup Matematika, Fisika, Kimia, dan Bahasa Mandarin Akademik.",
    ctaPrimary: "Mulai belajar gratis",
    ctaSecondary: "Lihat cara kerjanya",
    scrollCue: "Gulir untuk melihat",
    accuracyLabel: "Akurasi",
    accuracyValue: "+18% minggu ini",
    achievementLabel: "Pencapaian baru",
    achievementValue: "Pemanjat Fisika",
  },
  trust: {
    headline: "SATU JALUR LEBIH CERDAS MENUJU CSCA",
    verified: "Soal terverifikasi",
    bilingual: "Indonesia + Mandarin",
    unlimited: "Latihan tak terbatas",
    adaptive: "Tingkat kesulitan adaptif",
  },
  features: {
    sectionNumber: "01",
    label: "FITUR UTAMA",
    heading1: "Semua yang kamu butuhkan.",
    heading2: "Tanpa yang tidak perlu.",
    subheading:
      "ThinkNAO mengubah perjalanan ujian yang rumit menjadi satu siklus belajar yang fokus dan personal.",
    items: [
      {
        eyebrow: "01 · Tutor yang selalu siap",
        title: "Asisten AI yang mengajar, bukan sekadar menjawab.",
        body: "Tanya dalam Bahasa Indonesia atau Mandarin. Dapatkan petunjuk terarah, penjelasan jelas, dan langkah berikutnya—berdasarkan kunci jawaban terverifikasi.",
      },
      {
        eyebrow: "02 · Latihan tanpa batas",
        title: "Soal yang berkembang bersamamu.",
        body: "Ketika bank soal kurasi habis, ThinkNAO menghasilkan lebih banyak. Rasio kesulitan beradaptasi secara bertahap dengan performa nyatamu.",
      },
      {
        eyebrow: "03 · Percaya diri di hari ujian",
        title: "Simulasi ujian penuh.",
        body: "Berlatih dengan ritme CSCA sesungguhnya: terjadwal, terstruktur, dan dinilai dengan analisis pasca-ujian yang bermanfaat.",
      },
      {
        eyebrow: "04 · Kompetisi yang menyenangkan",
        title: "Papan peringkat yang patut diperjuangkan.",
        body: "Bangun streak belajar, naiki peringkat bulanan, dan dapatkan keuntungan pemenang serta hadiah komunitas.",
      },
    ],
    aiChat: {
      userMsg: "Mengapa percepatan tetap konstan di sini?",
      naoMsg:
        "Perhatikan gaya neto terlebih dahulu. Jika gaya dan massa tetap konstan, apa yang dikatakan a = F / m?",
      opt1: "Gaya",
      opt2: "Percepatan",
      opt3: "Kecepatan",
    },
    practice: {
      label: "Tingkat kesulitan adaptif",
      setMix: "Komposisi set saat ini",
      easy: "30% mudah",
      medium: "50% sedang",
      hard: "20% sulit",
      generated: "Set terverifikasi baru dibuat",
    },
    exam: {
      title: "SIMULASI UJIAN · 01",
      questionOf: "SOAL 18 DARI 40",
      question: "Ekspresi mana yang mewakili total energi mekanik?",
    },
  },
  subjects: {
    sectionNumber: "02",
    label: "MATA PELAJARAN",
    heading1: "Lima mata pelajaran.",
    heading2: "Satu platform.",
    subheading:
      "Semua yang kamu butuhkan untuk CSCA—diorganisasi dalam jalur belajar adaptif yang fokus mencakup sains dan bahasa.",
    items: [
      {
        label: "Matematika",
        description:
          "Fungsi, kalkulus, aljabar, dan penalaran kuantitatif yang dibutuhkan dalam setiap soal CSCA.",
      },
      {
        label: "Fisika",
        description:
          "Mekanika, termodinamika, dan elektromagnetisme—pahami prinsip di balik setiap rumus.",
      },
      {
        label: "Kimia",
        description:
          "Struktur atom, reaksi, dan kimia organik—berdasarkan konten CSCA yang terverifikasi.",
      },
      {
        label: "Mandarin Sains",
        description:
          "Kuasai kosakata Mandarin teknis yang dibutuhkan untuk berkomunikasi sains secara lancar.",
      },
      {
        label: "Mandarin Humaniora",
        description:
          "Membaca akademis, menulis, dan analisis kritis dalam Bahasa Mandarin untuk jalur humaniora.",
      },
    ],
  },
  community: {
    sectionNumber: "02",
    label: "KOMUNITAS",
    heading: "Bergabung dengan Komunitas Discord GatherNAO",
    body: "Terhubung dengan sesama pelajar, ikuti diskusi belajar, ajukan pertanyaan, bagikan kemajuanmu, dan tetap termotivasi bersama.",
    online: "online",
    joinDiscord: "Gabung Discord",
  },
  madeFor: {
    sectionNumber: "03",
    label: "DIBUAT UNTUK",
    heading1: "Dibangun untuk para",
    heading2: "pejuang CSCA.",
    subheading:
      "Baik kamu masih SMA atau sudah belajar mandiri, ThinkNAO beradaptasi dengan perjalananmu.",
    doodle1: "Langkah sederhana,",
    doodle2: "kemajuan nyata.",
    audiences: [
      {
        title: "Siswa SMA",
        body: "Mulai lebih awal, bangun fondasi yang kuat, dan tetap siap melampaui ekspektasi.",
        benefits: ["Bangun konsep dasar", "Latihan cerdas", "Pantau pencapaian"],
      },
      {
        title: "Pelajar mandiri",
        body: "Belajar sesuai kecepatan sendiri dengan panduan AI di setiap langkah.",
        benefits: ["Belajar fleksibel", "Perencana adaptif", "Lacak kemajuan"],
      },
      {
        title: "Calon mahasiswa",
        body: "Targetkan universitas impianmu dengan persiapan ujian yang tepat.",
        benefits: ["Wawasan akurat", "Ujian simulasi", "Daftar dengan percaya diri"],
      },
    ],
  },
  testimonials: {
    sectionNumber: "04",
    label: "CERITA PELAJAR",
    heading1: "Pencapaian kecil.",
    heading2: "Tujuan besar.",
    ratingLabel: "Rating pelajar awal",
    items: [
      {
        quote:
          "Untuk pertama kalinya, aku bisa melihat dengan jelas mengapa jawabanku salah—dan apa yang harus dilakukan selanjutnya.",
        name: "Nadia Putri",
        detail: "Calon CSCA · Jakarta",
        initials: "NP",
      },
      {
        quote:
          "Penjelasan bilingual membuat Mandarin teknis terasa jauh lebih mudah dipahami.",
        name: "Kevin Wijaya",
        detail: "Jalur sains · Surabaya",
        initials: "KW",
      },
      {
        quote:
          "Rasanya seperti paket soal yang mengerti kapan aku siap untuk pertanyaan yang lebih sulit.",
        name: "Felicia Tan",
        detail: "Pelajar mandiri · Medan",
        initials: "FT",
      },
    ],
  },
  pricing: {
    sectionNumber: "05",
    label: "HARGA",
    comingSoonLabel: "SEGERA HADIR",
    comingSoonTitle: "Pilihan paket sedang disiapkan.",
    comingSoonBody: "Detail paket ThinkNAO akan kami tampilkan di sini saat sudah siap. Sementara itu, kamu bisa tanya langsung ke tim NAO Group.",
    comingSoonAction: "Tanya NAO Group",
    heading1: "Pilih paketmu.",
    heading2: "Akses penuh, semua tier.",
    subheading:
      "Akses penuh ke semua fitur ThinkNAO. Pilih komitmen yang sesuai denganmu — tanpa biaya tersembunyi.",
    mostPopular: "PALING POPULER",
    previousPlans: "Paket sebelumnya",
    nextPlans: "Paket berikutnya",
    perMonth: "/ bulan",
    plans: [
      {
        id: "THINK-FREE-TRIAL",
        name: "Akses Gratis",
        price: "Gratis",
        billingNote: "Tanpa masa berlaku — akses berhenti saat batas pemakaian tercapai",
        savingsBadge: null as string | null,
        cta: "Mulai gratis",
        popular: false,
        accessLabel: "BATAS PAKET GRATIS",
        access: ["Total 10 soal tetap", "1 topik per mata pelajaran", "1 mock exam", "Total 3 percakapan chatbot", "Tidak ada generate soal acak", "Soal yang sama untuk semua member gratis"],
      },
      {
        id: "THINK-1MONTH",
        name: "1 Bulan",
        price: "99k",
        billingNote: "Sekali bayar Rp99.000 untuk akses 1 bulan" as string | null,
        savingsBadge: null as string | null,
        cta: "Beli sekarang",
        popular: false,
        accessLabel: "AKSES PENUH",
        access: ["Latihan soal tanpa batas", "Mock exam tanpa batas", "50 percakapan chatbot/hari"],
      },
      {
        id: "THINK-3MONTH",
        name: "3 Bulan",
        price: "89,7k",
        billingNote: "Sekali bayar Rp269.000 untuk akses 3 bulan",
        savingsBadge: "HEMAT 9%",
        cta: "Beli sekarang",
        popular: true,
        accessLabel: "AKSES PENUH",
        access: ["Latihan soal tanpa batas", "Mock exam tanpa batas", "50 percakapan chatbot/hari"],
      },
      {
        id: "THINK-6MONTH",
        name: "6 Bulan",
        price: "83,2k",
        billingNote: "Sekali bayar Rp499.000 untuk akses 6 bulan",
        savingsBadge: "HEMAT 16%",
        cta: "Beli sekarang",
        popular: false,
        accessLabel: "AKSES PENUH",
        access: ["Latihan soal tanpa batas", "Mock exam tanpa batas", "50 percakapan chatbot/hari"],
      },
    ],
  },
  faq: {
    askWhatsapp: "Tanya via WhatsApp",
    askEmail: "Tanya via Email",
    sectionNumber: "06",
    label: "FAQ",
    heading: "Masih penasaran?",
    subheading:
      "Berikut jawaban pertanyaan yang paling sering diajukan siswa. Butuh bantuan lebih? Sapa kami di komunitas.",
    askUs: "Tanya kami apa saja",
    items: [
      {
        question: "Apa itu CSCA?",
        answer:
          "CSCA adalah ujian masuk yang digunakan dalam jalur pendaftaran universitas di Tiongkok. ThinkNAO membantu siswa Indonesia mempersiapkan diri untuk Matematika, Fisika, Kimia, dan Bahasa Mandarin Akademik.",
      },
      {
        question: "Bagaimana cara kerja latihan tak terbatas?",
        answer:
          "Kamu mulai dengan bank soal kurasi yang sesuai dengan topik bergaya CSCA. Setelah soal-soal tersebut selesai, ThinkNAO dapat menghasilkan latihan baru yang terverifikasi dengan gaya yang sama sehingga belajarmu tidak berhenti.",
      },
      {
        question: "Apakah tingkat kesulitan berubah secara otomatis?",
        answer:
          "Ya. ThinkNAO secara bertahap menyesuaikan rasio soal mudah, sedang, dan sulit dalam setiap set berdasarkan performamu—tanpa lonjakan kesulitan mendadak.",
      },
      {
        question: "Bisakah aku belajar dalam Bahasa Inggris dan Mandarin?",
        answer:
          "Ya. Pengalaman ini dirancang bilingual, sehingga kamu dapat membangun penguasaan mata pelajaran dan kepercayaan bahasa akademis yang dibutuhkan untuk ujian.",
      },
    ],
  },
  footer: {
    tagline: "KAMPUSMU LEBIH DEKAT DARI YANG KAMU RASAKAN.",
    heading1: "Siap melangkah",
    heading2: "yang pertama?",
    cta: "Mulai belajar gratis",
    copyright: "Dibangun untuk pelajar yang ambisius.",
    links: {
      features: "Fitur",
      community: "Komunitas",
      pricing: "Harga",
      faq: "FAQ",
    },
  },
  dashboard: {
    greeting: "SELAMAT PAGI, ALEX",
    subtitle: "Siap mendaki hari ini?",
    streak: "hari berturut-turut",
    learn: "Belajar",
    practice: "Latihan",
    ranks: "Peringkat",
    profile: "Profil",
    continueLabel: "LANJUT BELAJAR",
    subject: "Fisika · Mekanika",
    progressText: "7 dari 10 soal selesai",
    weeklyMastery: "PENGUASAAN MINGGUAN",
    chineseTopic: "Bahasa Mandarin",
    chineseDetail: "Kosakata · Set 04",
    chineseTime: "8 menit",
    mathsTopic: "Matematika",
    mathsDetail: "Fungsi · Sedang",
    mathsLabel: "Set adaptif",
  },
};

const zh: typeof en = {
  nav: {
    features: "功能",
    subjects: "科目",
    pricing: "价格",
    faq: "常见问题",
    login: "登录",
    startLearning: "即将推出",
  },
  photoHero: {
    back: "← 返回 NAO Group",
    kicker: "THINKNAO / CSCA 自主练习",
    headingLead: "大步向前，",
    headingAccent: "始于点滴练习。",
    body: "按照你的节奏备考 CSCA。有方向的练习、进度追踪，为你的求学目标建立自信。",
    button: "探索 ThinkNAO",
    foot: "自主练习",
    imageAlt: "学生借助笔记和笔记本电脑自主学习",
  },
  hero: {
    title1: "从今天的练习",
    titleConnector: "",
    title2: "到明天的校园。",
    subtitle:
      "通过双语、经验证的自适应练习掌握CSCA考试——涵盖数学、物理、化学和学术汉语。",
    ctaPrimary: "免费开始学习",
    ctaSecondary: "了解工作原理",
    scrollCue: "向下滚动",
    accuracyLabel: "准确率",
    accuracyValue: "本周 +18%",
    achievementLabel: "新成就",
    achievementValue: "物理攀登者",
  },
  trust: {
    headline: "通往CSCA的最佳路径",
    verified: "经过验证的题目",
    bilingual: "英语 + 汉语",
    unlimited: "无限练习",
    adaptive: "自适应难度",
  },
  features: {
    sectionNumber: "01",
    label: "核心功能",
    heading1: "您所需要的一切。",
    heading2: "没有多余的东西。",
    subheading:
      "ThinkNAO将复杂的考试之旅转变为一个专注的个性化学习循环。",
    items: [
      {
        eyebrow: "01 · 全天候导师",
        title: "AI助手传授知识，而不只是给出答案。",
        body: "用英语或中文提问。获得引导提示、清晰解释和下一步骤——基于经过验证的答案解析。",
      },
      {
        eyebrow: "02 · 无限练习",
        title: "随你成长的题目。",
        body: "当精选题库耗尽时，ThinkNAO会生成更多题目。难度比例根据您的实际表现逐渐调整。",
      },
      {
        eyebrow: "03 · 考试当天的信心",
        title: "全真模拟考试。",
        body: "按照真实CSCA节奏训练：计时、结构化，并提供有用的考后分析。",
      },
      {
        eyebrow: "04 · 友好竞争",
        title: "值得攀登的排行榜。",
        body: "建立学习连胜，攀升月度排名，解锁获胜者优势和社区奖励。",
      },
    ],
    aiChat: {
      userMsg: "为什么这里的加速度保持不变？",
      naoMsg:
        "先看合力。如果力和质量保持不变，a = F / m 告诉你什么？",
      opt1: "力",
      opt2: "加速度",
      opt3: "速度",
    },
    practice: {
      label: "自适应难度",
      setMix: "当前题目比例",
      easy: "30% 简单",
      medium: "50% 中等",
      hard: "20% 困难",
      generated: "已生成新的经验证题组",
    },
    exam: {
      title: "模拟考试 · 01",
      questionOf: "第 18 题，共 40 题",
      question: "哪个表达式代表总机械能？",
    },
  },
  subjects: {
    sectionNumber: "02",
    label: "涵盖科目",
    heading1: "五个科目。",
    heading2: "一个平台。",
    subheading:
      "CSCA所需的一切——组织成专注的自适应学习路径，涵盖理科和语言。",
    items: [
      {
        label: "数学",
        description:
          "函数、微积分、代数以及每道CSCA题目所需的定量推理。",
      },
      {
        label: "物理",
        description:
          "力学、热力学和电磁学——理解每个公式背后的原理。",
      },
      {
        label: "化学",
        description:
          "原子结构、反应和有机化学——基于经过验证的CSCA内容。",
      },
      {
        label: "理科汉语",
        description:
          "掌握用中文流利表达科学所需的专业普通话词汇。",
      },
      {
        label: "文科汉语",
        description:
          "适用于人文学科的普通话学术阅读、写作和批判性分析。",
      },
    ],
  },
  community: {
    sectionNumber: "02",
    label: "社区",
    heading: "加入GatherNAO Discord社区",
    body: "与同学交流，参与学习讨论，提问，分享进度，共同保持动力。",
    online: "在线",
    joinDiscord: "加入Discord",
  },
  madeFor: {
    sectionNumber: "03",
    label: "专为谁设计",
    heading1: "为每一位",
    heading2: "CSCA备考者打造。",
    subheading:
      "无论您是高中生还是独立学习者，ThinkNAO都能适应您的学习旅程。",
    doodle1: "简单步骤，",
    doodle2: "真实进步。",
    audiences: [
      {
        title: "高中学生",
        body: "及早开始，打好基础，在竞争中保持领先。",
        benefits: ["建立核心概念", "智能练习", "追踪里程碑"],
      },
      {
        title: "自主学习者",
        body: "在AI的全程引导下，按照自己的节奏学习。",
        benefits: ["灵活学习", "自适应规划", "进度追踪"],
      },
      {
        title: "大学申请者",
        body: "通过正确的考试准备，瞄准梦想中的大学。",
        benefits: ["精准洞察", "模拟考试", "自信申请"],
      },
    ],
  },
  testimonials: {
    sectionNumber: "04",
    label: "学习者故事",
    heading1: "点滴进步。",
    heading2: "伟大目标。",
    ratingLabel: "早期学习者评分",
    items: [
      {
        quote:
          "我第一次能够清楚地看到我的答案错在哪里——以及下一步该怎么做。",
        name: "Nadia Putri",
        detail: "CSCA申请者 · 雅加达",
        initials: "NP",
      },
      {
        quote: "双语解释让专业中文感觉没那么难以理解了。",
        name: "Kevin Wijaya",
        detail: "理科方向 · 泗水",
        initials: "KW",
      },
      {
        quote: "感觉练习题集能了解我什么时候准备好迎接更难的题目。",
        name: "Felicia Tan",
        detail: "独立学习者 · 棉兰",
        initials: "FT",
      },
    ],
  },
  pricing: {
    sectionNumber: "05",
    label: "价格",
    comingSoonLabel: "即将推出",
    comingSoonTitle: "套餐即将公布。",
    comingSoonBody: "ThinkNAO 的套餐详情准备就绪后会在这里公布。如有疑问，欢迎联系 NAO Group。",
    comingSoonAction: "联系 NAO Group",
    heading1: "选择您的方案。",
    heading2: "全面访问，每个层级。",
    subheading:
      "完全访问ThinkNAO提供的一切。选择适合您的承诺期 — 无隐藏费用。",
    mostPopular: "最受欢迎",
    previousPlans: "上一组套餐",
    nextPlans: "下一组套餐",
    perMonth: "/ 月",
    plans: [
      {
        id: "THINK-FREE-TRIAL",
        name: "免费使用",
        price: "免费",
        billingNote: "无时间限制，用完免费额度后结束",
        savingsBadge: null as string | null,
        cta: "开始免费使用",
        popular: false,
        accessLabel: "免费方案限制",
        access: ["共10道固定题目", "每科仅1个主题", "1次模拟考试", "共3次聊天机器人对话", "不支持随机生成题目", "所有免费会员使用相同题目"],
      },
      {
        id: "THINK-1MONTH",
        name: "1个月",
        price: "99k",
        billingNote: "一次性支付Rp99.000，获得1个月使用权限" as string | null,
        savingsBadge: null as string | null,
        cta: "立即购买",
        popular: false,
        accessLabel: "完整权限",
        access: ["无限练习题", "无限模拟考试", "每天50次聊天机器人对话"],
      },
      {
        id: "THINK-3MONTH",
        name: "3个月",
        price: "89.7k",
        billingNote: "一次性支付Rp269.000，获得3个月使用权限",
        savingsBadge: "节省9%",
        cta: "立即购买",
        popular: true,
        accessLabel: "完整权限",
        access: ["无限练习题", "无限模拟考试", "每天50次聊天机器人对话"],
      },
      {
        id: "THINK-6MONTH",
        name: "6个月",
        price: "83.2k",
        billingNote: "一次性支付Rp499.000，获得6个月使用权限",
        savingsBadge: "节省16%",
        cta: "立即购买",
        popular: false,
        accessLabel: "完整权限",
        access: ["无限练习题", "无限模拟考试", "每天50次聊天机器人对话"],
      },
    ],
  },
  faq: {
    askWhatsapp: "通过 WhatsApp 咨询",
    askEmail: "通过邮件咨询",
    sectionNumber: "06",
    label: "常见问题",
    heading: "还有疑问？",
    subheading:
      "以下是学生最常问的问题答案。需要更多帮助？在社区里打招呼吧。",
    askUs: "问我们任何问题",
    items: [
      {
        question: "什么是CSCA？",
        answer:
          "CSCA是中国大学申请过程中使用的入学评估考试。ThinkNAO帮助印度尼西亚学生备考数学、物理、化学和学术汉语。",
      },
      {
        question: "无限练习是如何运作的？",
        answer:
          "您从与CSCA风格主题匹配的精选题库开始。完成这些题目后，ThinkNAO可以生成相同风格的新的经验证练习，让您的学习不中断。",
      },
      {
        question: "难度会自动变化吗？",
        answer:
          "是的。ThinkNAO根据您的表现逐渐调整每组中简单、中等和困难题目的比例——不会出现突然的难度飙升。",
      },
      {
        question: "我可以用英语和中文学习吗？",
        answer:
          "是的。整个体验以双语设计，因此您可以建立学科掌握能力和考试所需的学术语言信心。",
      },
    ],
  },
  footer: {
    tagline: "您的校园比您想象的更近。",
    heading1: "准备好迈出",
    heading2: "第一步了吗？",
    cta: "免费开始学习",
    copyright: "为有志学习者而建。",
    links: {
      features: "功能",
      community: "社区",
      pricing: "价格",
      faq: "常见问题",
    },
  },
  dashboard: {
    greeting: "早上好，ALEX",
    subtitle: "准备好今天的攀登了吗？",
    streak: "天连胜",
    learn: "学习",
    practice: "练习",
    ranks: "排名",
    profile: "个人资料",
    continueLabel: "继续学习",
    subject: "物理 · 力学",
    progressText: "已完成 7/10 道题",
    weeklyMastery: "本周掌握",
    chineseTopic: "学术汉语",
    chineseDetail: "词汇 · 第04组",
    chineseTime: "8分钟",
    mathsTopic: "数学",
    mathsDetail: "函数 · 中等",
    mathsLabel: "自适应题组",
  },
};

export const translations: Record<Language, typeof en> = { en, id, zh };
export type Translations = typeof en;
