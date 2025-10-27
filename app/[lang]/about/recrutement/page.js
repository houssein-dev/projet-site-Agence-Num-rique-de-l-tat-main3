'use client';

import styles from "./jobs.module.css";

export default function JobsPage({ params }) {
  const lang = params?.lang ?? "ar"; // ✅ pas de use()
  
  const translations = {
    ar: {
      heroTitle: "فرص التوظيف",
      heroDesc: "انضم إلى فريقنا المتخصص وساهم في قيادة التحول الرقمي في موريتانيا",
      whyJoinTitle: "لماذا تنضم إلينا؟",
      benefits: [
        { icon: "💰", title: "راتب تنافسي", desc: "رواتب مجزية تتماشى مع السوق والخبرة" },
        { icon: "📈", title: "التطوير المهني", desc: "برامج تدريب وفرص تطوير وظيفي" },
        { icon: "💻", title: "بيئة عمل متطورة", desc: "أحدث التقنيات وأدوات العمل" },
        { icon: "🏥", title: "التأمين الصحي", desc: "تغطية شاملة للموظف وعائلته" },
        { icon: "🏠", title: "المرونة", desc: "خيارات العمل المرن والعمل عن بعد" },
        { icon: "🌴", title: "الإجازات", desc: "نظام إجازات سخي ومتوازن" },
      ],
      jobsTitle: "الوظائف المتاحة حالياً",
      jobs: [
        {
          title: "مطور تطبيقات الويب",
          meta: ["القسم التقني", "دوام كامل", "📍 نواكشوط", "3-5 سنوات"],
          deadline: "2025/03/15",
          requirements: ["خبرة في React.js و Node.js","معرفة MySQL/PostgreSQL","تصميم APIs","إتقان العربية والفرنسية"],
          responsibilities: ["تطوير تطبيقات الويب الحكومية","صيانة الأنظمة","التعاون مع الفريق","كتابة الوثائق التقنية"]
        },
        {
          title: "محلل أنظمة",
          meta: ["إدارة المشاريع", "دوام كامل", "📍 نواكشوط", "2-4 سنوات"],
          deadline: "2025/03/20",
          requirements: ["شهادة في علوم الحاسوب","خبرة في تحليل الأنظمة","مهارات إدارة المشاريع","إتقان العربية والإنجليزية"],
          responsibilities: ["تحليل المتطلبات","إعداد التوثيق التقني","التنسيق مع الفرق","ضمان جودة التطبيقات"]
        }
      ],
      applicationProcessTitle: "عملية التقديم",
      applicationSteps: ["التقديم الإلكتروني","المراجعة الأولية","المقابلة","القرار النهائي"],
      trainingTitle: "برنامج التدريب والتكوين",
      trainingDesc: "نوفر فرص تدريب للطلاب والخريجين الجدد لاكتساب الخبرة العملية في مجال التكنولوجيا",
      trainings: [
        { title: "التدريب الصيفي", items: ["مدة 3 أشهر","للطلاب في السنوات الأخيرة","مشاريع عملية"] },
        { title: "برنامج الخريجين الجدد", items: ["مدة 6-12 شهر","للخريجين الجدد","فرصة للتوظيف"] }
      ],
      contactTitle: "هل لديك أسئلة؟",
      contactDesc: "تواصل مع فريق الموارد البشرية",
      contactEmail: "📧 hr@an-etat.gov.mr",
      contactPhone: "📞 (+222) 45 25 XX XX"
    },
    fr: {
      heroTitle: "Offres d'emploi",
      heroDesc: "Rejoignez notre équipe et contribuez à la transformation numérique en Mauritanie",
      whyJoinTitle: "Pourquoi nous rejoindre ?",
      benefits: [
        { icon: "💰", title: "Salaire compétitif", desc: "Rémunération attractive selon marché/expérience" },
        { icon: "📈", title: "Développement pro", desc: "Formations et perspectives d’évolution" },
        { icon: "💻", title: "Environnement moderne", desc: "Technos et outils récents" },
        { icon: "🏥", title: "Assurance santé", desc: "Couverture complète pour vous et votre famille" },
        { icon: "🏠", title: "Flexibilité", desc: "Télétravail et horaires flexibles" },
        { icon: "🌴", title: "Congés", desc: "Politique de congés équilibrée" },
      ],
      jobsTitle: "Postes disponibles",
      jobs: [
        {
          title: "Développeur Web",
          meta: ["Département technique","Temps plein","📍 Nouakchott","3-5 ans"],
          deadline: "2025/03/15",
          requirements: ["React.js & Node.js","MySQL/PostgreSQL","Conception d’APIs","Arabe & Français"],
          responsibilities: ["Développer des apps web","Maintenance","Collaboration équipe","Documentation"]
        },
        {
          title: "Analyste systèmes",
          meta: ["Gestion de projet","Temps plein","📍 Nouakchott","2-4 ans"],
          deadline: "2025/03/20",
          requirements: ["Diplôme informatique","Analyse des systèmes","Gestion de projet","Arabe & Anglais"],
          responsibilities: ["Analyse des besoins","Docs techniques","Coordination équipes","Qualité applicative"]
        }
      ],
      applicationProcessTitle: "Processus de candidature",
      applicationSteps: ["Candidature en ligne","Revue initiale","Entretien","Décision finale"],
      trainingTitle: "Programme de formation",
      trainingDesc: "Stages pour étudiants et jeunes diplômés afin d’acquérir une expérience pratique",
      trainings: [
        { title: "Stage d’été", items: ["3 mois","Étudiants fin de cycle","Projets pratiques"] },
        { title: "Programme jeunes diplômés", items: ["6–12 mois","Jeunes diplômés","Possibilité d’embauche"] }
      ],
      contactTitle: "Des questions ?",
      contactDesc: "Contactez l’équipe RH",
      contactEmail: "📧 hr@an-etat.gov.mr",
      contactPhone: "📞 (+222) 45 25 XX XX"
    },
    en: {
      heroTitle: "Job opportunities",
      heroDesc: "Join our team and help lead Mauritania’s digital transformation",
      whyJoinTitle: "Why join us?",
      benefits: [
        { icon: "💰", title: "Competitive pay", desc: "Market-aligned compensation" },
        { icon: "📈", title: "Career growth", desc: "Training and advancement paths" },
        { icon: "💻", title: "Modern setup", desc: "Latest tools and technologies" },
        { icon: "🏥", title: "Health coverage", desc: "Comprehensive benefits" },
        { icon: "🏠", title: "Flexibility", desc: "Hybrid/remote options" },
        { icon: "🌴", title: "Time off", desc: "Generous, balanced policy" },
      ],
      jobsTitle: "Open positions",
      jobs: [],
      applicationProcessTitle: "Application process",
      applicationSteps: ["Online application","Initial review","Interview","Final decision"],
      trainingTitle: "Training program",
      trainingDesc: "Internships for students and graduates to gain hands-on experience",
      trainings: [
        { title: "Summer internship", items: ["3 months","Final-year students","Practical projects"] },
        { title: "Graduate program", items: ["6–12 months","New graduates","Hiring opportunity"] }
      ],
      contactTitle: "Questions?",
      contactDesc: "Reach out to the HR team",
      contactEmail: "📧 hr@an-etat.gov.mr",
      contactPhone: "📞 (+222) 45 25 XX XX"
    }
  };

  // Fallback sûr si une langue/clés manquent
  const base = translations[lang] ?? translations.ar;
  const t = {
    ...translations.ar,
    ...base,
    benefits: base.benefits?.length ? base.benefits : translations.ar.benefits,
    jobs: base.jobs?.length ? base.jobs : translations.fr.jobs // recycle FR si EN vide
  };

  return (
    <section className={styles.jobsPage} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className={styles.jobsHero}>
        <div className={styles.heroOverlay}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </div>

      {/* Pourquoi nous rejoindre */}
      <div className={styles.whyJoin}>
        <h2>{t.whyJoinTitle}</h2>
        <div className={styles.benefitsGrid}>
          {t.benefits.map((b, i) => (
            <div key={i} className={styles.benefitCard}>
              <span>{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div className={styles.jobsList}>
        <h2>{t.jobsTitle}</h2>
        {t.jobs.map((job, idx) => (
          <div key={idx} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <div className={styles.jobMeta}>
              {job.meta?.map((m, mid) => <span key={mid}>{m}</span>)}
            </div>
            {job.deadline && (
              <p>
                <strong className={styles.deadline}>
                  {lang === "ar" ? "آخر موعد للتقديم:" : lang === "fr" ? "Date limite :" : "Deadline:"}
                </strong>{" "}
                {job.deadline}
              </p>
            )}
            <div className={styles.jobDetails}>
              <div>
                <h4>{lang === "ar" ? "المتطلبات:" : lang === "fr" ? "Exigences :" : "Requirements:"}</h4>
                <ul>{job.requirements?.map((r, rid) => <li key={rid}>{r}</li>)}</ul>
              </div>
              <div>
                <h4>{lang === "ar" ? "المسؤوليات:" : lang === "fr" ? "Responsabilités :" : "Responsibilities:"}</h4>
                <ul>{job.responsibilities?.map((r, rid) => <li key={rid}>{r}</li>)}</ul>
              </div>
            </div>
            <div className={styles.actions}>
              <a href="#" className={styles.btnApply}>{lang === "ar" ? "تقدم الآن" : lang === "fr" ? "Postuler" : "Apply now"}</a>
              <a href="#" className={styles.btnShare}>{lang === "ar" ? "مشاركة الوظيفة" : lang === "fr" ? "Partager" : "Share"}</a>
            </div>
          </div>
        ))}
      </div>

      {/* Processus */}
      <div className={styles.steps}>
        <h2>{t.applicationProcessTitle}</h2>
        <div className={styles.stepsGrid}>
          {t.applicationSteps.map((step, idx) => (
            <div key={idx}><span>{idx + 1}</span><p>{step}</p></div>
          ))}
        </div>
      </div>

      {/* Formation */}
      <div className={styles.training}>
        <h2>{t.trainingTitle}</h2>
        <p>{t.trainingDesc}</p>
        {t.trainings.map((tr, idx) => (
          <div key={idx} className={styles.trainingCard}>
            <h3>{tr.title}</h3>
            <ul>{tr.items.map((item, id) => <li key={id}>{item}</li>)}</ul>
          </div>
        ))}
        <a href="#" className={styles.btnApply}>
          {lang === "ar" ? "قدم طلب التدريب" : lang === "fr" ? "Postuler au stage" : "Apply for internship"}
        </a>
      </div>

      {/* Contact */}
      <div className={styles.contact}>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactDesc}</p>
        <p>{t.contactEmail}</p>
        <p>{t.contactPhone}</p>
      </div>
    </section>
  );
}
