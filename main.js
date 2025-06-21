// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const navLinks = document.getElementById('navLinks');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 72;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

const setActiveLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', setActiveLink);

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    // Update navbar background for dark theme
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    }
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});

// Loading Overlay
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 500);
});

// Type Writer Effect for Code Window
const codeLines = document.querySelectorAll('.code-line');
let delay = 300;

codeLines.forEach((line, index) => {
    setTimeout(() => {
        line.style.opacity = '1';
    }, delay * (index + 1));
});

// Language Translations
const translations = {
    en: {
        nav: ["Home", "About", "Experience", "Projects", "Contact"],
        navName: "Berkay Pekersoy",
        heroSubtitle: "Welcome to my portfolio",
        heroTitle: "Junior Full-Stack Developer & Solutions Architect",
        heroDescription: "I build scalable enterprise applications with modern technologies, specializing in cloud architecture and performance optimization.",
        heroBtnProjects: "View Projects",
        heroBtnContact: "Get In Touch",
        aboutSubtitle: "About Me",
        aboutTitle: "Professional Summary",
        aboutDesc: "A decade of experience in building robust, scalable solutions for enterprise clients",
        aboutExcellence: "Delivering Excellence Through Technology",
        aboutText1: "As a Junior Full-Stack Developer with over a decade of experience, I specialize in architecting and implementing enterprise-grade solutions that drive business growth and operational efficiency.",
        aboutText2: "My expertise spans across modern web technologies, cloud platforms, and DevOps practices. I'm passionate about clean code, scalable architectures, and mentoring development teams to achieve their full potential.",
        aboutTech: "Technical Expertise",
        skillFrontend: "Frontend Development",
        skillFrontendList: "React, TypeScript, Next.js",
        skillBackend: "Backend Development",
        skillBackendList: "Node.js, Python, PostgreSQL",
        skillCloud: "Cloud Architecture",
        skillCloudList: "AWS, Azure, Kubernetes",
        skillDevops: "DevOps & CI/CD",
        skillDevopsList: "Docker, Jenkins, GitOps",
        expSubtitle: "Career Journey",
        expTitle: "Professional Experience",
        expDesc: "Building innovative solutions at industry-leading companies",
        exp1Date: "2025 - Present",
        exp1Role: "Junior Full-Stack Developer",
        exp1Company: "Veriyum",
        exp1Desc: "Leading the development of microservices architecture for enterprise clients. Implemented CI/CD pipelines reducing deployment time by 70%.",
        exp1Tag1: "React",
        exp1Tag2: "Node.js",
        exp1Tag3: "Flutter",
        exp1Tag4: "JavaScript",
        exp1Tag5: "TypeScript",
        exp2Date: "Dec 2023 - Aug 2024",
        exp2Role: "Flutter Developer - Intern",
        exp2Company: "Google",
        exp2Desc: "Developed and tested Flutter-based mobile apps, increasing projected user engagement by 10% based on beta testing feedback.",
        exp2Tag1: "Flutter",
        exp2Tag2: "Python",
        exp2Tag3: "Firebase",
        exp2Tag4: "JavaScript",
        exp3Date: "May 2024 - Aug 2024",
        exp3Role: "Freelance Developer & Designer",
        exp3Company: "Yensis Energy Systems",
        exp3Desc: "Integrated analytics tools to track user behavior, improving the website's conversion rate by 5%.",
        exp3Tag1: "JavaScript",
        exp3Tag2: "HTML & CSS",
        exp3Tag3: "Photoshop",
        exp3Tag4: "Video Edit",
        projSubtitle: "Portfolio",
        projTitle: "Featured Projects",
        projDesc: "A selection of projects that showcase my technical expertise and problem-solving abilities",
        projectsUnderConstruction: "Projects are under construction",
        contactSubtitle: "Get In Touch",
        contactTitle: "Let's Connect",
        contactDesc: "Feel free to reach out through any of these platforms",
        footerCopyright: "© 2025 Berkay. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service"
    },
    tr: {
        nav: ["Anasayfa", "Hakkımda", "Deneyim", "Projeler", "İletişim"],
        navName: "Berkay Pekersoy",
        heroSubtitle: "Portföyüme hoş geldiniz",
        heroTitle: "Junior Full-Stack Geliştirici & Çözüm Mimarı",
        heroDescription: "Modern teknolojilerle ölçeklenebilir kurumsal uygulamalar geliştiriyorum, bulut mimarisi ve performans optimizasyonunda uzmanım.",
        heroBtnProjects: "Projeleri Görüntüle",
        heroBtnContact: "İletişime Geç",
        aboutSubtitle: "Hakkımda",
        aboutTitle: "Profesyonel Özgeçmiş",
        aboutDesc: "Kurumsal müşteriler için sağlam ve ölçeklenebilir çözümler geliştirmede yılların deneyimi",
        aboutExcellence: "Teknolojiyle Mükemmellik Sunmak",
        aboutText1: "10 yılı aşkın deneyime sahip bir Junior Full-Stack Developer olarak, işletme büyümesini ve operasyonel verimliliği artıran kurumsal çözümler tasarlıyor ve uyguluyorum.",
        aboutText2: "Uzmanlık alanlarım modern web teknolojileri, bulut platformları ve DevOps uygulamalarını kapsar. Temiz kod, ölçeklenebilir mimariler ve ekipleri geliştirme konusunda tutkuluyum.",
        aboutTech: "Teknik Uzmanlık",
        skillFrontend: "Frontend Geliştirme",
        skillFrontendList: "React, TypeScript, Next.js",
        skillBackend: "Backend Geliştirme",
        skillBackendList: "Node.js, Python, PostgreSQL",
        skillCloud: "Bulut Mimarisi",
        skillCloudList: "AWS, Azure, Kubernetes",
        skillDevops: "DevOps & CI/CD",
        skillDevopsList: "Docker, Jenkins, GitOps",
        expSubtitle: "Kariyer Yolculuğu",
        expTitle: "Profesyonel Deneyim",
        expDesc: "Sektör lideri şirketlerde yenilikçi çözümler geliştirmek",
        exp1Date: "2025 - Günümüz",
        exp1Role: "Junior Full-Stack Geliştirici",
        exp1Company: "Veriyum",
        exp1Desc: "Kurumsal müşteriler için mikroservis mimarisi geliştirilmesine liderlik ettim. CI/CD süreçlerini uygulayarak dağıtım süresini %70 azalttım.",
        exp1Tag1: "React",
        exp1Tag2: "Node.js",
        exp1Tag3: "Flutter",
        exp1Tag4: "JavaScript",
        exp1Tag5: "TypeScript",
        exp2Date: "Ara 2023 - Ağu 2024",
        exp2Role: "Flutter Geliştirici - Stajyer",
        exp2Company: "Google",
        exp2Desc: "Flutter tabanlı mobil uygulamalar geliştirip test ettim, beta testlerinden alınan geri bildirimlerle kullanıcı etkileşimini %10 artırdım.",
        exp2Tag1: "Flutter",
        exp2Tag2: "Python",
        exp2Tag3: "Firebase",
        exp2Tag4: "JavaScript",
        exp3Date: "May 2024 - Ağu 2024",
        exp3Role: "Freelance Geliştirici & Tasarımcı",
        exp3Company: "Yensis Enerji Sistemleri",
        exp3Desc: "Kullanıcı davranışını izlemek için analiz araçları entegre ederek sitenin dönüşüm oranını %5 artırdım.",
        exp3Tag1: "JavaScript",
        exp3Tag2: "HTML & CSS",
        exp3Tag3: "Photoshop",
        exp3Tag4: "Video Düzenleme",
        projSubtitle: "Portföy",
        projTitle: "Öne Çıkan Projeler",
        projDesc: "Teknik uzmanlığımı ve problem çözme yeteneklerimi gösteren projelerden seçmeler",
        projectsUnderConstruction: "Projeler yapım aşamasında",
        contactSubtitle: "İletişime Geç",
        contactTitle: "Bağlantı Kuralım",
        contactDesc: "Bu platformlardan herhangi biri üzerinden ulaşabilirsiniz",
        footerCopyright: "© 2025 Berkay. Tüm hakları saklıdır.",
        footerPrivacy: "Gizlilik Politikası",
        footerTerms: "Kullanım Şartları"
    },
    jp: {
        nav: ["ホーム", "紹介", "経験", "プロジェクト", "連絡先"],
        navName: "Berkay Pekersoy",
        heroSubtitle: "私のポートフォリオへようこそ",
        heroTitle: "ジュニア・フルスタック開発者 & ソリューションアーキテクト",
        heroDescription: "最新技術でスケーラブルなエンタープライズアプリケーションを構築し、クラウドアーキテクチャとパフォーマンス最適化を専門としています。",
        heroBtnProjects: "プロジェクトを見る",
        heroBtnContact: "お問い合わせ",
        aboutSubtitle: "紹介",
        aboutTitle: "プロフェッショナルサマリー",
        aboutDesc: "エンタープライズ向け堅牢でスケーラブルなソリューション構築の10年の経験",
        aboutExcellence: "テクノロジーで卓越性を実現",
        aboutText1: "10年以上の経験を持つジュニア・フルスタック開発者として、ビジネス成長と効率を促進するエンタープライズソリューションの設計と実装を専門としています。",
        aboutText2: "モダンなWeb技術、クラウドプラットフォーム、DevOpsの実践に精通。クリーンコード、スケーラブルなアーキテクチャ、チーム育成に情熱を持っています。",
        aboutTech: "技術的専門知識",
        skillFrontend: "フロントエンド開発",
        skillFrontendList: "React, TypeScript, Next.js",
        skillBackend: "バックエンド開発",
        skillBackendList: "Node.js, Python, PostgreSQL",
        skillCloud: "クラウドアーキテクチャ",
        skillCloudList: "AWS, Azure, Kubernetes",
        skillDevops: "DevOps & CI/CD",
        skillDevopsList: "Docker, Jenkins, GitOps",
        expSubtitle: "キャリアの歩み",
        expTitle: "職務経歴",
        expDesc: "業界をリードする企業で革新的なソリューションを構築",
        exp1Date: "2025年～現在",
        exp1Role: "ジュニア・フルスタック開発者",
        exp1Company: "Veriyum",
        exp1Desc: "エンタープライズ向けマイクロサービスアーキテクチャの開発を主導。CI/CDパイプラインを導入し、デプロイ時間を70%短縮。",
        exp1Tag1: "React",
        exp1Tag2: "Node.js",
        exp1Tag3: "Flutter",
        exp1Tag4: "JavaScript",
        exp1Tag5: "TypeScript",
        exp2Date: "2023年12月～2024年8月",
        exp2Role: "Flutter開発者（インターン）",
        exp2Company: "Google",
        exp2Desc: "Flutterベースのモバイルアプリを開発・テストし、ベータテストのフィードバックによりユーザーエンゲージメントを10%向上。",
        exp2Tag1: "Flutter",
        exp2Tag2: "Python",
        exp2Tag3: "Firebase",
        exp2Tag4: "JavaScript",
        exp3Date: "2024年5月～2024年8月",
        exp3Role: "フリーランス開発者＆デザイナー",
        exp3Company: "Yensis Energy Systems",
        exp3Desc: "分析ツールを統合し、ユーザー行動を追跡してWebサイトのコンバージョン率を5%向上。",
        exp3Tag1: "JavaScript",
        exp3Tag2: "HTML & CSS",
        exp3Tag3: "Photoshop",
        exp3Tag4: "動画編集",
        projSubtitle: "ポートフォリオ",
        projTitle: "注目プロジェクト",
        projDesc: "技術力と課題解決力を示すプロジェクトのセレクション",
        projectsUnderConstruction: "プロジェクトは現在作成中です",
        contactSubtitle: "連絡先",
        contactTitle: "つながりましょう",
        contactDesc: "これらのプラットフォームからお気軽にお問い合わせください",
        footerCopyright: "© 2025 Berkay. 無断転載を禁じます。",
        footerPrivacy: "プライバシーポリシー",
        footerTerms: "利用規約"
    }
};

function updateLanguage(lang) {
    // Set html lang attribute
    document.documentElement.setAttribute('lang', lang === 'jp' ? 'ja' : lang);
    // Set Japanese font if needed
    if (lang === 'jp') {
        document.body.classList.add('jp-font');
    } else {
        document.body.classList.remove('jp-font');
    }
    // Navbar
    document.getElementById('navHome').textContent = translations[lang].nav[0];
    document.getElementById('navAbout').textContent = translations[lang].nav[1];
    document.getElementById('navExperience').textContent = translations[lang].nav[2];
    document.getElementById('navProjects').textContent = translations[lang].nav[3];
    document.getElementById('navContact').textContent = translations[lang].nav[4];
    document.getElementById('navName').textContent = translations[lang].navName;
    // Hero
    document.getElementById('heroSubtitle').textContent = translations[lang].heroSubtitle;
    document.getElementById('heroTitle').textContent = translations[lang].heroTitle;
    document.getElementById('heroDescription').textContent = translations[lang].heroDescription;
    document.getElementById('heroBtnProjects').querySelector('span:last-child').textContent = translations[lang].heroBtnProjects;
    document.getElementById('heroBtnContact').querySelector('span:last-child').textContent = translations[lang].heroBtnContact;
    // About
    document.getElementById('aboutSubtitle').textContent = translations[lang].aboutSubtitle;
    document.getElementById('aboutTitle').textContent = translations[lang].aboutTitle;
    document.getElementById('aboutDesc').textContent = translations[lang].aboutDesc;
    document.getElementById('aboutExcellence').textContent = translations[lang].aboutExcellence;
    document.getElementById('aboutText1').textContent = translations[lang].aboutText1;
    document.getElementById('aboutText2').textContent = translations[lang].aboutText2;
    document.getElementById('aboutTech').textContent = translations[lang].aboutTech;
    document.getElementById('skillFrontend').textContent = translations[lang].skillFrontend;
    document.getElementById('skillFrontendList').textContent = translations[lang].skillFrontendList;
    document.getElementById('skillBackend').textContent = translations[lang].skillBackend;
    document.getElementById('skillBackendList').textContent = translations[lang].skillBackendList;
    document.getElementById('skillCloud').textContent = translations[lang].skillCloud;
    document.getElementById('skillCloudList').textContent = translations[lang].skillCloudList;
    document.getElementById('skillDevops').textContent = translations[lang].skillDevops;
    document.getElementById('skillDevopsList').textContent = translations[lang].skillDevopsList;
    // Experience
    document.getElementById('expSubtitle').textContent = translations[lang].expSubtitle;
    document.getElementById('expTitle').textContent = translations[lang].expTitle;
    document.getElementById('expDesc').textContent = translations[lang].expDesc;
    document.getElementById('exp1Date').textContent = translations[lang].exp1Date;
    document.getElementById('exp1Role').textContent = translations[lang].exp1Role;
    document.getElementById('exp1Company').textContent = translations[lang].exp1Company;
    document.getElementById('exp1Desc').textContent = translations[lang].exp1Desc;
    document.getElementById('exp1Tag1').textContent = translations[lang].exp1Tag1;
    document.getElementById('exp1Tag2').textContent = translations[lang].exp1Tag2;
    document.getElementById('exp1Tag3').textContent = translations[lang].exp1Tag3;
    document.getElementById('exp1Tag4').textContent = translations[lang].exp1Tag4;
    document.getElementById('exp1Tag5').textContent = translations[lang].exp1Tag5;
    document.getElementById('exp2Date').textContent = translations[lang].exp2Date;
    document.getElementById('exp2Role').textContent = translations[lang].exp2Role;
    document.getElementById('exp2Company').textContent = translations[lang].exp2Company;
    document.getElementById('exp2Desc').textContent = translations[lang].exp2Desc;
    document.getElementById('exp2Tag1').textContent = translations[lang].exp2Tag1;
    document.getElementById('exp2Tag2').textContent = translations[lang].exp2Tag2;
    document.getElementById('exp2Tag3').textContent = translations[lang].exp2Tag3;
    document.getElementById('exp2Tag4').textContent = translations[lang].exp2Tag4;
    document.getElementById('exp3Date').textContent = translations[lang].exp3Date;
    document.getElementById('exp3Role').textContent = translations[lang].exp3Role;
    document.getElementById('exp3Company').textContent = translations[lang].exp3Company;
    document.getElementById('exp3Desc').textContent = translations[lang].exp3Desc;
    document.getElementById('exp3Tag1').textContent = translations[lang].exp3Tag1;
    document.getElementById('exp3Tag2').textContent = translations[lang].exp3Tag2;
    document.getElementById('exp3Tag3').textContent = translations[lang].exp3Tag3;
    document.getElementById('exp3Tag4').textContent = translations[lang].exp3Tag4;
    // Projects
    document.getElementById('projSubtitle').textContent = translations[lang].projSubtitle;
    document.getElementById('projTitle').textContent = translations[lang].projTitle;
    document.getElementById('projDesc').textContent = translations[lang].projDesc;
    document.getElementById('projectsUnderConstruction').textContent = translations[lang].projectsUnderConstruction;
    // Contact
    document.getElementById('contactSubtitle').textContent = translations[lang].contactSubtitle;
    document.getElementById('contactTitle').textContent = translations[lang].contactTitle;
    document.getElementById('contactDesc').textContent = translations[lang].contactDesc;
    // Footer
    document.getElementById('footerCopyright').textContent = translations[lang].footerCopyright;
    document.getElementById('footerPrivacy').textContent = translations[lang].footerPrivacy;
    document.getElementById('footerTerms').textContent = translations[lang].footerTerms;
}

const languageSwitcher = document.getElementById('languageSwitcher');
languageSwitcher.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
});
// On load, set language from localStorage or default
const savedLang = localStorage.getItem('lang') || 'en';
languageSwitcher.value = savedLang;
updateLanguage(savedLang); 
