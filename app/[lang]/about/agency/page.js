// app/[lang]/roadmap/page.js
import Image from "next/image";

// --- i18n ---
const translations = {
  ar: {
    headerTitle: "خارطة الطريق الرقمية",
    headerDesc:
      "مراحل التنفيذ، الأهداف المرحلية، مؤشرات الأداء، والمخاطر مع إجراءات التخفيف لضمان تحول رقمي فعّال.",
    phasesTitle: "المراحل الرئيسية",
    phases: [
      { name: "التشخيص", desc: "حصر الأنظمة والعمليات الحالية وتحديد الأولويات.", progress: 100 },
      { name: "التصميم", desc: "هندسة الخدمات والمعايير وحوكمة البيانات.", progress: 85 },
      { name: "التنفيذ", desc: "تطوير المنصات والتكامل وتوسيع الهوية الرقمية.", progress: 60 },
      { name: "التحسين", desc: "تحليلات متقدمة وتجربة مستخدم أفضل وتوسيع الخدمات.", progress: 35 },
    ],
    milestonesTitle: "محطات أساسية (2023–2026)",
    milestones: [
      { date: "Q4 2023", text: "إطلاق البوابة الموحدة للخدمات ذات الأولوية." },
      { date: "Q2 2024", text: "توسيع الهوية الرقمية وربط الجهات الرئيسية." },
      { date: "Q1 2025", text: "إطلاق الدفع الإلكتروني الموحد وخدمات الهاتف." },
      { date: "Q4 2026", text: "لوحات قيادة وتحليلات بيانات متقدمة لاتخاذ القرار." },
    ],
    kpisTitle: "مؤشرات الأداء (KPIs)",
    kpis: [
      { label: "نسبة الخدمات الرقمية الكاملة", value: 62, target: 80 },
      { label: "زمن إنجاز الخدمة (متوسط/دقيقة)", value: 7, target: 5 },
      { label: "تبني الهوية الرقمية (ألف مستخدم)", value: 420, target: 600 },
      { label: "إتاحة المنصات (uptime %)", value: 99.3, target: 99.7 },
    ],
    risksTitle: "المخاطر وخطط التخفيف",
    risks: [
      { risk: "مقاومة التغيير", mitigation: "التدريب والتواصل وإدارة التغيير." },
      { risk: "تكامل الأنظمة القديمة", mitigation: "طبقة تكامل وواجهات APIs معيارية." },
      { risk: "نقص المهارات", mitigation: "برامج تدريب وشراكات مع الجامعات." },
      { risk: "مخاطر أمنية", mitigation: "معايير أمنية ومراجعات دورية واختبارات اختراق." },
    ],
    nextStepsTitle: "الخطوات القادمة (6 أشهر)",
    nextSteps: [
      "إطلاق موجة خدمات ذات أولوية للهواتف.",
      "توسيع الربط البيني عبر طبقة تكامل وطنية.",
      "تحسين تجربة المستخدم عبر اختبارات استعمال دورية.",
      "لوحات مؤشرات آنية لصنّاع القرار.",
    ],
    ctaTitle: "شاركنا خارطة الطريق",
    ctaText: "هل لديك ملاحظات أو اقتراحات لتحسين التنفيذ؟ نرحب بمساهمتك.",
    ctaButton: "أرسل اقتراحك",
  },
  fr: {
    headerTitle: "Feuille de route numérique",
    headerDesc:
      "Phases d’exécution, jalons, indicateurs de performance et gestion des risques pour une transformation efficace.",
    phasesTitle: "Phases clés",
    phases: [
      { name: "Diagnostic", desc: "Inventaire des systèmes et priorisation.", progress: 100 },
      { name: "Conception", desc: "Architecture des services et gouvernance de la donnée.", progress: 85 },
      { name: "Déploiement", desc: "Plateformes, intégration et extension de l’ID numérique.", progress: 60 },
      { name: "Amélioration", desc: "Analytique avancée, UX et extension des services.", progress: 35 },
    ],
    milestonesTitle: "Jalons majeurs (2023–2026)",
    milestones: [
      { date: "T4 2023", text: "Portail unifié pour les services prioritaires." },
      { date: "T2 2024", text: "Extension de l’identité numérique et interconnexions." },
      { date: "T1 2025", text: "Paiement en ligne unifié et services mobiles." },
      { date: "T4 2026", text: "Dashboards temps réel & analytics avancés." },
    ],
    kpisTitle: "Indicateurs de performance (KPIs)",
    kpis: [
      { label: "Part de services 100% numériques", value: 62, target: 80 },
      { label: "Délai moyen par service (min)", value: 7, target: 5 },
      { label: "Adoption ID numérique (k users)", value: 420, target: 600 },
      { label: "Disponibilité plateformes (uptime %)", value: 99.3, target: 99.7 },
    ],
    risksTitle: "Risques & mesures d’atténuation",
    risks: [
      { risk: "Résistance au changement", mitigation: "Formation, communication et conduite du changement." },
      { risk: "Intégration legacy", mitigation: "Couche d’intégration + APIs standardisées." },
      { risk: "Pénurie de compétences", mitigation: "Programmes de formation & partenariats académiques." },
      { risk: "Risques de sécurité", mitigation: "Standards, audits réguliers et tests d’intrusion." },
    ],
    nextStepsTitle: "Prochaines étapes (6 mois)",
    nextSteps: [
      "Lancer une vague de services mobiles prioritaires.",
      "Étendre l’interop via une couche d’intégration nationale.",
      "Améliorer l’UX via des tests d’utilisabilité récurrents.",
      "Déployer des dashboards temps réel.",
    ],
    ctaTitle: "Contribuez à la feuille de route",
    ctaText: "Des idées pour accélérer l’exécution ? Partagez-les.",
    ctaButton: "Envoyer une suggestion",
  },
  en: {
    headerTitle: "Digital Roadmap",
    headerDesc:
      "Execution phases, milestones, KPIs, and risk management to deliver an effective transformation.",
    phasesTitle: "Key phases",
    phases: [
      { name: "Assessment", desc: "Inventory of systems and prioritization.", progress: 100 },
      { name: "Design", desc: "Service architecture and data governance.", progress: 85 },
      { name: "Delivery", desc: "Platforms, integration, and digital ID rollout.", progress: 60 },
      { name: "Optimization", desc: "Advanced analytics, UX, and service expansion.", progress: 35 },
    ],
    milestonesTitle: "Major milestones (2023–2026)",
    milestones: [
      { date: "Q4 2023", text: "Unified portal for priority services." },
      { date: "Q2 2024", text: "Digital ID expansion & core interconnections." },
      { date: "Q1 2025", text: "Unified e-payments and mobile-first services." },
      { date: "Q4 2026", text: "Real-time dashboards & advanced analytics." },
    ],
    kpisTitle: "Key performance indicators (KPIs)",
    kpis: [
      { label: "Fully digital services share", value: 62, target: 80 },
      { label: "Avg. completion time (min)", value: 7, target: 5 },
      { label: "Digital ID adoption (k users)", value: 420, target: 600 },
      { label: "Platform availability (uptime %)", value: 99.3, target: 99.7 },
    ],
    risksTitle: "Risks & mitigations",
    risks: [
      { risk: "Change resistance", mitigation: "Training, comms, and change management." },
      { risk: "Legacy integration", mitigation: "Integration layer and standardized APIs." },
      { risk: "Skills gap", mitigation: "Upskilling programs & academic partnerships." },
      { risk: "Security threats", mitigation: "Standards, regular audits, and pentests." },
    ],
    nextStepsTitle: "Next steps (6 months)",
    nextSteps: [
      "Launch a mobile-first wave of priority services.",
      "Expand interoperability via a national integration layer.",
      "Improve UX through recurring usability tests.",
      "Deploy real-time executive dashboards.",
    ],
    ctaTitle: "Co-create the roadmap",
    ctaText: "Got suggestions to speed up execution? We’d love to hear them.",
    ctaButton: "Send a suggestion",
  },
};

// fallback sûr
const tFor = (lang) => translations[lang] ?? translations.en ?? translations.ar;

// --- nécessaire pour output: "export" avec segment [lang] ---
export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }, { lang: "en" }];
}

export default function RoadmapPage({ params }) {
  const lang = params?.lang ?? "ar";
  const t = tFor(lang);

  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "1.5rem" }}>
      {/* HERO */}
      <div
        style={{
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #e6e6e6",
        }}
      >
        {/* <Image
          src="/cover-roadmap.jpg" // mets cette image dans public/ ; sinon remplace par /4.jpg
          alt=""
          width={1920}
          height={640}
          style={{ width: "100%", height: 300, objectFit: "cover" }}
          priority
        /> */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,.55), rgba(0,0,0,.15))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: 16,
          }}
        >
          <h1 style={{ margin: 0 }}>{t.headerTitle}</h1>
          <p style={{ marginTop: 8, maxWidth: 860 }}>{t.headerDesc}</p>
        </div>
      </div>

      {/* PHASES */}
      <div style={{ marginTop: 20 }}>
        <h2 style={{ marginTop: 0 }}>{t.phasesTitle}</h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {t.phases.map((ph, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: 12,
                padding: 16,
                background: "#fff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <strong>{ph.name}</strong>
                <span style={{ opacity: 0.8 }}>{ph.progress}%</span>
              </div>
              <p style={{ marginTop: 0 }}>{ph.desc}</p>
              <div
                style={{
                  height: 8,
                  borderRadius: 6,
                  background: "#eef2ff",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${ph.progress}%`,
                    height: "100%",
                    background: "#3b82f6",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MILESTONES */}
      <div
        style={{
          marginTop: 24,
          border: "1px solid #e6e6e6",
          borderRadius: 12,
          background: "#fff",
          padding: 16,
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t.milestonesTitle}</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {t.milestones.map((m, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <strong style={{ marginInlineEnd: 8 }}>{m.date}</strong>
              <span>{m.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* KPIs */}
      <div style={{ marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>{t.kpisTitle}</h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {t.kpis.map((k, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: 12,
                background: "#fff",
                padding: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{k.label}</div>
                <div>
                  <strong>{k.value}</strong> / {k.target}
                </div>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 6,
                  background: "#f3f4f6",
                  overflow: "hidden",
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    width: `${Math.min((k.value / k.target) * 100, 100)}%`,
                    height: "100%",
                    background: "#10b981",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RISKS */}
      <div
        style={{
          marginTop: 24,
          border: "1px solid #e6e6e6",
          borderRadius: 12,
          background: "#fff",
          padding: 16,
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t.risksTitle}</h2>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {t.risks.map((r, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #eee",
                borderRadius: 10,
                padding: 12,
                background: "#fafafa",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 6 }}>{r.risk}</div>
              <div style={{ opacity: 0.85 }}>{r.mitigation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NEXT STEPS */}
      <div
        style={{
          marginTop: 24,
          border: "1px solid #e6e6e6",
          borderRadius: 12,
          background: "#fff",
          padding: 16,
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t.nextStepsTitle}</h2>
        <ol style={{ margin: 0, paddingInlineStart: 20 }}>
          {t.nextSteps.map((s, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {s}
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 24,
          borderRadius: 12,
          background: "#003366",
          color: "#fff",
          padding: 20,
          textAlign: "center",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t.ctaTitle}</h2>
        <p style={{ marginTop: 8, opacity: 0.95 }}>{t.ctaText}</p>
        <a
          href={`/${lang}/contact`}
          style={{
            display: "inline-block",
            marginTop: 12,
            background: "#fff",
            color: "#003366",
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}
src