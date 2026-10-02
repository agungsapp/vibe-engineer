import { SlideData } from "../types/presentation";

export const SLIDES: SlideData[] = [
    {
        id: 1,
        slug: "intro",
        category: "STORY",
        title: "FROM CODING TO ENGINEERING",
        subtitle: "Catatan yang saya bawa pulang dari FEKDI x IFSE 2026",
        speakerNotes:
            "Selamat pagi rekan-rekan IT Bank Eka. Dua hari lalu saya berkesempatan mewakili Bank Eka hadir di FEKDI x IFSE 2026 di Jakarta. Selama 10 menit ke depan, saya ingin berbagi perspektif praktis sebagai software engineer tentang apa yang berubah di lanskap IT enterprise saat ini.",
        durationSec: 30,
    },
    {
        id: 2,
        slug: "question",
        category: "STORY",
        title: "1 PERTANYAAN DASAR",
        subtitle: "2 Hari · 8 Kelas · 6 Rekan IT",
        speakerNotes:
            'Dari 8 kelas yang saya ikuti, ada 2 topik yang sangat relevan untuk tim kita: "Designing AI That Users Champion and Companies Scale" dan "Scaling DevSecOps in Enterprise". Semua materi bermuara pada satu pertanyaan reflektif: Kalau AI sekarang bisa coding, apa yang sebenarnya berubah dari pekerjaan kita sebagai orang IT?',
        durationSec: 35,
    },
    {
        id: 3,
        slug: "before-ai",
        category: "OBSERVATION",
        title: "BEFORE AI",
        subtitle: "Workflow klasik yang kita jalani selama ini",
        speakerNotes:
            "Mari kita ingat kembali workflow tradisional kita: Plan, Code, Test, Deploy. Setiap baris kode ditulis manual karakter demi karakter. Kecepatan delivery sangat terikat pada seberapa cepat developer mengetik dan berpikir baris per baris.",
        durationSec: 30,
    },
    {
        id: 4,
        slug: "then-ai",
        category: "OBSERVATION",
        title: "THEN AI HAPPENED.",
        subtitle: "Development became much faster",
        speakerNotes:
            "Lalu AI hadir di tengah-tengah kita. Sekarang kita cukup mendeskripsikan requirement dalam bahasa natural, dan AI membantu menghasilkan kode atau prototype dalam hitungan detik. Bahkan rekan yang sebelumnya tidak terbiasa programming pun kini bisa membuat prototype.",
        durationSec: 35,
    },
    {
        id: 5,
        slug: "vibe-coding",
        category: "CONNECTION",
        title: "VIBE CODING",
        subtitle: "Era penurunan drastis hambatan produksi kode",
        speakerNotes:
            'Istilah "Vibe Coding" ramai dibicarakan: ide kita prompt ke AI, kode langsung jadi. Tapi lihat contoh nyata di sebelah kanan: jika vibe coding tidak di-manage dengan disiplin, AI bisa mulai "ngelantur" dan menghasilkan halusinasi logic. Di perbankan, realitanya tegas: Code Terbuat ≠ Code Benar ≠ Code Secure.',
        durationSec: 40,
    },
    {
        id: 6,
        slug: "what-happens",
        category: "CONNECTION",
        title: "THEN WHAT HAPPENS TO US?",
        subtitle: "Apakah peran tim IT masih ada?",
        speakerNotes:
            "Pertanyaan wajar muncul: kalau AI bisa bikin kode, apa peran engineer masih dibutuhkan? Jawabannya tegas: YES. Justru karena AI semakin cepat, peran engineering judgment menjadi jauh lebih krusial dibanding sebelumnya.",
        durationSec: 35,
    },
    {
        id: 7,
        slug: "vibe-engineering",
        category: "INSIGHT",
        title: "VIBE ENGINEERING",
        subtitle: "AI untuk kecepatan. Engineer untuk kepastian.",
        speakerNotes:
            "Inilah konsep Vibe Engineering: AI tetap kita gunakan sebagai leverage kecepatan, namun engineer membawa disiplin: requirement review, testing, security scanning, dan validasi arsitektur. Di FEKDI ada analogi menarik: Coding manual sebelum AI itu seperti MS Paint (serba manual piksel demi piksel), Vibe Coding itu seperti MS Paint Pro (cepat dan mudah tapi belum teruji presisinya), sedangkan Vibe Engineering (yang pada dasarnya sama dengan Agentic Software Engineering) itulah Photoshop (sistem layer, seleksi presisi, context, dan pipeline lengkap).",
        durationSec: 40,
    },
    {
        id: 8,
        slug: "the-engineer",
        category: "INSIGHT",
        title: "THE ENGINEER",
        subtitle: "AI Agent = Junior Developer yang sangat cepat",
        speakerNotes:
            "AI Agent bisa generate, modify, test, dan fix kode dengan kilat. Namun seperti junior developer yang sangat bersemangat: dia bisa salah dengan sangat cepat jika salah memahami requirement. Di situlah engineer senior memegang peranan: arsitektur, business logic perbankan, review keamanan, dan keputusan akhir.",
        durationSec: 40,
    },
    {
        id: 9,
        slug: "shift-left",
        category: "DEVSECOPS",
        title: "WHEN AI GETS FASTER,\nSECURITY HAS TO MOVE WITH IT.",
        subtitle: "Shift Left Security di era generative development",
        speakerNotes:
            "Ketika volume perubahan kode meningkat karena AI, kita tidak bisa lagi memeriksa keamanan hanya di akhir saat software selesai (gatekeeping). Kita harus melakukan Shift Left Security: membawa pemeriksaan keamanan sejak awal proses penulisan kode.",
        durationSec: 35,
    },
    {
        id: 10,
        slug: "automation",
        category: "DEVSECOPS",
        title: "WE CAN'T CHECK EVERYTHING MANUALLY.",
        subtitle: "Automated Security Gates dalam Pipeline CI/CD",
        speakerNotes:
            "Review manual saja tidak akan sanggup mengejar laju kode. Kita butuh otomatisasi: SAST untuk mendeteksi hardcoded API keys atau credential leak, Secret Detection, dan Dependency Scanning (seperti Trivy) untuk mengecek kerentanan CVE pada library pihak ketiga.",
        durationSec: 40,
    },
    {
        id: 11,
        slug: "chatbot-to-agent",
        category: "AI AGENT",
        title: "FROM CHATBOT TO AGENT",
        subtitle: "Pergeseran dari copy-paste ke autonomous context loop",
        speakerNotes:
            "AI Agent sangat berbeda dari chatbot konvensional. Dulu kita prompt, AI jawab, kita copy lalu paste ke IDE. Sekarang: developer memberi requirement, AI Agent membaca struktur project yang diberi akses, merencanakan, memodifikasi file, menjalankan test, membaca error, dan memperbaiki sendiri.",
        durationSec: 40,
    },
    {
        id: 12,
        slug: "terminal-sim",
        category: "AI AGENT",
        title: "IT'S NOT JUST COPY-PASTE ANYMORE.",
        subtitle: "Siklus eksekusi AI Agent di dalam lingkungan terkontrol",
        speakerNotes:
            "Perhatikan bagaimana agent bekerja di terminal: menginspeksi file, menemukan dependency, menulis test, mendeteksi error runtime, dan melakukan patch verifikasi secara otonom di bawah batasan hak akses yang kita tentukan.",
        durationSec: 45,
    },
    {
        id: 13,
        slug: "mcp-protocol",
        category: "MCP",
        title: "HOW DOES AI TALK TO OUR TOOLS?",
        subtitle: "Model Context Protocol (MCP) sebagai jembatan standar",
        speakerNotes:
            "Bagaimana model AI bisa berinteraksi dengan tools kita? Melalui MCP (Model Context Protocol). MCP adalah protokol terbuka standar yang memungkinkan LLM membaca context dari files, Git, database, atau internal API melalui interface terstruktur.",
        durationSec: 35,
    },
    {
        id: 14,
        slug: "security-question",
        category: "SECURITY",
        title: "WAIT.",
        subtitle: "Sebuah pertanyaan kritis dari sudut pandang IT & Security",
        speakerNotes:
            "Sebagai tim IT perbankan, insting pertama kita pasti berbunyi: Kalau AI bisa membaca project, menjalankan tools, dan mengubah kode... bukankah itu sangat berbahaya?",
        durationSec: 30,
    },
    {
        id: 15,
        slug: "security-answer",
        category: "SECURITY",
        title: "AI ≠ UNLIMITED ACCESS",
        subtitle: "Prinsip Least Privilege & Isolasi Lingkungan",
        speakerNotes:
            "Poin penting yang ditekankan di sesi DevSecOps: MCP itu sendiri bukan sihir keamanan. AI hanya boleh mendapatkan akses yang memang dibutuhkan: Read Project ✓, Run Tests ✓, Modify Code ✓, tapi Access Secrets ✕ dan Deploy Direct Production ✕. Keamanan tetap bertumpu pada IAM, otentikasi, isolasi env, dan policy!",
        durationSec: 45,
    },
    {
        id: 16,
        slug: "big-picture",
        category: "BIG PICTURE",
        title: "AI INSIDE ENGINEERING",
        subtitle:
            "Human, AI, Security, dan CI/CD dalam satu sistem terintegrasi",
        speakerNotes:
            "Inilah gambaran besarnya. AI tidak menggantikan pilar engineering, melainkan masuk menjadi bagian terintegrasi dari rantai delivery software modern: dari requirement human, assisted coding, automated security checks, test harness, hingga deployment observability.",
        durationSec: 40,
    },
    {
        id: 17,
        slug: "impact",
        category: "IMPACT",
        title: "AI MAKES US FASTER.\nENGINEERING KEEPS US RIGHT.",
        subtitle: "Prinsip fundamental untuk masa depan tim IT Bank Eka",
        speakerNotes:
            "Inti pesan yang ingin saya sampaikan: AI membuat kita melaju lebih cepat, namun Engineering memastikan kita tetap menuju arah yang benar, aman, dan dapat dipertanggungjawabkan.",
        durationSec: 35,
    },
    {
        id: 18,
        slug: "setup-reveal",
        category: "REVEAL",
        title: "DAN SEBENARNYA...",
        subtitle: "Ada satu hal yang belum saya tunjukkan",
        speakerNotes:
            "Sebelum kita masuk ke sesi tanya jawab... ada satu hal yang belum saya tunjukkan ke rekan-rekan. Saya ingin memperlihatkan bagaimana materi ini saya praktikkan sendiri secara nyata.",
        durationSec: 25,
    },
    {
        id: 19,
        slug: "qna-reveal",
        category: "REVEAL",
        title: "Q&A",
        subtitle: "Let's talk · Terima kasih",
        speakerNotes:
            "Slide penutup Q&A formal. Tunggu 2-3 detik atau tekan tombol interaktif untuk memecahkan ilusi PowerPoint!",
        durationSec: 60,
    },
];
