'use client';
// Pas de import { use } from 'react' ici
import './projects.css';

const translations = {
  ar: {
    headerTitle: "المشاريع والمبادرات الرقمية",
    headerDesc: "استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا",
    ideaTitle: "هل لديك فكرة مشروع رقمي؟",
    ideaDesc: "نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.",
    btnNew: "اقتراح مشروع جديد",
    btnAll: "عرض جميع المشاريع",
    labels: { start: "بداية", end: "نهاية" },
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
    ideaDesc: "Nous développons des solutions numériques innovantes pour servir les citoyens et améliorer les services. Partagez vos idées pour contribuer à la transformation numérique.",
    btnNew: "Proposer un nouveau projet",
    btnAll: "Voir tous les projets",
    labels: { start: "Début", end: "Fin" },
    projects: [
      {
        icon: "👁️",
        status: "Terminé",
        category: "Services gouvernementaux",
        title: 'Plateforme "Ain" - Système de gestion des plaintes',
        desc: "Portail permettant aux citoyens de signaler des problèmes administratifs et de suivre l'évolution de leurs plaintes pour plus de transparence.",
        features: [
          "Interface conviviale",
          "Suivi en temps réel",
          "Classification automatique"
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
        desc: "Saisie et traitement en ligne des infractions, avec conservation des registres et assistance routière.",
        features: [
          "Enregistrement en ligne",
          "Paiement des amendes",
          "Traitement des recours"
        ],
        progress: 85,
        start: "Mars 2024",
        end: "Décembre 2024",
        color: "yellow"
      },
      {
        icon: "🏥",
        status: "En conception",
        category: "Santé",
        title: "Plateforme numérique du secteur de la santé",
        desc: "Gestion des établissements et des rendez-vous pour améliorer la prise en charge.",
        features: [
          "Connexion des hôpitaux",
          "Dossier médical électronique",
          "Réservation de rendez-vous"
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
        title: "Plateforme de gestion judiciaire commerciale",
        desc: "Gestion électronique des affaires et archivage des décisions.",
        features: [
          "Gestion des dossiers",
          "Suivi & notifications",
          "Archivage"
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
        title: "Système national d'information (SNEAS)",
        desc: "Gestion des ressources, qualité de l’eau et facturation.",
        features: [
          "Surveillance qualité",
          "Gestion des réseaux",
          "Facturation"
        ],
        progress: 5,
        start: "Septembre 2024",
        end: "Mars 2027",
        color: "cyan"
      },
      {
        icon: "📚",
        status: "En cours",
        category: "Formation & qualification",
        title: "Renforcement du commerce numérique",
        desc: "Programme de formation aux outils numériques et à la gestion des données.",
        features: [
          "Cours spécialisés",
          "Certificats",
          "Pratique sur systèmes"
        ],
        progress: 75,
        start: "Janvier 2024",
        end: "Décembre 2024",
        color: "green"
      }
    ]
  },
  en: {
    headerTitle: "Digital projects and initiatives",
    headerDesc: "Explore flagship digital projects driving technological transformation in Mauritania",
    ideaTitle: "Got a digital project idea?",
    ideaDesc: "We strive to build innovative digital solutions. Share your ideas to contribute to the transformation.",
    btnNew: "Propose a new project",
    btnAll: "View all projects",
    labels: { start: "Start", end: "End" },
    // Pour l'exemple on réutilise le contenu FR (tu peux traduire plus tard)
    projects: []
  }
};

// Si pas de projets en EN, on réutilise les FR (évite les erreurs et garde le contenu)
function getLocale(lang) {
  const base = translations[lang] ?? translations.ar;
  if (lang === 'en' && (!base.projects || base.projects.length === 0)) {
    return { ...base, projects: translations.fr.projects };
  }
  return base;
}

export default function ProjectsPage({ params }) {
  const lang = params?.lang ?? 'ar';
  const t = getLocale(lang);

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>{t.headerTitle}</h1>
        <p>{t.headerDesc}</p>
      </div>

      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <div key={i} className={`project-card ${p.color}`}>
            <div className="project-top">
              <span className="icon">{p.icon}</span>
              <span className="status">{p.status}</span>
            </div>
            <h2>{p.category}</h2>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>

            {/* Progress bar */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${p.progress}%` }}></div>
            </div>
            <p className="progress-text">{p.progress}%</p>

            <div className="project-footer">
              <p>{t.labels.start}: {p.start}</p>
              <p>{t.labels.end}: {p.end}</p>
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
