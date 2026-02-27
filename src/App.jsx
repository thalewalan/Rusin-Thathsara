import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Award,
  Tv,
  BookOpen,
  ArrowRight,
  Play,
  Star,
  Zap,
  TrendingUp,
  Menu,
  X,
  CheckCircle,
  GraduationCap,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Instagram,
  Facebook,
  FileText,
  Calendar,
  ChevronRight,
  School,
  Telescope
} from 'lucide-react';

const translations = {
  en: {
    nav: { home: "Home", articles: "Articles", tv: "TV Programs", about: "About" },
    hero: {
      name: "Rusin Thathsara",
      title: "Guinness World Record Holder",
      subtitle: "Pushing the boundaries of human potential. Explorer, Creator, and Record Breaker.",
      cta1: "Verify Record",
      cta2: "Watch TV Features",
      roles: ["Guinness World Record Holder", "Facility Management Professional", "Mental Athlete", "Astronomer"]
    },
    about: {
      title: "Academic Excellence",
      education: "University of Moratuwa",
      degree: "B.Sc. (Hons) in Facilities Management",
      bio: "A student of the University of Moratuwa, Rusin integrates the technical rigor of Facilities Management with the high-performance discipline of a world-record athlete. His academic journey in one of Sri Lanka's most prestigious technical universities provides the analytical foundation for his record-breaking achievements.",
      faculty: "Faculty of Architecture"
    },
    timeline: {
      title: "The Journey of Excellence",
      subtitle: "A timeline of milestones, records, and recognition.",
      events: [
        {
          year: "2023",
          title: "The Masterpiece Published",
          desc: "Released his first major publication focusing on mental discipline and physical optimization.",
          icon: BookOpen,
          color: "text-blue-400"
        },
        {
          year: "2024",
          title: "Guinness World Record",
          desc: "Officially certified as a World Record holder after months of rigorous training and verification.",
          icon: Award,
          color: "text-amber-400"
        },
        {
          year: "2025",
          title: "National Excellence Award",
          desc: "Recognized by the Ministry of Youth & Sports for outstanding contribution to national prestige.",
          icon: Star,
          color: "text-purple-400"
        },
        {
          year: "2026",
          title: "Global Visionary Award",
          desc: "Honored internationally for bridging the gap between Facilities Management and Human Performance.",
          icon: Zap,
          color: "text-emerald-400"
        }
      ]
    },
    story: {
      title: "My Story",
      text: "Beyond the records and the academic achievements lies a journey fueled by curiosity and the desire to redefine limits. From the lecture halls of Moratuwa to the global stage of Guinness World Records, every step has been a lesson in resilience. I believe that human potential is an untapped reservoir, and my mission is to inspire others to dive deep and discover their own greatness."
    },
    record: {
      verifying: "Authenticating with GWR Global Servers...",
      success: "Verification Successful",
      viewCertificate: "Official Record Found",
      details: "World Record: Most consecutive push-ups with a 40lb pack (Example Record Content)",
      date: "Certified: October 24, 2025"
    },
    stats: {
      records: "World Records",
      tv: "TV Appearances",
      articles: "Published Articles",
      hours: "Hours of Dedication"
    },
    articles: {
      title: "Latest Publications",
      read: "Read Article"
    },
    tv: {
      title: "Television & Media",
      watch: "Watch Episode"
    },
    footer: "© 2026 Rusin Thathsara. All rights reserved.",
    biography: "Biography",
    systemPrecision: "System Precision",
    faculty: "Faculty",
    architecture: "Architecture",
    field: "Field",
    fmEngineering: "FM Engineering",
    dateOfAchievement: "Date of Achievement",
    location: "Location",
    colombo: "Colombo, Sri Lanka",
    timelineLabel: "Timeline",
    library: "Library",
    read: "Read",
    viewAll: "View All",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    recordHolderDesc: "Guinness World Record Holder and Facilities Management enthusiast dedicated to mental excellence and technical precision.",
    astronomy: {
      label: "Stargazer",
      title: "Under the",
      titleAccent: "Infinite Sky",
      quote: "\"The cosmos is within us. We are made of star-stuff.\" — Carl Sagan",
      intro: "Beyond records and equations, Rusin finds his deepest inspiration in the night sky. A dedicated amateur astronomer, he believes that gazing at the cosmos fuels the same drive that breaks world records — the relentless pursuit of the unknown.",
      objects: [
        { emoji: "🌌", name: "Andromeda Galaxy", type: "Galaxy", dist: "2.537M ly", factEn: "Our nearest galactic neighbour — a trillion stars visible to the naked eye on a clear night." },
        { emoji: "🪐", name: "Saturn", type: "Planet", dist: "~1.2B km", factEn: "Its rings span 282,000 km yet are only ~10 m thick — the most elegant structure in the solar system." },
        { emoji: "✨", name: "Orion Nebula", type: "Nebula", dist: "1,344 ly", factEn: "A stellar nursery where new stars are born — a reminder that creation is a cosmic constant." },
        { emoji: "⭐", name: "Pleiades", type: "Star Cluster", dist: "444 ly", factEn: "Seven sisters visible with the naked eye — revered by cultures across every continent for millennia." }
      ],
      viewSky: "Explore the Sky"
    }
  },
  ru: {
    nav: { home: "Главная", articles: "Статьи", tv: "ТВ Программы", about: "О рекорде" },
    hero: {
      name: "Русин Татсара",
      title: "Рекордсмен Книги Гиннесса",
      subtitle: "Расширяя границы человеческого потенциала. Исследователь, Творец и Рекордсмен.",
      cta1: "Проверить рекорд",
      cta2: "Смотреть ТВ",
      roles: ["Рекордсмен Гиннесса", "Специалист по управлению объектами", "Ментальный атлет", "Астроном"]
    },
    about: {
      title: "Академические достижения",
      education: "Университет Моратувы",
      degree: "Бакалавр (с отличием) в области управления объектами",
      bio: "Будучи студентом Университета Моратувы, Русин сочетает техническую строгость управления объектами с дисциплиной атлета мирового уровня. Его академический путь в одном из самых престижных технических университетов Шри-Ланки заложил аналитическую основу для его достижений.",
      faculty: "Архитектурный факультет"
    },
    timeline: {
      title: "Путь к совершенству",
      subtitle: "Хронология достижений, рекордов и признания.",
      events: [
        {
          year: "2023",
          title: "Публикация книги",
          desc: "Выпуск первой крупной книги, посвященной ментальной дисциплине и физической оптимизации.",
          icon: BookOpen,
          color: "text-blue-400"
        },
        {
          year: "2024",
          title: "Рекорд Гиннесса",
          desc: "Официально сертифицирован как мировой рекордсмен после месяцев тренировок и проверки.",
          icon: Award,
          color: "text-amber-400"
        },
        {
          year: "2025",
          title: "Национальная премия",
          desc: "Признание Министерством молодежи и спорта за выдающийся вклад в национальный престиж.",
          icon: Star,
          color: "text-purple-400"
        },
        {
          year: "2026",
          title: "Международная премия Visionary",
          desc: "Международное признание за объединение управления объектами и человеческого потенциала.",
          icon: Zap,
          color: "text-emerald-400"
        }
      ]
    },
    story: {
      title: "Моя история",
      text: "За рекордами и академическими успехами стоит путь, движимый любопытством и желанием переосмыслить пределы возможного. От лекционных залов Моратувы до мировой арены рекордов Гиннесса. Я верю, что человеческий потенциал — это неиссякаемый резервуар, и моя миссия — вдохновлять других открывать для себя собственное величие."
    },
    record: {
      verifying: "Аутентификация на серверах GWR...",
      success: "Проверка прошла успешно",
      viewCertificate: "Официальный рекорд найден",
      details: "Мировой рекорд: Наибольшее количество отжиманий подряд с рюкзаком 40 фунтов",
      date: "Сертифицировано: 24 октября 2025 г."
    },
    stats: {
      records: "Мировых рекордов",
      tv: "ТВ Выступлений",
      articles: "Опубликованных статей",
      hours: "Часов подготовки"
    },
    articles: {
      title: "Последние публикации",
      read: "Читать статью"
    },
    tv: {
      title: "Телевидение и Медиа",
      watch: "Смотреть эпизод"
    },
    footer: "© 2026 Русин Татсара. Все права защищены.",
    biography: "Биография",
    systemPrecision: "Системная точность",
    faculty: "Факультет",
    architecture: "Архитектура",
    field: "Область",
    fmEngineering: "Инженерия ФМ",
    dateOfAchievement: "Дата достижения",
    location: "Место",
    colombo: "Коломбо, Шри-Ланка",
    timelineLabel: "Хронология",
    library: "Библиотека",
    read: "Читать",
    viewAll: "Посмотреть все",
    privacyPolicy: "Политика конфиденциальности",
    termsOfUse: "Условия использования",
    recordHolderDesc: "Рекордсмен Книги Гиннесса и энтузиаст управления объектами, посвященный умственному совершенству и технической точности.",
    astronomy: {
      label: "Звездочёт",
      title: "Под",
      titleAccent: "Бесконечным небом",
      quote: "\"Космос внутри нас. Мы сделаны из звёздной пыли.\" — Карл Саган",
      intro: "За пределами рекордов и уравнений Русин черпает своё глубочайшее вдохновение в ночном небе. Как преданный астроном-любитель, он убеждён: созерцание космоса питает ту же страсть, что и мировые рекорды — неустанное стремление к неизвестному.",
      objects: [
        { emoji: "🌌", name: "Галактика Андромеды", type: "Галактика", dist: "2,537 млн св. лет", factEn: "Наш ближайший галактический сосед — триллион звёзд, видимых невооружённым глазом в ясную ночь." },
        { emoji: "🪐", name: "Сатурн", type: "Планета", dist: "~1.2 млрд км", factEn: "Его кольца диаметром 282 000 км и толщиной всего ~10 м — самая изящная структура Солнечной системы." },
        { emoji: "✨", name: "Туманность Ориона", type: "Туманность", dist: "1 344 св. года", factEn: "Звёздная колыбель, где рождаются новые звёзды — напоминание о том, что творение — космическая константа." },
        { emoji: "⭐", name: "Плеяды", type: "Звёздное скопление", dist: "444 св. года", factEn: "Семь сестёр, видимых невооружённым глазом — их почитали культуры всех континентов тысячелетиями." }
      ],
      viewSky: "Исследовать небо"
    }
  }
};

const articleData = [
  { id: 1, imgGradient: "from-purple-500 to-indigo-500", dateEn: "Oct 2025", dateRu: "Окт 2025", titleEn: "The Journey to the First Record", titleRu: "Путь к первому рекорду", readTimeEn: "5 min", readTimeRu: "5 мин", descEn: "Exploring how high-performance discipline can transform modern facility management.", descRu: "Исследование того, как высокопроизводительная дисциплина может трансформировать современное управление объектами." },
  { id: 2, imgGradient: "from-blue-500 to-cyan-500", dateEn: "Nov 2025", dateRu: "Ноя 2025", titleEn: "Overcoming Mental Barriers", titleRu: "Преодоление ментальных барьеров", readTimeEn: "8 min", readTimeRu: "8 мин", descEn: "Techniques for breaking through psychological walls during extreme endurance.", descRu: "Техники преодоления психологических барьеров во время экстремальной выносливости." },
  { id: 3, imgGradient: "from-amber-500 to-orange-500", dateEn: "Jan 2026", dateRu: "Янв 2026", titleEn: "Training Regimen Revealed", titleRu: "Раскрытие режима тренировок", readTimeEn: "12 min", readTimeRu: "12 мин", descEn: "A deep dive into the daily physical preparation required for a world record.", descRu: "Глубокое погружение в ежедневную физическую подготовку, необходимую для мирового рекорда." },
  { id: 4, imgGradient: "from-emerald-500 to-teal-500", dateEn: "Feb 2026", dateRu: "Фев 2026", titleEn: "What's Next for Rusin?", titleRu: "Что дальше для Русина?", readTimeEn: "6 min", readTimeRu: "6 мин", descEn: "Future goals and how bridging engineering with human potential is the next step.", descRu: "Будущие цели и как объединение инженерии с человеческим потенциалом является следующим шагом." },
];

const tvData = [
  { id: 1, imgGradient: "from-rose-500 to-pink-500", networkEn: "Global News", networkRu: "Глобальные новости", titleEn: "Morning Show Feature", titleRu: "Утреннее шоу", duration: "45:00" },
  { id: 2, imgGradient: "from-violet-500 to-fuchsia-500", networkEn: "Discovery", networkRu: "Discovery", titleEn: "The Limitless Mind Documentary", titleRu: "Документальный фильм 'Безграничный разум'", duration: "1:20:00" },
  { id: 3, imgGradient: "from-yellow-400 to-amber-600", networkEn: "Sports Network", networkRu: "Спортивная сеть", titleEn: "Record Breakers Series", titleRu: "Серия 'Рекордсмены'", duration: "30:00" },
];

const RevealSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const endValue = parseInt(end.replace(/\D/g, ''));
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const TypewriterEffect = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 0);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <div className="h-8 flex items-center justify-center lg:justify-start">
      <span className="text-amber-400 font-mono font-bold tracking-tight text-base sm:text-lg">
        {phrases[index].substring(0, subIndex)}
      </span>
      <span className="w-1 h-6 bg-amber-400 ml-1 animate-pulse"></span>
    </div>
  );
};

const GlassCard = ({ children, className = "", delay = "0s" }) => (
  <div
    className={`relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </div>
);

const ImageHolder = ({ label, icon: Icon, aspect = "aspect-square" }) => {
  return (
    <div className={`w-full ${aspect} rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center relative group overflow-hidden transition-transform duration-500 hover:-rotate-[2deg] shadow-2xl`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {Icon && <Icon className="w-12 h-12 text-white/20 group-hover:text-amber-400/50 transition-all duration-500 group-hover:scale-110" />}
      <span className="mt-4 text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{label}</span>
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

const SHOOTING_STARS = [...Array(2)].map((_, i) => ({
  top: `${10 + Math.random() * 30}%`,
  duration: 22 + Math.random() * 12,
  delay: i * 12,
}));

const Background = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 80;
    const newStars = [...Array(starCount)].map((_, i) => {
      const type = Math.random() > 0.5 ? 'blink' : 'sparkle';
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.6 ? 4 : Math.random() < 0.9 ? 6 : 8,
        type,
        duration: type === 'blink' ? 0.5 + Math.random() * 1 : 1.5 + Math.random() * 2,
        delay: Math.random() * 5,
        rotate: Math.random() * 90,
      };
    });
    setStars(newStars);

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes star-blink {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
      }
      @keyframes star-sparkle {
        0%, 100% { transform: scale(0.6) rotate(var(--rotation)); opacity: 0.4; }
        50% { transform: scale(1.1) rotate(var(--rotation)); opacity: 1; }
      }
      @keyframes shooting-star {
        0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(0); opacity: 0; }
        1% { transform: translateX(0) translateY(0) rotate(-45deg) scale(1); opacity: 1; }
        15% { transform: translateX(-600px) translateY(600px) rotate(-45deg) scale(1); opacity: 0; }
        100% { transform: translateX(-600px) translateY(600px) rotate(-45deg) scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#02040a] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1530] via-[#02040a] to-black" />
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] rounded-full blur-[80px] bg-blue-500/10 opacity-30" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[70px] bg-indigo-500/10 opacity-20" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `${star.type === 'blink' ? 'star-blink' : 'star-sparkle'} ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            '--rotation': `${star.rotate}deg`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full drop-shadow-[0_0_1.5px_rgba(255,255,255,0.9)]">
            <path d="M12 0L14.5 9.5H24L16.5 14.5L19 24L12 19L5 24L7.5 14.5L0 9.5H9.5L12 0Z" />
          </svg>
        </div>
      ))}

      {SHOOTING_STARS.map((s, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-[200px] h-[1px] bg-gradient-to-r from-blue-200 to-transparent"
          style={{
            top: s.top,
            right: '-20%',
            boxShadow: '0 0 8px rgba(147, 197, 253, 0.8)',
            animation: `shooting-star ${s.duration}s linear infinite`,
            animationDelay: `${s.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [recordLoadingState, setRecordLoadingState] = useState('idle');
  const [loadProgress, setLoadProgress] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.4); }
        50% { box-shadow: 0 0 40px rgba(250, 204, 21, 0.8); }
      }
      @keyframes slide-up {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      .animate-slide-up { animation: slide-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      .glass-text { text-shadow: 0 2px 10px rgba(255,255,255,0.2); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleVerifyRecord = () => {
    if (recordLoadingState === 'success') return;
    setRecordLoadingState('loading');
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => setRecordLoadingState('success'), 600);
      } else {
        setLoadProgress(progress);
      }
    }, 250);
  };

  const handleNavClick = (id) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', icon: Star, label: t.nav.home },
    { id: 'articles', icon: BookOpen, label: t.nav.articles },
    { id: 'tv', icon: Tv, label: t.nav.tv },
  ];

  return (
    <div className="text-slate-200 font-sans overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200 relative">
      <Background />

      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0a1530]/70 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform">
              <Award className="text-slate-950 w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-wide">
              {t.hero.name.split(' ')[0]} <span className="text-amber-400">{t.hero.name.split(' ')[1]}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${page === item.id ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'text-slate-400 hover:text-white'}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-slate-900 border-b border-white/10 animate-in slide-in-from-top duration-300 shadow-2xl z-40">
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-4 text-lg font-semibold p-4 rounded-2xl ${page === item.id ? 'bg-amber-500/10 text-amber-400' : 'text-slate-400'}`}
                >
                  <item.icon className="w-6 h-6" />
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={() => {
                  setLang(lang === 'en' ? 'ru' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-4 text-lg font-semibold p-4 rounded-2xl text-cyan-400 bg-cyan-400/5"
              >
                <Globe className="w-6 h-6" />
                Language: {lang === 'en' ? 'English' : 'Русский'}
              </button>
            </div>
          </div>
        )}
        {/* Glowing star-themed separator */}
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent 0%, rgba(96,165,250,0.15) 20%, rgba(99,102,241,0.5) 50%, rgba(96,165,250,0.15) 80%, transparent 100%)', boxShadow: '0 0 8px 1px rgba(99,102,241,0.3)' }} />
      </nav>

      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {page === 'home' && (
          <div className="space-y-32 animate-in fade-in zoom-in-95 duration-700">
            <div className="flex flex-col items-center gap-8 pt-10 text-center max-w-4xl mx-auto">
              <RevealSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wide backdrop-blur-md mb-6">
                  <Award className="w-4 h-4" />
                  {t.hero.title}
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight glass-text leading-tight">
                    {t.hero.name.split(' ')[0]} <br className="sm:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                      {t.hero.name.split(' ')[1]}
                    </span>
                  </h1>
                  <div className="flex justify-center mt-4">
                    <TypewriterEffect phrases={t.hero.roles} />
                  </div>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed pt-6">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-4 pt-8">
                  <button
                    onClick={handleVerifyRecord}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-lg font-bold hover:scale-105 transition-transform animate-pulse-glow flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    disabled={recordLoadingState !== 'idle'}
                  >
                    {recordLoadingState === 'success' ? <CheckCircle className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                    {t.hero.cta1}
                  </button>
                  <button onClick={() => handleNavClick('tv')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-bold backdrop-blur-md hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Play className="w-6 h-6" /> {t.hero.cta2}
                  </button>
                </div>
              </RevealSection>
            </div>

            {(recordLoadingState === 'loading' || recordLoadingState === 'success') && (
              <div className="py-10 animate-slide-up">
                <GlassCard className="max-w-4xl mx-auto border-amber-500/20 relative overflow-hidden">
                  {recordLoadingState === 'loading' ? (
                    <div className="py-12 px-8 flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-6"></div>
                      <h3 className="text-xl font-bold text-white mb-2">{t.record.verifying}</h3>
                      <div className="w-full bg-white/5 h-2 rounded-full max-w-md overflow-hidden mt-4 border border-white/10">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300" style={{ width: `${loadProgress}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-center p-4">
                      <div className="w-64 md:w-80 h-80 md:h-[400px] bg-[#fdfaf5] border-4 border-amber-600/40 rounded-sm shadow-2xl flex flex-col items-center justify-between p-6 text-center group relative ring-8 ring-amber-900/10">
                        <div className="absolute inset-0 border-[16px] border-double border-amber-900/5 pointer-events-none" />
                        <div className="z-10 flex flex-col items-center mt-2">
                          <Award className="w-20 h-20 text-amber-600 mb-6 group-hover:rotate-12 transition-transform duration-500" />
                          <div className="bg-amber-600 text-white font-black text-xs px-3 py-1 rounded tracking-[0.2em] mb-4 uppercase">Official</div>
                          <h4 className="text-slate-900 font-serif text-xl font-bold leading-tight">GUINNESS WORLD RECORDS</h4>
                          <div className="w-24 h-px bg-amber-900/20 my-4" />
                          <p className="text-slate-800/60 text-[10px] font-medium leading-relaxed uppercase tracking-wider italic">CERTIFICATE OF AUTHENTICITY</p>
                        </div>
                        <div className="z-10 pb-4">
                          <div className="text-amber-600 text-xs font-black tracking-widest uppercase mb-1">Certified Holder</div>
                          <div className="text-slate-900 font-serif text-lg font-bold">{t.hero.name}</div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20">
                          <CheckCircle className="w-5 h-5" /> {t.record.success}
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">{t.record.viewCertificate}</h3>
                        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-medium">{t.record.details}</p>
                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 pt-6 border-t border-white/10">
                          <div className="flex items-center gap-3 text-slate-400">
                            <Calendar className="w-5 h-5 text-amber-500" />
                            <div className="text-left">
                              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{t.dateOfAchievement}</div>
                              <div className="text-sm font-bold text-white tracking-wide">{t.record.date.replace('Certified: ', '').replace('Сертифицировано: ', '')}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-slate-400">
                            <MapPin className="w-5 h-5 text-amber-500" />
                            <div className="text-left">
                              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{t.location}</div>
                              <div className="text-sm font-bold text-white tracking-wide uppercase">{t.colombo}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </div>
            )}

            <RevealSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10">
                {[
                  { icon: Award, label: t.stats.records, value: "1", suffix: "", color: "text-amber-400", bg: "bg-amber-500/10" },
                  { icon: Tv, label: t.stats.tv, value: "24", suffix: "+", color: "text-blue-400", bg: "bg-blue-500/10" },
                  { icon: BookOpen, label: t.stats.articles, value: "150", suffix: "+", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: TrendingUp, label: t.stats.hours, value: "10000", suffix: "+", color: "text-purple-400", bg: "bg-purple-500/10" },
                ].map((stat, i) => (
                  <GlassCard key={i} className="text-center group overflow-hidden border-white/5 p-4 sm:p-6">
                    <div className={`w-12 h-12 mx-auto rounded-full ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</p>
                  </GlassCard>
                ))}
              </div>
            </RevealSection>

            <RevealSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-8 order-2 lg:order-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                    {t.biography}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.story.title}</h2>
                  <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                    {t.story.text}
                  </p>
                  <a
                    href="https://si.wikipedia.org/wiki/රුසින්_තත්සර"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 mx-auto lg:mx-0 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 w-fit"
                  >
                    {lang === 'en' ? "Learn more about my journey" : "Узнать больше о моём пути"} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2 px-8 sm:px-16 lg:px-0">
                  <ImageHolder label={lang === 'en' ? "Rusin Thathsara Profile" : "Профиль Русина Татсара"} icon={Star} aspect="aspect-[4/5]" />
                </div>
              </div>
            </RevealSection>

            <section id="about" className="py-24 bg-slate-900/20 rounded-[3rem] -mx-4 sm:mx-0 px-4 sm:px-8">
              <RevealSection>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-10">
                    <div className="space-y-4 text-center lg:text-left">
                      <div className="inline-flex items-center gap-3 text-amber-500">
                        <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8" />
                        <span className="text-xs sm:text-sm font-black uppercase tracking-widest">{t.about.title}</span>
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                        {lang === 'en' ? "ENGINEERING" : "ИНЖЕНЕРИЯ"} <br />
                        {lang === 'en' ? "THE EXTRAORDINARY" : "НЕОБЫКНОВЕННОГО"}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      <div className="p-6 sm:p-8 rounded-[2rem] bg-slate-950/50 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <School className="w-20 h-20" />
                        </div>
                        <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-widest text-xs sm:text-sm">{t.about.education}</h3>
                        <p className="text-xl sm:text-2xl font-black text-white mb-4">{t.about.degree}</p>
                        <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                          {t.about.bio}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-300">
                          <MapPin className="w-3 h-3" /> {t.about.faculty}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[
                          { label: t.faculty, value: t.architecture, icon: School },
                          { label: t.field, value: t.fmEngineering, icon: ShieldCheck },
                        ].map((item, i) => (
                          <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                            <item.icon className="w-6 h-6 text-amber-500" />
                            <div>
                              <p className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">{item.label}</p>
                              <p className="text-xs sm:text-sm font-bold text-white uppercase">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-4 sm:pt-12">
                      <div className="p-6 rounded-3xl bg-amber-500 text-black flex flex-col justify-center h-full sm:h-auto sm:aspect-square">
                        <Star className="w-8 h-8 mb-4 fill-black" />
                        <p className="text-3xl font-black leading-tight">1-5%</p>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">{t.systemPrecision}</p>
                      </div>
                    </div>
                    <div className="space-y-4 h-full">
                      <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400" className="rounded-3xl border border-white/5 grayscale object-cover w-full h-full min-h-[250px]" alt="Campus" />
                    </div>
                  </div>
                </div>
              </RevealSection>
            </section>

            <div className="relative py-10">
              <RevealSection>
                <div className="text-center mb-16 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {t.timelineLabel}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{t.timeline.title}</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto px-4">{t.timeline.subtitle}</p>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
                  <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-500/50 via-purple-500/50 to-emerald-500/20" />
                  <div className="space-y-12 sm:space-y-16">
                    {t.timeline.events.map((event, index) => (
                      <RevealSection key={index}>
                        <div className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`} style={{ transitionDelay: `${index * 200}ms` }}>
                          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-white/20 flex items-center justify-center z-10">
                            <div className={`w-3 h-3 rounded-full ${event.color} bg-current animate-pulse`} />
                          </div>
                          <div className="w-full sm:w-[45%] pl-14 sm:pl-0">
                            <GlassCard className={`p-6 sm:p-8 hover:scale-[1] transition-transform ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                              <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                                <div className={`p-2 sm:p-3 rounded-xl bg-white/5 ${event.color}`}>
                                  <event.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className="text-xl sm:text-2xl font-black text-white/40 font-mono tracking-tighter">{event.year}</span>
                              </div>
                              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{event.title}</h4>
                              <p className="text-slate-400 leading-relaxed text-sm">{event.desc}</p>
                            </GlassCard>
                          </div>
                          <div className="hidden sm:block w-[45%]" />
                        </div>
                      </RevealSection>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* ── ASTRONOMY SECTION ── */}
            <section id="astronomy" className="relative py-24 rounded-[3rem] -mx-4 sm:mx-0 px-4 sm:px-8 overflow-hidden">
              {/* cosmic ambient glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-indigo-950/40 via-[#02040a]/60 to-blue-950/30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

              <RevealSection>
                {/* header */}
                <div className="text-center mb-16 space-y-5 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-bold uppercase tracking-widest">
                    <Telescope className="w-4 h-4" />
                    {t.astronomy.label}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    {t.astronomy.title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400">
                      {t.astronomy.titleAccent}
                    </span>
                  </h2>
                  {/* quote */}
                  <p className="text-slate-400 italic text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
                    {t.astronomy.quote}
                  </p>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
                  {/* left — intro + CTA */}
                  <div className="space-y-8">
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                      {t.astronomy.intro}
                    </p>

                    {/* Astronomy image */}
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-indigo-400/10 shadow-2xl group">
                      <img
                        src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=900"
                        alt="Milky Way night sky"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020610]/80 via-transparent to-transparent" />
                      {/* caption */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <Telescope className="w-4 h-4 text-indigo-300" />
                        <span className="text-xs font-bold text-white/70 uppercase tracking-[0.2em]">
                          {lang === 'en' ? "Rusin's Observatory" : 'Обсерватория Русина'}
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://www.nasa.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-semibold hover:bg-indigo-500/20 transition-all text-sm group w-fit"
                    >
                      <Star className="w-4 h-4 fill-indigo-300" />
                      {t.astronomy.viewSky}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* right — celestial object cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {t.astronomy.objects.map((obj, i) => (
                      <GlassCard
                        key={i}
                        className="group border-indigo-500/10 hover:border-indigo-400/30 flex flex-col gap-3 p-5 relative overflow-hidden"
                      >
                        {/* subtle glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="text-3xl">{obj.emoji}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-base font-bold text-white">{obj.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 font-bold uppercase tracking-wider">
                              {obj.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                            <MapPin className="w-3 h-3" />
                            {obj.dist}
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">{obj.factEn}</p>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </section>

            <section id="articles" className="py-24 bg-white/[0.02] rounded-[3rem] -mx-4 sm:mx-0 px-4 sm:px-8">
              <RevealSection>
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-6 text-center md:text-left">
                  <div className="space-y-4">
                    <div className="inline-flex md:flex items-center gap-3 text-amber-500">
                      <BookOpen className="w-6 h-6" />
                      <span className="text-xs sm:text-sm font-black uppercase tracking-widest">{t.library}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                      {t.articles.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavClick('articles')}
                    className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all bg-white/5"
                  >
                    {t.viewAll} <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
                  {articleData.slice(0, 2).map((article) => (
                    <div key={article.id} onClick={() => handleNavClick('articles')} className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer">
                      <div className={`w-full sm:w-48 h-48 rounded-2xl bg-gradient-to-br ${article.imgGradient} overflow-hidden shrink-0 flex items-center justify-center`}>
                        <BookOpen className="w-12 h-12 text-white/40 group-hover:scale-125 transition-transform duration-700" />
                      </div>
                      <div className="space-y-4 flex flex-col justify-center">
                        <div className="flex gap-3 items-center">
                          <span className="px-3 py-1 bg-amber-500/10 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">{t.read}</span>
                          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? article.readTimeEn : article.readTimeRu}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-amber-500 transition-colors">
                          {lang === 'en' ? article.titleEn : article.titleRu}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {lang === 'en' ? article.descEn : article.descRu}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </section>
          </div>
        )}

        {page === 'articles' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-500 pt-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10 text-center sm:text-left">
              <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30"><BookOpen className="w-8 h-8 text-emerald-400" /></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{t.articles.title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {articleData.map((article) => (
                <GlassCard key={article.id} className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 group cursor-pointer hover:-translate-y-2">
                  <div className={`w-full sm:w-48 h-48 rounded-2xl bg-gradient-to-br ${article.imgGradient} flex-shrink-0 relative overflow-hidden flex items-center justify-center`}>
                    <FileText className="w-10 h-10 text-white/40 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-2">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-400 tracking-wider bg-white/5 px-3 py-1 rounded-full">{lang === 'en' ? article.dateEn : article.dateRu}</span>
                        <span className="text-xs font-medium text-emerald-400">{lang === 'en' ? article.readTimeEn : article.readTimeRu}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">{lang === 'en' ? article.titleEn : article.titleRu}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2">{lang === 'en' ? article.descEn : article.descRu}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform w-max">{t.articles.read} <ArrowRight className="w-4 h-4" /></div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {page === 'tv' && (
          <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500 pt-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10 text-center sm:text-left">
              <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30"><Tv className="w-8 h-8 text-blue-400" /></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{t.tv.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {tvData.map((show) => (
                <GlassCard key={show.id} className="p-0 overflow-hidden group cursor-pointer hover:-translate-y-2 flex flex-col">
                  <div className={`w-full h-48 sm:h-56 bg-gradient-to-br ${show.imgGradient} relative flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-all z-10"><Play className="w-6 h-6 text-white ml-1 fill-white" /></div>
                  </div>
                  <div className="p-6 flex-1 bg-gradient-to-b from-white/5 to-transparent">
                    <span className="text-xs font-bold text-blue-400 tracking-wider mb-2 block">{lang === 'en' ? show.networkEn : show.networkRu}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{lang === 'en' ? show.titleEn : show.titleRu}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500"><Clock className="w-3 h-3 inline mr-1" /> {show.duration}</span>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform"><Tv className="w-4 h-4" /> {t.tv.watch}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="py-8 sm:py-12 bg-black/50 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">{t.hero.name}</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm max-w-sm">
                  {t.recordHolderDesc}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Instagram, href: "#", color: "hover:text-[#E4405F]", label: "Instagram" },
                  { icon: Facebook, href: "#", color: "hover:text-[#1877F2]", label: "Facebook" },
                  { icon: Globe, href: "#", color: "hover:text-[#1DA1F2]", label: "Twitter" },
                  { icon: FileText, href: "#", color: "hover:text-[#0A66C2]", label: "LinkedIn" },
                ].map((social, i) => (
                  <a key={i} href={social.href} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:-translate-y-1 hover:bg-white/10`} aria-label={social.label}>
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-slate-600 text-xs sm:text-sm">{t.footer}</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
              </div>
            </div>
          </RevealSection>
        </div>
      </footer>
    </div>
  );
}
