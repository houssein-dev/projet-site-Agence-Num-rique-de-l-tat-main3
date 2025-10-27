'use client';
import './roadmap.css';
import { use } from "react";

const translations = {
  ar: {
    headerTitle: "الخطة الزمنية للتحول الرقمي في موريتانيا",
    headerDesc: "استكشف المراحل التنفيذية والأهداف الاستراتيجية للتحول الرقمي 2024 - 2026",
    projects: [
      {
        icon: "🏛️",
        status: "قيد التنفيذ",
        category: "المرحلة الأولى - 2024",
        title: "تعزيز الخدمات الرقمية في الوزارة",
        desc: "إطلاق مشاريع رقمية أساسية لتقوية البنية التحتية الرقمية.",
        features: [
          "إطلاق البوابة الوطنية الموحدة للخدمات الحكومية",
          "تطوير منصة الهوية الرقمية الموحدة",
          "رقمنة 15 خدمة حكومية أساسية",
          "تدريب 500 موظف حكومي"
        ],
        progress: "65%",
        start: "يناير 2024",
        end: "ديسمبر 2024",
        color: "blue"
      },
      {
        icon: "📲",
        status: "مخطط",
        category: "المرحلة الثانية - 2025",
        title: "التوسع في التحول الرقمي",
        desc: "مشاريع توسعية لربط المؤسسات وتعزيز المعاملات الرقمية.",
        features: [
          "ربط جميع الوزارات بالشبكة الحكومية الموحدة",
          "إطلاق تطبيق موحد للخدمات الحكومية الذكية",
          "تطوير نظام الدفع الإلكتروني الحكومي",
          "إنشاء مراكز خدمة رقمية في جميع الولايات"
        ],
        progress: "15%",
        start: "يناير 2025",
        end: "ديسمبر 2025",
        color: "green"
      },
      {
        icon: "🤖",
        status: "مستقبلي",
        category: "المرحلة الثالثة - 2026",
        title: "الحكومة الذكية المتكاملة",
        desc: "مرحلة متقدمة من التحول الرقمي بالاعتماد على الذكاء الاصطناعي والتقنيات الحديثة.",
        features: [
          "تنفيذ نظام الذكاء الاصطناعي في اتخاذ القرارات",
          "إطلاق منصة البيانات المفتوحة الحكومية",
          "تطبيق تقنيات البلوك تشين في المعاملات الرسمية",
          "تحقيق التكامل الكامل بين الأنظمة الحكومية"
        ],
        progress: "5%",
        start: "يناير 2026",
        end: "ديسمبر 2026",
        color: "purple"
      }
    ],
    goalsTitle: "الأهداف الاستراتيجية",
    goals: [
      { icon: "🏛️", title: "الحكومة الرقمية", desc: "تحويل جميع الخدمات الحكومية إلى رقمية بحلول 2026", progress: "100% رقمنة" },
      { icon: "👥", title: "رضا المواطنين", desc: "تحسين تجربة المستخدم للخدمات الحكومية الرقمية", progress: "90% رضا" },
      { icon: "⚡", title: "الكفاءة التشغيلية", desc: "تقليل وقت معالجة المعاملات الحكومية بنسبة 70%", progress: "70% توفير وقت" }
    ]
  },
  fr: {
    headerTitle: "Plan temporel de la transformation numérique en Mauritanie",
    headerDesc: "Découvrez les phases de mise en œuvre et les objectifs stratégiques de la transformation numérique 2024 - 2026",
    projects: [
      {
        icon: "🏛️",
        status: "En cours",
        category: "Première phase - 2024",
        title: "Renforcement des services numériques au sein du ministère",
        desc: "Lancement de projets numériques essentiels pour renforcer l'infrastructure numérique.",
        features: [
          "Lancement du portail national unifié des services gouvernementaux",
          "Développement de la plateforme d'identité numérique unifiée",
          "Numérisation de 15 services gouvernementaux essentiels",
          "Formation de 500 fonctionnaires"
        ],
        progress: "65%",
        start: "Janvier 2024",
        end: "Décembre 2024",
        color: "blue"
      },
      {
        icon: "📲",
        status: "Planifié",
        category: "Deuxième phase - 2025",
        title: "Expansion de la transformation numérique",
        desc: "Projets d'expansion pour connecter les institutions et améliorer les transactions numériques.",
        features: [
          "Connecter tous les ministères au réseau gouvernemental unifié",
          "Lancement d'une application unifiée pour les services gouvernementaux intelligents",
          "Développement du système de paiement électronique gouvernemental",
          "Création de centres de services numériques dans toutes les régions"
        ],
        progress: "15%",
        start: "Janvier 2025",
        end: "Décembre 2025",
        color: "green"
      },
      {
        icon: "🤖",
        status: "Futur",
        category: "Troisième phase - 2026",
        title: "Gouvernement intelligent intégré",
        desc: "Phase avancée de la transformation numérique basée sur l'intelligence artificielle et les technologies modernes.",
        features: [
          "Mise en œuvre de l'intelligence artificielle dans la prise de décision",
          "Lancement de la plateforme gouvernementale de données ouvertes",
          "Application des technologies blockchain dans les transactions officielles",
          "Intégration complète de tous les systèmes gouvernementaux"
        ],
        progress: "5%",
        start: "Janvier 2026",
        end: "Décembre 2026",
        color: "purple"
      }
    ],
    goalsTitle: "Objectifs stratégiques",
    goals: [
      { icon: "🏛️", title: "Gouvernement numérique", desc: "Transformer tous les services gouvernementaux en services numériques d'ici 2026", progress: "100% Numérisation" },
      { icon: "👥", title: "Satisfaction des citoyens", desc: "Améliorer l'expérience utilisateur des services numériques gouvernementaux", progress: "90% Satisfaction" },
      { icon: "⚡", title: "Efficacité opérationnelle", desc: "Réduire le temps de traitement des transactions gouvernementales de 70%", progress: "70% Gain de temps" }
    ]
  }
};

export default function ProjectsPage({ params }) {
  const resolvedParams = use(params); // لفك الـ Promise في Next.js 14+
  const lang = resolvedParams.lang || "fr";
  const t = translations[lang];

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
            <div className="project-footer">
              <p>{lang === "ar" ? "نسبة الإنجاز" : "Progression"}: <b>{p.progress}</b></p>
              <p>{lang === "ar" ? "بداية" : "Début"}: {p.start}</p>
              <p>{lang === "ar" ? "نهاية" : "Fin"}: {p.end}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="goals-section">
        <h2>{t.goalsTitle}</h2>
        <div className="goals-grid">
          {t.goals.map((goal, i) => (
            <div key={i} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <h3>{goal.title}</h3>
              <p>{goal.desc}</p>
              <p className="goal-progress">{goal.progress}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}