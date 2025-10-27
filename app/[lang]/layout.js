import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata = {
  title: "موقعي",
  description: "هذا الموقع تم إنشاؤه بـ Next.js",
};

const translations = {
  ar: {
    nav: ["الرئيسية", "الوكالة", "خارطة الطريق", "المشاريع", "الفعاليات", "التوظيف", "اتصل بنا"],
    footer: {
      agenceTitle: "الوكالة الرقمية للدولة",
      agenceDesc1: "AN-ETAT",
      agenceDesc2: "نقود التحول الرقمي في موريتانيا من خلال تطوير حلول تقنية مبتكرة وتقديم خدمات رقمية عالية الجودة.",
      followUs: "تابعنا",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      contactDetails: ["📍 نواكشوط، موريتانيا", "📧 contact@anetat.mr", "📞 +222 45 25 XX XX"]
    }
  },
  fr: {
    nav: ["Accueil", "Agence", "Feuille de route", "Projets", "Événements", "Recrutement", "Contact"],
    footer: {
      agenceTitle: "Agence Numérique de l'État",
      agenceDesc1: "AN-ETAT",
      agenceDesc2: "Nous menons la transformation numérique en Mauritanie avec des solutions technologiques innovantes et des services numériques de haute qualité.",
      followUs: "Suivez-nous",
      quickLinks: "Liens rapides",
      contactInfo: "Informations de contact",
      contactDetails: ["📍 Nouakchott, Mauritanie", "📧 contact@anetat.mr", "📞 +222 45 25 XX XX"]
    }
  }
};

export default function RootLayout({ children, params }) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  return (
    <html lang={params.lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body style={{ color: "black" }}>
        {/* ======= Navbar ======= */}
        <nav style={{ background: "#003366", padding: "1rem", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            {/* اليسار: شعار + روابط */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Link href={'/${lang}'} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                <Image src="/4.jpg" alt="شعار الوكالة" width={40} height={40} style={{ objectFit: "cover", borderRadius: 6 }} />
              </Link>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Link href={`/${lang}`}>{t.nav[0]}</Link>
                <Link href={`/${lang}/about/agency`}>{t.nav[1]}</Link>
                <Link href={`/${lang}/roadmap`}>{t.nav[2]}</Link>
                <Link href={`/${lang}/projets`}>{t.nav[3]}</Link>
                <Link href={`/${lang}/events`}>{t.nav[4]}</Link>
                <Link href={`/${lang}/about/recrutement`}>{t.nav[5]}</Link>
                <Link href={`/${lang}/contact`}>{t.nav[6]}</Link>
              </div>
            </div>
            {/* اليمين: زر اللغة */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <LanguageSwitcher currentLang={params.lang} />
            </div>
          </div>
        </nav>

        {/* ======= Main ======= */}
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>

        {/* ======= Footer ======= */}
        <footer style={{ background: "#003366", textAlign: "center", padding: "1rem", color: "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            {/* الوكالة */}
            <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
              <Image src="./4.jpg" alt="Logo Agence Numérique" width={45} height={45} />
              <h3 style={{ color: "white" }}>{t.footer.agenceTitle}</h3>
              <p style={{ color: "white" }}>{t.footer.agenceDesc1}</p>
              <p style={{ color: "white" }}>{t.footer.agenceDesc2}</p>
            </div>
            {/* تابعنا */}
            <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
              <h3 style={{ color: "white" }}>{t.footer.followUs}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Facebook</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Twitter</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>LinkedIn</a></li>
              </ul>
            </div>
            {/* روابط سريعة */}
            <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
              <h3 style={{ color: "white" }}>{t.footer.quickLinks}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><a href="#" style={{ color: "white" }}>{t.nav[1]}</a></li>
                <li><a href="#" style={{ color: "white" }}>{t.nav[3]}</a></li>
                <li><a href="#" style={{ color: "white" }}>{t.nav[5]}</a></li>
                <li><a href="#" style={{ color: "white" }}>{t.nav[6]}</a></li>
              </ul>
            </div>
            {/* معلومات الاتصال */}
            <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
              <h3 style={{ color: "white" }}>{t.footer.contactInfo}</h3>
              {t.footer.contactDetails.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
            ©️ {new Date().getFullYear()} {t.footer.agenceTitle}
          </div>
        </footer>
      </body>
    </html>
  );
}