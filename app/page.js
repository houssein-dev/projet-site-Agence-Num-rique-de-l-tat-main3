"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/** i18n local pour la page d'accueil */
const translations = {
  ar: {
    heroTitle: "الوكالة الرقمية للدولة",
    heroSubtitle: "قيادة التحول الرقمي نحو مستقبل متطور ومبتكر",
    stats: { beneficiaries: "+1M مستفيد", ministries: "+25 وزارة شريكة", projects: "+50 مشروع رقمي" },
    aboutTitle: "عرض تقديمي للوكالة الرقمية للدولة",
    aboutText:
      "تُعد الوكالة الرقمية للدولة المؤسسة الرائدة في مجال التحول الرقمي في موريتانيا، حيث تسعى إلى تطوير وتحديث البنية التحتية الرقمية وتعزيز الخدمات الإلكترونية الحكومية لخدمة المواطنين والمؤسسات على أكمل وجه.\n\nنعمل على تنفيذ استراتيجية شاملة للتحول الرقمي تشمل جميع القطاعات الحكومية، مع التركيز على الابتكار والجودة في تقديم الخدمات الرقمية المتطورة.",
    newsTitle: "آخر الأخبار",
    card1: { title: "ورشات تدريبية للموظفين", text: "تنظيم ورشات تدريبية لرفع الكفاءات الرقمية لدى موظفي الإدارات الحكومية." },
    card2: { title: "شراكة مع وزارات الدولة", text: "وقعت الوكالة الرقمية اتفاقيات تعاون مع عدة وزارات لتعزيز التحول الرقمي." },
    card3: { title: "إطلاق منصة حكومية جديدة", text: "تم إطلاق منصة حكومية جديدة لتسهيل الوصول إلى الخدمات الرقمية للمواطنين." },
    labels: { start: "بداية", end: "نهاية" }
  },
  fr: {
    heroTitle: "Agence Numérique de l'État",
    heroSubtitle: "Piloter la transformation digitale vers un avenir innovant",
    stats: { beneficiaries: "+1M bénéficiaires", ministries: "+25 ministères partenaires", projects: "+50 projets numériques" },
    aboutTitle: "Présentation de l’Agence Numérique de l’État",
    aboutText:
      "L’Agence Numérique de l’État est l’institution de référence de la transformation digitale en Mauritanie, visant la modernisation des infrastructures numériques et l’amélioration des services publics.\n\nNous mettons en œuvre une stratégie globale couvrant l’ensemble des secteurs, avec un fort accent sur l’innovation et la qualité.",
    newsTitle: "Dernières actualités",
    card1: { title: "Ateliers de formation", text: "Organisation d’ateliers pour renforcer les compétences numériques des agents publics." },
    card2: { title: "Partenariats ministériels", text: "Accords de coopération signés avec plusieurs ministères pour accélérer la transformation." },
    card3: { title: "Lancement d’une nouvelle plateforme", text: "Une plateforme publique pour faciliter l’accès aux services numériques." },
    labels: { start: "Début", end: "Fin" }
  },
  en: {
    heroTitle: "State Digital Agency",
    heroSubtitle: "Leading digital transformation toward an innovative future",
    stats: { beneficiaries: "+1M beneficiaries", ministries: "+25 partner ministries", projects: "+50 digital projects" },
    aboutTitle: "State Digital Agency Overview",
    aboutText:
      "The State Digital Agency drives Mauritania’s digital transformation by modernizing infrastructure and enhancing e-government services.\n\nWe execute a comprehensive strategy across sectors with a strong focus on innovation and quality.",
    newsTitle: "Latest News",
    card1: { title: "Staff Training Workshops", text: "Workshops to strengthen public-sector digital skills." },
    card2: { title: "Partnerships with Ministries", text: "Cooperation agreements to accelerate transformation." },
    card3: { title: "New Government Platform", text: "A public platform to ease access to digital services." },
    labels: { start: "Start", end: "End" }
  }
};

// fallback sûr si une langue manque
function tFor(lang) {
  return translations[lang] ?? translations.ar;
}

export default function Home({ params }) {
  const lang = params?.lang ?? "ar";
  const t = tFor(lang);

  // IMPORTANT: chemins absolus (public/1.jpg etc.) pour marcher avec basePath/assetPrefix
  const [currentImage, setCurrentImage] = useState("/1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === "/2.jpg" ? "/1.jpg" : "/2.jpg"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero avec image qui alterne */}
      <div
        style={{
          textAlign: "center",
          border: "1px solid #77777730",
          width: "100%",
          background: "#f9f9f9",
          position: "relative",
          borderRadius: "7px",
          paddingBottom: "1rem"
        }}
      >
        <Image
          src={currentImage}
          alt=""
          width={1200}
          height={776}
          style={{ width: "70%", height: "auto" }}
          priority
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "2rem"
          }}
        >
          {t.heroTitle}
        </h1>
        <h3
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black"
          }}
        >
          {t.heroSubtitle}
        </h3>
      </div>

      {/* Section présentation + stats */}
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem"
        }}
      >
        <section
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            flexWrap: "wrap"
          }}
        >
          {/* image à gauche */}
          {/* Remplace <img> par <Image> pour les warnings Next */}
          <Image
            src="/5.jpg"
            alt=""
            width={400}
            height={300}
            style={{ borderRadius: "8px", flexShrink: 0 }}
          />

          {/* texte + cartes */}
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h1 style={{ marginBottom: "1rem", color: "#333" }}>{t.aboutTitle}</h1>
            <p style={{ lineHeight: "1.8", color: "#444", whiteSpace: "pre-line" }}>
              {t.aboutText}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "1.5rem"
              }}
            >
              <div
                style={{
                  backgroundColor: "#fef4f4",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "120px"
                }}
              >
                <h2 style={{ color: "#c0392b", margin: 0 }}>{t.stats.beneficiaries}</h2>
                <p style={{ margin: 0 }}></p>
              </div>

              <div
                style={{
                  backgroundColor: "#ecf9f1",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "120px"
                }}
              >
                <h2 style={{ color: "#27ae60", margin: 0 }}>{t.stats.ministries}</h2>
                <p style={{ margin: 0 }}></p>
              </div>

              <div
                style={{
                  backgroundColor: "#eef5ff",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "120px"
                }}
              >
                <h2 style={{ color: "#2980b9", margin: 0 }}>{t.stats.projects}</h2>
                <p style={{ margin: 0 }}></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* News */}
      <div
        style={{
          marginTop: "3rem",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{t.newsTitle}</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <Image src="/8.jpg" alt="" width={800} height={400} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{t.card1.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{t.card1.text}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <Image src="/7.jpg" alt="" width={800} height={400} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{t.card2.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{t.card2.text}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <Image src="/6.jpg" alt="" width={800} height={400} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{t.card3.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{t.card3.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
