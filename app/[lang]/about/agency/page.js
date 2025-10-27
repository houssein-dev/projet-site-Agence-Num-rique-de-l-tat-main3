import Image from "next/image";

// النصوص باللغتين
const translations = {
  ar: {
    mainTitle: "وكالة الرقمنة للدولة",
    mainDesc: "تعرف على رؤيتنا ومهمتنا وقيمنا في قيادة التحول الرقمي",
    visionTitle: "🎯 رؤيتنا",
    visionText:
      "أن نكون الرائد الإقليمي في مجال التحول الرقمي، ونسعى لبناء موريتانيا رقمية متطورة توفر خدمات إلكترونية عالية الجودة.",
    missionTitle: "🛠️ مهمتنا",
    missionText:
      "قيادة وتنسيق جهود التحول الرقمي في موريتانيا من خلال تطوير البنية التحتية الرقمية وتعزيز القدرات البشرية في مجال التكنولوجيا.",
    valuesTitle: "قيمنا الأساسية",
    securityTitle: "الأمان",
    securityText: "نضمن أعلى معايير الأمن والخصوصية في جميع حلولنا الرقمية",
    efficiencyTitle: "الكفاءة",
    efficiencyText: "نلتزم بتقديم خدمات عالية الجودة بأقصى درجات الفعالية",
    collaborationTitle: "التعاون",
    collaborationText: "نؤمن بقوة الشراكة والعمل الجماعي لتحقيق أهدافنا المشتركة",
    innovationTitle: "الابتكار",
    innovationText: "نسعى للتميز من خلال الحلول المبتكرة والتكنولوجيا المتطورة",
    historyTitle: "مسيرتنا التاريخية",
    history1Title: "2020 - التأسيس",
    history1Text:
      "تأسيس الوكالة الرقمية للدولة كمؤسسة متخصصة في قيادة التحول الرقمي",
    history2Title: "2021 - البداية",
    history2Text: "إطلاق أول المشاريع الرقمية وبناء الفريق المتخصص",
    history3Title: "2022-2024 - التوسع",
    history3Text: "توسيع نطاق العمل وإطلاق مشاريع كبرى في مختلف القطاعات",
  },
  fr: {
    mainTitle: "Agence de la Numérisation de l’État",
    mainDesc:
      "Découvrez notre vision, notre mission et nos valeurs dans la conduite de la transformation numérique",
    visionTitle: "🎯 Notre Vision",
    visionText:
      "Être le leader régional dans la transformation numérique et œuvrer pour bâtir une Mauritanie numérique offrant des services électroniques de haute qualité.",
    missionTitle: "🛠️ Notre Mission",
    missionText:
      "Conduire et coordonner les efforts de transformation numérique en Mauritanie à travers le développement des infrastructures numériques et le renforcement des compétences humaines dans le domaine technologique.",
    valuesTitle: "Nos Valeurs Fondamentales",
    securityTitle: "Sécurité",
    securityText:
      "Nous garantissons les normes les plus élevées de sécurité et de confidentialité dans toutes nos solutions numériques",
    efficiencyTitle: "Efficacité",
    efficiencyText:
      "Nous nous engageons à fournir des services de haute qualité avec la plus grande efficacité",
    collaborationTitle: "Collaboration",
    collaborationText:
      "Nous croyons en la force du partenariat et du travail d'équipe pour atteindre nos objectifs communs",
    innovationTitle: "Innovation",
    innovationText:
      "Nous visons l’excellence à travers des solutions innovantes et des technologies avancées",
    historyTitle: "Notre Parcours Historique",
    history1Title: "2020 - Fondation",
    history1Text:
      "Création de l'agence numérique de l’État en tant qu’institution spécialisée dans la conduite de la transformation numérique",
    history2Title: "2021 - Début",
    history2Text:
      "Lancement des premiers projets numériques et constitution de l’équipe spécialisée",
    history3Title: "2022-2024 - Expansion",
    history3Text:
      "Élargissement des activités et lancement de grands projets dans divers secteurs",
  },
};

export default function AboutPage({ params }) {
  const lang = params.lang || "ar"; // اللغة من المسار
  const t = translations[lang]; // اختيار الترجمة

  return (
    <>
      {/* صورة رئيسية مع عنوان ونص */}
      <section
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="./3.jpg"
          alt={t.mainTitle}
          width={900}
          height={500}
          style={{ borderRadius: "10px" }}
        />

        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "1rem 2rem",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2rem" }}>{t.mainTitle}</h1>
          <p style={{ margin: "0.5rem 0 0" }}>{t.mainDesc}</p>
        </div>
      </section>

      <section style={{ padding: "2rem" }}>
        {/* رؤيتنا ومهمتنا */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#f9f9f9",
              padding: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {t.visionTitle}
            </h2>
            <p>{t.visionText}</p>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#f9f9f9",
              padding: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {t.missionTitle}
            </h2>
            <p>{t.missionText}</p>
          </div>
        </div>

        {/* قيمنا الأساسية */}
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          {t.valuesTitle}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>🔒</div>
            <h3>{t.securityTitle}</h3>
            <p>{t.securityText}</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>⚡</div>
            <h3>{t.efficiencyTitle}</h3>
            <p>{t.efficiencyText}</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>🤝</div>
            <h3>{t.collaborationTitle}</h3>
            <p>{t.collaborationText}</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>💡</div>
            <h3>{t.innovationTitle}</h3>
            <p>{t.innovationText}</p>
          </div>
        </div>
      </section>

      {/* التاريخ */}
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>
        {t.historyTitle}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#fef4f4",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#c0392b", margin: 0 }}>{t.history1Title}</h2>
          <p style={{ margin: 0 }}>{t.history1Text}</p>
        </div>

        <div
          style={{
            backgroundColor: "#ecf9f1",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#27ae60", margin: 0 }}>{t.history2Title}</h2>
          <p style={{ margin: 0 }}>{t.history2Text}</p>
        </div>

        <div
          style={{
            backgroundColor: "#eef5ff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#2980b9", margin: 0 }}>{t.history3Title}</h2>
          <p style={{ margin: 0 }}>{t.history3Text}</p>
        </div>
      </div>
    </>
  );
}