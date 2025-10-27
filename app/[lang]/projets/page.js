'use client';
import { FaCar, FaEye } from 'react-icons/fa';
import './projects.css';
import { use } from 'react';

const translations = {
  ar: {
    headerTitle: "المشاريع والمبادرات الرقمية",
    headerDesc: "استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا",
    ideaTitle: "هل لديك فكرة مشروع رقمي؟",
    ideaDesc: "نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.",
    btnNew: "اقتراح مشروع جديد",
    btnAll: "عرض جميع المشاريع",
    projects: [
      {
        icon:"👁️",
        status: "مكتمل",
        category: "خدمات حكومية",
        title: 'منصة "عين" - نظام إدارة الشكاوى',
        desc: "بوابة إلكترونية تتيح للمواطنين الإبلاغ عن المشاكل الإدارية ومتابعة تطور شكاواهم، بهدف تعزيز الشفافية وتحسين المعالجة.",
        features: [
          "واجهة سهلة الاستخدام للمواطنين",
          "نظام تتبع الشكاوى في الوقت الفعلي",
          "تصنيف تلقائي للشكاوى"
        ],
        progress: 100,
        start: "يناير 2023",
        end: "يونيو 2023",
        color: "blue"
      },
      {
        icon: "🚗" ,
        status: "جاري التنفيذ",
        category: "المرور والنقل",
        title: "منصة إدارة المخالفات المرورية",
        desc: "نظام رقمي لتسجيل المخالفات ومعالجتها عبر الإنترنت، مع حفظ السجلات والمساعدة على الطريق.",
        features: [
          "تسجيل المخالفات إلكترونياً",
          "دفع الغرامات عبر الإنترنت",
          "نظام معالجة الطعون"
        ],
        progress: 85,
        start: "مارس 2024",
        end: "ديسمبر 2024",
        color: "yellow"
      },
      {
        icon: "🏥",
        status: "في التصميم",
        category: "قطاع الصحة",
        title: "المنصة الرقمية لقطاع الصحة",
        desc: "نظام الكتروني لإدارة المرافق الطبية والمواعيد، يهدف لتطوير قطاع الصحة وتحسين إدارة الرعاية الطبية.",
        features: [
          "ربط جميع المستشفيات والمراكز الصحية",
          "إدارة السجلات الطبية الإلكترونية",
          "نظام حجز المواعيد الطبية"
        ],
        progress: 30,
        start: "يناير 2024",
        end: "ديسمبر 2025",
        color: "orange"
      },
      {
        icon: "⚖️",
        status: "مخطط",
        category: "العدالة التجارية",
        title: "منصة إدارة النظام القضائي التجاري",
        desc: "منصة لإدارة القضايا التجارية إلكترونياً وأرشفة القرارات القضائية.",
        features: [
          "إدارة الملفات القضائية إلكترونياً",
          "نظام المتابعة والإشعارات",
          "أرشفة القرارات القضائية"
        ],
        progress: 15,
        start: "يوليو 2024",
        end: "يونيو 2026",
        color: "purple"
      },
      {
        icon: "💧",
        status: "قيد الدراسة",
        category: "المياه والصرف الصحي",
        title: "نظام المعلومات الوطني للمياه والصرف الصحي (SNEAS)",
        desc: "قاعدة بيانات لإدارة الموارد المائية ومراقبة جودة المياه وفوترة الخدمات.",
        features: [
          "مراقبة جودة المياه في الوقت الفعلي",
          "إدارة شبكات التوزيع",
          "فوترة إلكترونية للخدمات"
        ],
        progress: 5,
        start: "سبتمبر 2024",
        end: "مارس 2027",
        color: "cyan"
      },
      {
        icon: "📚",
        status: "جاري التنفيذ",
        category: "تدريب وتأهيل",
        title: "تعزيز التجارة الرقمية في الوزارة",
        desc: "برنامج تدريب لموظفي الحكومة لتحسين مهاراتهم في الأدوات الرقمية وإدارة البيانات.",
        features: [
          "دورات تدريبية متخصصة",
          "شهادات معتمدة",
          "تطبيق عملي على الأنظمة"
        ],
        progress: 75,
        start: "يناير 2024",
        end: "ديسمبر 2024",
        color: "green"
      }
    ]
  },
  fr: {
    headerTitle: "Projets et initiatives numériques",
    headerDesc: "Découvrez les projets numériques phares qui conduisent la transformation technologique en Mauritanie",
    ideaTitle: "Vous avez une idée de projet numérique ?",
    ideaDesc: "Nous nous efforçons toujours de développer des solutions numériques innovantes pour servir les citoyens et améliorer les services gouvernementaux. Partagez vos idées et suggestions pour contribuer à la transformation numérique.",
    btnNew: "Proposer un nouveau projet",
    btnAll: "Voir tous les projets",
    projects: [
      {
        icon: "👁️",
        status: "Terminé",
        category: "Services gouvernementaux",
        title: 'Plateforme "Ain" - Système de gestion des plaintes',
        desc: "Portail permettant aux citoyens de signaler des problèmes administratifs et de suivre l'évolution de leurs plaintes, afin de renforcer la transparence et d'améliorer le traitement.",
        features: [
          "Interface conviviale pour les citoyens",
          "Système de suivi des plaintes en temps réel",
          "Classification automatique des plaintes"
        ],
        progress: 100,
        start: "Janvier 2023",
        end: "Juin 2023",
        color: "blue"
      },
      {
        icon: "🚗",
        status: "En cours",
        category: "Transport et circulation",
        title: "Plateforme de gestion des infractions routières",
        desc: "Système numérique pour enregistrer et traiter les infractions en ligne, avec conservation des registres et assistance routière.",
        features: [
          "Enregistrement des infractions en ligne",
          "Paiement des amendes en ligne",
          "Système de traitement des recours"
        ],
        progress: 85,
        start: "Mars 2024",
        end: "Décembre 2024",
        color: "yellow"
      },
      {
        icon: "🏥",
        status: "En conception",
        category: "Secteur de la santé",
        title: "Plateforme numérique pour le secteur de la santé",
        desc: "Système numérique pour gérer les établissements et rendez-vous médicaux, visant à développer le secteur de la santé et améliorer la gestion des soins.",
        features: [
          "Connecter tous les hôpitaux et centres de santé",
          "Gestion des dossiers médicaux électroniques",
          "Système de réservation de rendez-vous médicaux"
        ],
        progress: 30,
        start: "Janvier 2024",
        end: "Décembre 2025",
        color: "orange"
      },
      {
        icon: "⚖️",
        status: "Planifié",
        category: "Justice commerciale",
        title: "Plateforme de gestion du système judiciaire commercial",
        desc: "Plateforme pour gérer les affaires commerciales électroniquement et archiver les décisions judiciaires.",
        features: [
          "Gestion électronique des dossiers judiciaires",
          "Système de suivi et notifications",
          "Archivage des décisions judiciaires"
        ],
        progress: 15,
        start: "Juillet 2024",
        end: "Juin 2026",
        color: "purple"
      },
      {
        icon: "💧",
        status: "En étude",
        category: "Eau et assainissement",
        title: "Système national d'information sur l'eau et l'assainissement (SNEAS)",
        desc: "Base de données pour gérer les ressources en eau, surveiller la qualité de l'eau et facturer les services.",
        features: [
          "Surveillance de la qualité de l'eau en temps réel",
          "Gestion des réseaux de distribution",
          "Facturation électronique des services"
        ],
        progress: 5,
        start: "Septembre 2024",
        end: "Mars 2027",
        color: "cyan"
      },
      {
        icon: "📚",
        status: "En cours",
        category: "Formation et qualification",
        title: "Renforcement du commerce numérique au sein du ministère",
        desc: "Programme de formation pour les employés du gouvernement afin d'améliorer leurs compétences dans les outils numériques et la gestion des données.",
        features: [
          "Cours de formation spécialisés",
          "Certificats accrédités",
          "Application pratique sur les systèmes"
        ],
        progress: 75,
        start: "Janvier 2024",
        end: "Décembre 2024",
        color: "green"
      }
    ]
  }
};

export default function ProjectsPage({ params }) {
  const {lang} = use(params);
  const currentLang=lang|| "ar";
  const t = translations[currentLang];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>{t.headerTitle}</h1>
        <p>{t.headerDesc}</p>
      </div>

      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <div key={i} className={'project-card ${p.color}'}>
            <div className="project-top">
              <span className="icon">{p.icon}</span>
              <span className="status">{p.status}</span>
            </div>
            <h2>{p.category}</h2>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>
              {p.features.map((f,j)=><li key={j}>{f}</li>)}
            </ul>

            {/* شريط التقدم */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '${p.progress}%' }}></div>
            </div>
            <p className="progress-text">{p.progress}%</p>

            <div className="project-footer">
              <p>{lang === "ar" ? "بداية" : "Début"}: {p.start}</p>
              <p>{lang === "ar" ? "نهاية" : "Fin"}: {p.end}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="idea-section">
        <h2>{t.ideaTitle}</h2>
        <p>{t.ideaDesc}</p>
        <div className="idea-buttons">
          <button className="btn-primary">{t.btnNew}</button>
          <button className="btn-secondary">{t.btnAll}</button>
        </div>
      </div>
    </section>
  );
}
