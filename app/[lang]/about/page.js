'use client';

import styles from "./jobs.module.css";

export default function JobsPage({ params }) {
  const lang = params.lang || "ar";

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
          requirements: [
            "خبرة في React.js و Node.js",
            "معرفة MySQL/PostgreSQL",
            "تصميم APIs",
            "إتقان العربية والفرنسية"
          ],
          responsibilities: [
            "تطوير تطبيقات الويب الحكومية",
            "صيانة الأنظمة",
            "التعاون مع الفريق",
            "كتابة الوثائق التقنية"
          ]
        },
        {
          title: "محلل أنظمة",
          meta: ["إدارة المشاريع", "دوام كامل", "📍 نواكشوط", "2-4 سنوات"],
          deadline: "2025/03/20",
          requirements: [
            "شهادة في علوم الحاسوب",
            "خبرة في تحليل الأنظمة",
            "مهارات إدارة المشاريع",
            "إتقان العربية والإنجليزية"
          ],
          responsibilities: [
            "تحليل المتطلبات",
            "إعداد التوثيق التقني",
            "التنسيق مع الفرق",
            "ضمان جودة التطبيقات"
          ]
        }
      ],
      applicationProcessTitle: "عملية التقديم",
      applicationSteps: [
        "التقديم الإلكتروني",
        "المراجعة الأولية",
        "المقابلة",
        "القرار النهائي"
      ],
      trainingTitle: "برنامج التدريب والتكوين",
      trainingDesc: "نوفر فرص تدريب للطلاب والخريجين الجدد لاكتساب الخبرة العملية في مجال التكنولوجيا",
      trainings: [
        { title: "التدريب الصيفي", items: ["مدة 3 أشهر", "للطلاب في السنوات الأخيرة", "مشاريع عملية"] },
        { title: "برنامج الخريجين الجدد", items: ["مدة 6-12 شهر", "للخريجين الجدد", "فرصة للتوظيف"] }
      ],
      contactTitle: "هل لديك أسئلة؟",
      contactDesc: "تواصل مع فريق الموارد البشرية",
      contactEmail: "📧 hr@an-etat.gov.mr",
      contactPhone: "📞 (+222) 45 25 XX XX"
    },
    fr: {
      heroTitle: "Offres d'emploi",
      heroDesc: "Rejoignez notre équipe spécialisée et contribuez à la transformation numérique en Mauritanie",
      whyJoinTitle: "Pourquoi nous rejoindre ?",
      benefits: [
        { icon: "💰", title: "Salaire compétitif", desc: "Des salaires attractifs selon le marché et l'expérience" },
        { icon: "📈", title: "Développement professionnel", desc: "Programmes de formation et opportunités d'évolution" },
        { icon: "💻", title: "Environnement moderne", desc: "Dernières technologies et outils de travail" },
        { icon: "🏥", title: "Assurance santé", desc: "Couverture complète pour l'employé et sa famille" },
        { icon: "🏠", title: "Flexibilité", desc: "Options de travail flexible et à distance" },
        { icon: "🌴", title: "Vacances", desc: "Un système de congés généreux et équilibré" },
      ],
      jobsTitle: "Postes disponibles",
      jobs: [
        {
          title: "Développeur Web",
          meta: ["Département technique", "Temps plein", "📍 Nouakchott", "3-5 ans"],
          deadline: "2025/03/15",
          requirements: [
            "Expérience en React.js et Node.js",
            "Connaissance MySQL/PostgreSQL",
            "Conception d'APIs",
            "Maîtrise de l'arabe et du français"
          ],
          responsibilities: [
            "Développement d'applications web gouvernementales",
            "Maintenance des systèmes",
            "Collaboration avec l'équipe",
            "Rédaction de la documentation technique"
          ]
        },
        {
          title: "Analyste systèmes",
          meta: ["Gestion de projet", "Temps plein", "📍 Nouakchott", "2-4 ans"],
          deadline: "2025/03/20",
          requirements: [
            "Diplôme en informatique",
            "Expérience en analyse des systèmes",
            "Compétences en gestion de projet",
            "Maîtrise de l'arabe et de l'anglais"
          ],
          responsibilities: [
            "Analyse des besoins",
            "Préparation de la documentation technique",
            "Coordination avec les équipes",
            "Assurer la qualité des applications"
          ]
        }
      ],
      applicationProcessTitle: "Processus de candidature",
      applicationSteps: [
        "Candidature en ligne",
        "Révision initiale",
        "Entretien",
        "Décision finale"
      ],
      trainingTitle: "Programme de formation",
      trainingDesc: "Nous offrons des stages aux étudiants et jeunes diplômés pour acquérir une expérience pratique en technologie",
      trainings: [
        { title: "Stage d'été", items: ["Durée 3 mois", "Pour les étudiants en dernière année", "Projets pratiques"] },
        { title: "Programme jeunes diplômés", items: ["Durée 6-12 mois", "Pour les jeunes diplômés", "Opportunité d'emploi"] }
      ],
      contactTitle: "Des questions ?",
      contactDesc: "Contactez l'équipe RH",
      contactEmail: "📧 hr@an-etat.gov.mr",
      contactPhone: "📞 (+222) 45 25 XX XX"
    }
  };

  const t = translations[lang];

  return (
    <section className={styles.jobsPage} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* الشريط العلوي */}
      <div className={styles.jobsHero}>
        <div className={styles.heroOverlay}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </div>

      {/* لماذا تنضم إلينا */}
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

      {/* الوظائف */}
      <div className={styles.jobsList}>
        <h2>{t.jobsTitle}</h2>
        {t.jobs.map((job, idx) => (
          <div key={idx} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <div className={styles.jobMeta}>
              {job.meta.map((m, mid) => <span key={mid}>{m}</span>)}
            </div>
            <p><strong className={styles.deadline}>{lang === "ar" ? "آخر موعد للتقديم:" : "Date limite:"}</strong> {job.deadline}</p>
            <div className={styles.jobDetails}>
              <div>
                <h4>{lang === "ar" ? "المتطلبات:" : "Exigences:"}</h4>
                <ul>{job.requirements.map((r, rid) => <li key={rid}>{r}</li>)}</ul>
              </div>
              <div>
                <h4>{lang === "ar" ? "المسؤوليات:" : "Responsabilités:"}</h4>
                <ul>{job.responsibilities.map((r, rid) => <li key={rid}>{r}</li>)}</ul>
              </div>
            </div>
            <div className={styles.actions}>
              <a href="#" className={styles.btnApply}>{lang === "ar" ? "تقدم الآن" : "Postuler"}</a>
              <a href="#" className={styles.btnShare}>{lang === "ar" ? "مشاركة الوظيفة" : "Partager"}</a>
            </div>
          </div>
        ))}
      </div>

      {/* عملية التقديم */}
      <div className={styles.steps}>
        <h2>{t.applicationProcessTitle}</h2>
        <div className={styles.stepsGrid}>
          {t.applicationSteps.map((step, idx) => (
            <div key={idx}><span>{idx + 1}</span><p>{step}</p></div>
          ))}
        </div>
      </div>

      {/* التدريب */}
      <div className={styles.training}>
        <h2>{t.trainingTitle}</h2>
        <p>{t.trainingDesc}</p>
        {t.trainings.map((tr, idx) => (
          <div key={idx} className={styles.trainingCard}>
            <h3>{tr.title}</h3>
            <ul>{tr.items.map((item, id) => <li key={id}>{item}</li>)}</ul>
          </div>
        ))}
        <a href="#" className={styles.btnApply}>{lang === "ar" ? "قدم طلب التدريب" : "Postuler au stage"}</a>
      </div>

      {/* تواصل */}
      <div className={styles.contact}>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactDesc}</p>
        <p>{t.contactEmail}</p>
        <p>{t.contactPhone}</p>
      </div>
    </section>
  );
}
