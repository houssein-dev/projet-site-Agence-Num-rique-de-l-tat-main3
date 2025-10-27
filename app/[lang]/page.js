"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/** i18n local pour la page d'accueil */
const translations = {
  ar: {
    heroTitle: "الوكالة الرقمية للدولة",
    heroSubtitle: "قيادة التحول الرقمي نحو مستقبل متطور ومبتكر",
    presentationTitle: "عرض تقديمي للوكالة الرقمية للدولة",
    presentationDesc: `تُعد الوكالة الرقمية للدولة المؤسسة الرائدة في مجال التحول الرقمي في موريتانيا، حيث تسعى إلى تطوير وتحديث البنية التحتية الرقمية وتعزيز الخدمات الإلكترونية الحكومية لخدمة المواطنين والمؤسسات على أكمل وجه.

نعمل على تنفيذ استراتيجية شاملة للتحول الرقمي تشمل جميع القطاعات الحكومية، مع التركيز على الابتكار والجودة في تقديم الخدمات الرقمية المتطورة.`,
    cards: [
      { value: "+1M", label: "مستفيد", color: "#c0392b", bg: "#fef4f4" },
      { value: "+25", label: "وزارة شريكة", color: "#27ae60", bg: "#ecf9f1" },
      { value: "+50", label: "مشروع رقمي", color: "#2980b9", bg: "#eef5ff" }
    ],
    newsTitle: "آخر الأخبار",
    newsCards: [
      { img: "/8.jpg", title: "ورشات تدريبية للموظفين", desc: "تنظيم ورشات تدريبية لرفع الكفاءات الرقمية لدى موظفي الإدارات الحكومية." },
      { img: "/7.jpg", title: "شراكة مع وزارات الدولة", desc: "وقعت الوكالة الرقمية اتفاقيات تعاون مع عدة وزارات لتعزيز التحول الرقمي." },
      { img: "/6.jpg", title: "إطلاق منصة حكومية جديدة", desc: "تم إطلاق منصة حكومية جديدة لتسهيل الوصول إلى الخدمات الرقمية للمواطنين." }
    ]
  },
  fr: {
    heroTitle: "Agence Numérique de l'État",
    heroSubtitle: "Mener la transformation numérique vers un avenir innovant et développé",
    presentationTitle: "Présentation de l'Agence Numérique de l'État",
    presentationDesc: `L'Agence Numérique de l'État est l'institution leader en matière de transformation numérique en Mauritanie, visant à développer et moderniser l'infrastructure numérique et à améliorer les services électroniques pour les citoyens et les institutions.

Nous mettons en œuvre une stratégie globale couvrant tous les secteurs, avec un fort accent sur l'innovation et la qualité.`,
    cards: [
      { value: "+1M", label: "Bénéficiaires", color: "#c0392b", bg: "#fef4f4" },
      { value: "+25", label: "Ministères partenaires", color: "#27ae60", bg: "#ecf9f1" },
      { value: "+50", label: "Projets numériques", color: "#2980b9", bg: "#eef5ff" }
    ],
    newsTitle: "Dernières nouvelles",
    newsCards: [
      { img: "/8.jpg", title: "Ateliers de formation pour le personnel", desc: "Organisation d'ateliers pour améliorer les compétences numériques des agents publics." },
      { img: "/7.jpg", title: "Partenariats ministériels", desc: "Accords de coopération avec plusieurs ministères pour renforcer la transformation numérique." },
      { img: "/6.jpg", title: "Lancement d'une nouvelle plateforme", desc: "Une nouvelle plateforme publique pour faciliter l'accès aux services numériques." }
    ]
  },
  en: {
    heroTitle: "State Digital Agency",
    heroSubtitle: "Leading digital transformation toward an innovative future",
    presentationTitle: "State Digital Agency Overview",
    presentationDesc: `The State Digital Agency drives Mauritania’s digital transformation by modernizing infrastructure and enhancing e-government services.

We execute a comprehensive cross-sector strategy with a strong focus on innovation and quality.`,
    cards: [
      { value: "+1M", label: "Beneficiaries", color: "#c0392b", bg: "#fef4f4" },
      { value: "+25", label: "Partner ministries", color: "#27ae60", bg: "#ecf9f1" },
      { value: "+50", label: "Digital projects", color: "#2980b9", bg: "#eef5ff" }
    ],
    newsTitle: "Latest news",
    newsCards: [
      { img: "/8.jpg", title: "Staff training workshops", desc: "Workshops to strengthen public-sector digital skills." },
      { img: "/7.jpg", title: "Ministry partnerships", desc: "Cooperation agreements to accelerate the transformation." },
      { img: "/6.jpg", title: "New government platform", desc: "A platform to ease access to digital public services." }
    ]
  }
};

// fallback sûr si une langue manque
const tFor = (lang) => translations[lang] ?? translations.ar;

export default function HomePage({ params }) {
  const lang = params?.lang ?? "ar";
  const t = tFor(lang);

  // chemins absolus → compatibles basePath/assetPrefix + export
  const [currentImage, setCurrentImage] = useState("/1.jpg");

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImage((prev) => (prev === "/2.jpg" ? "/1.jpg" : "/2.jpg"));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero */}
      <div style={{
        textAlign: 'center',
        border: '1px solid #77777730',
        width: '100%',
        background: '#f9f9f9',
        position: 'relative',
        borderRadius: '7px',
        marginBottom: '2rem'
      }}>
        <Image
          src={currentImage}
          alt=""
          width={1600}
          height={600}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
          priority
        />
        <h1 style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2.5rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
        }}>{t.heroTitle}</h1>
        <h3 style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
        }}>{t.heroSubtitle}</h3>
      </div>

      {/* Présentation + stats */}
      <div style={{
        marginTop: "2rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        padding: '2rem'
      }}>
        <section style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <Image
            src="/5.jpg"
            alt=""
            width={400}
            height={300}
            style={{ borderRadius: "8px", flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h1 style={{ marginBottom: "1rem", color: "#333" }}>{t.presentationTitle}</h1>
            <p style={{ lineHeight: "1.8", color: "#444", whiteSpace: "pre-line" }}>
              {t.presentationDesc}
            </p>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1.5rem",
            }}>
              {t.cards.map((card, idx) => (
                <div key={idx} style={{
                  backgroundColor: card.bg,
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "120px",
                }}>
                  <h2 style={{ color: card.color, margin: 0 }}>{card.value}</h2>
                  <p style={{ margin: 0 }}>{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* News */}
      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{t.newsTitle}</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {t.newsCards.map((news, idx) => (
            <div key={idx} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}>
              <Image src={news.img} alt="" width={800} height={400}
                     style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{news.title}</h3>
                <p style={{ margin: 0, color: "#555" }}>{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
