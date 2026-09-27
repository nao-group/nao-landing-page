import type { Language } from "@/lib/i18n/translations";

export type SubjectId = "math" | "physics" | "chemistry" | "stem-chinese" | "humanities-chinese";

type Topic = { code: string; en: string; id: string; zh: string };

// Topic order and codes follow question_list - Rekap.csv supplied by NAO Group.
export const subjectTopics: Record<SubjectId, Topic[]> = {
  math: [
    { code: "EF", en: "Elementary functions", id: "Fungsi elementer", zh: "初等函数" },
    { code: "SQ", en: "Sequences", id: "Barisan", zh: "数列" },
    { code: "FN", en: "Functions", id: "Fungsi", zh: "函数" },
    { code: "CL", en: "Calculus", id: "Kalkulus", zh: "微积分" },
    { code: "AG", en: "Analytic geometry", id: "Geometri analitik", zh: "解析几何" },
    { code: "VC", en: "Vectors", id: "Vektor", zh: "向量" },
    { code: "CN", en: "Complex numbers", id: "Bilangan kompleks", zh: "复数" },
    { code: "SG", en: "Solid geometry", id: "Geometri ruang", zh: "立体几何" },
    { code: "SC", en: "Space coordinate system", id: "Sistem koordinat ruang", zh: "空间坐标系" },
    { code: "IQ", en: "Inequalities", id: "Pertidaksamaan", zh: "不等式" },
    { code: "ST", en: "Sets", id: "Himpunan", zh: "集合" },
    { code: "PS", en: "Probability and statistics", id: "Peluang dan statistika", zh: "概率与统计" },
  ],
  physics: [
    { code: "KM", en: "Kinematics", id: "Kinematika", zh: "运动学" },
    { code: "NL", en: "Newton's laws of motion", id: "Hukum gerak Newton", zh: "牛顿运动定律" },
    { code: "MO", en: "Momentum and impulse", id: "Momentum dan impuls", zh: "动量与冲量" },
    { code: "WE", en: "Work and energy", id: "Usaha dan energi", zh: "功与能" },
    { code: "CG", en: "Circular motion and gravitation", id: "Gerak melingkar dan gravitasi", zh: "圆周运动与万有引力" },
    { code: "SW", en: "Simple harmonic motion and waves", id: "Gerak harmonik dan gelombang", zh: "简谐运动与波" },
    { code: "ES", en: "Electrostatic field", id: "Medan elektrostatik", zh: "静电场" },
    { code: "EC", en: "DC circuits", id: "Rangkaian arus searah", zh: "直流电路" },
    { code: "MF", en: "Magnetic field", id: "Medan magnet", zh: "磁场" },
    { code: "EI", en: "Electromagnetic induction", id: "Induksi elektromagnetik", zh: "电磁感应" },
    { code: "MK", en: "Kinetic theory of gases", id: "Teori kinetik gas", zh: "气体动理论" },
    { code: "GL", en: "Ideal gas law", id: "Hukum gas ideal", zh: "理想气体定律" },
    { code: "LT", en: "First law of thermodynamics", id: "Hukum I termodinamika", zh: "热力学第一定律" },
    { code: "GO", en: "Geometrical optics", id: "Optika geometri", zh: "几何光学" },
    { code: "PO", en: "Physical optics", id: "Optika fisis", zh: "物理光学" },
    { code: "PE", en: "Photoelectric effect", id: "Efek fotolistrik", zh: "光电效应" },
    { code: "AS", en: "Atomic structure", id: "Struktur atom", zh: "原子结构" },
    { code: "NP", en: "Nuclear physics", id: "Fisika nuklir", zh: "核物理" },
  ],
  chemistry: [
    { code: "MC", en: "Mole calculation", id: "Perhitungan mol", zh: "物质的量计算" },
    { code: "MS", en: "Matter and classification of substances", id: "Materi dan klasifikasi zat", zh: "物质及其分类" },
    { code: "AP", en: "Atomic structure and periodic table", id: "Struktur atom dan tabel periodik", zh: "原子结构与元素周期表" },
    { code: "CB", en: "Chemical bonding and intermolecular forces", id: "Ikatan kimia dan gaya antarmolekul", zh: "化学键与分子间作用力" },
    { code: "NE", en: "Chemical nomenclature and equation writing", id: "Tata nama dan persamaan kimia", zh: "化学命名与方程式书写" },
    { code: "RR", en: "Redox reactions", id: "Reaksi redoks", zh: "氧化还原反应" },
    { code: "IR", en: "Ionic reactions and tests", id: "Reaksi dan uji ion", zh: "离子反应与检验" },
    { code: "RE", en: "Chemical reaction rate and equilibrium", id: "Laju reaksi dan kesetimbangan", zh: "化学反应速率与平衡" },
    { code: "ET", en: "Electrolyte solution theory", id: "Teori larutan elektrolit", zh: "电解质溶液理论" },
    { code: "CP", en: "Solution concentration and pH", id: "Konsentrasi larutan dan pH", zh: "溶液浓度与 pH" },
    { code: "GL", en: "Ideal gas law", id: "Hukum gas ideal", zh: "理想气体定律" },
    { code: "IP", en: "Inorganic properties", id: "Sifat senyawa anorganik", zh: "无机物性质" },
    { code: "OC", en: "Basic organic chemistry", id: "Dasar kimia organik", zh: "基础有机化学" },
    { code: "EA", en: "Chemical experiment and application", id: "Eksperimen dan aplikasi kimia", zh: "化学实验与应用" },
    { code: "IC", en: "Industrial chemistry process", id: "Proses kimia industri", zh: "工业化学过程" },
  ],
  "stem-chinese": [
    { code: "SH", en: "Character reading and meaning discrimination", id: "Membaca karakter dan membedakan makna", zh: "汉字读音与词义辨析" },
    { code: "XT", en: "Vocabulary cloze", id: "Isian kosakata", zh: "词汇选词填空" },
    { code: "JF", en: "Synonyms and antonyms", id: "Sinonim dan antonim", zh: "近义词与反义词" },
    { code: "DT", en: "Paragraph cloze", id: "Isian paragraf", zh: "段落选词填空" },
    { code: "BY", en: "Grammar and sentence order", id: "Tata bahasa dan susunan kalimat", zh: "语法与语序" },
    { code: "YL", en: "Reading comprehension", id: "Pemahaman bacaan", zh: "阅读理解" },
  ],
  "humanities-chinese": [
    { code: "SH", en: "Character reading and meaning discrimination", id: "Membaca karakter dan membedakan makna", zh: "汉字读音与词义辨析" },
    { code: "JF", en: "Synonyms and antonyms", id: "Sinonim dan antonim", zh: "近义词与反义词" },
    { code: "XT", en: "Vocabulary cloze", id: "Isian kosakata", zh: "词汇选词填空" },
    { code: "BY", en: "Grammar and sentence order", id: "Tata bahasa dan susunan kalimat", zh: "语法与语序" },
    { code: "YL", en: "Reading comprehension", id: "Pemahaman bacaan", zh: "阅读理解" },
  ],
};

export const subjectTopicLabels: Record<Language, { preview: string; more: string; all: string; description: string }> = {
  id: { preview: "TOPIK CSCA", more: "Lihat semua topik", all: "Semua topik", description: "Daftar topik dalam jalur belajar ini." },
  en: { preview: "CSCA TOPICS", more: "View all topics", all: "All topics", description: "Topics in this learning path." },
  zh: { preview: "CSCA 主题", more: "查看全部主题", all: "全部主题", description: "本学习路径涵盖的主题。" },
};
