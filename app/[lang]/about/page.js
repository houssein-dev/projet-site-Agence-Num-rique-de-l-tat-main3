"use client";
import Image from "next/image";

/** Traductions */
const translations = {
  ar: {
    mainTitle: "الوكالة الرقمية للدولة",
    intro: "نقود التحول الرقمي عبر تطوير البنية التحتية والخدمات الحكومية الذكية.",
    missionTitle: "المهام الرئيسية",
    mission: [
      "تطوير المنصات والخدمات الرقمية الحكومية",
      "حوكمة البيانات والمعايير التقنية",
      "تعزيز الأمن السيبراني",
      "دعم الجهات الحكومية في التحول الرقمي"
    ],
    roadmapTitle: "محاور خارطة الطريق",
    roadmap: ["الخدمات", "البيانات", "البنية التحتية", "الأمن", "المواهب"],
  },
  fr: {
    mainTitle: "Agence Numérique de l'État",
    intro: "Nous conduisons la transformation numérique via des infrastructures et des services publics intelligents.",
    missionTitle: "Missions clés",
    mission: [
      "Développer les plateformes et services publics numériques",
      "Gouvernance des données et des standards",
      "Renforcement de la cybersécurité",
      "Accompagnement des ministères dans la transformation"
    ],
    roadmapTitle: "Axes de la feuille de route",
    roadmap: ["Services", "Données", "Infrastructures", "Sécurité", "Talents"],
  },
  en: {
    mainTitle: "State Digital Agency",
    intro: "We drive digital transformation through smart public services and infrastructure.",
    missionTitle: "Key missions",
    mission: [
      "Build digital government platforms and services",
      "Data and standards governance",
      "Strengthen cybersecurity",
      "Support ministries through the transformation"
    ],
    roadmapTitle: "Roadmap pillars",
    roadmap: ["Services", "Data", "Infrastructure", "Security", "Talent"],
  },
};

const tFor = (lang) => translations[lang] ?? translations.ar;

export default function AgencyPage({ params }) {
  const lang = params?.lang ?? "ar";
  const t = tFor(lang);

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem" }}>
      {/* Header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "center"
      }}>
        <div>
          <h1 style={{ marginTop: 0 }}>{t.mainTitle}</h1>
          <p>{t.intro}</p>
        </div>
        <Image src="/4.jpg" alt="" width={800} height={500}
               style={{ width: "100%", height: "auto", borderRadius: 10, objectFit: "cover" }} />
      </div>

      {/* Missions */}
      <div style={{ marginTop: 24, border: "1px solid #e6e6e6", borderRadius: 10, background: "#fff", padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>{t.missionTitle}</h2>
        <ul style={{ margin: 0 }}>
          {t.mission.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>

      {/* Roadmap */}
      <div style={{
        marginTop: 24,
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))"
      }}>
        {t.roadmap.map((r, i) => (
          <div key={i} style={{
            border: "1px solid #e6e6e6",
            background: "#f8f9ff",
            borderRadius: 10,
            padding: 12,
            textAlign: "center"
          }}>
            {r}
          </div>
        ))}
      </div>
    </section>
  );
}
