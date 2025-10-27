'use client';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./contact.css";

// Traductions locales à la page Contact
const translations = {
  ar: {
    headerTitle: "اتصل بنا",
    headerDesc: "نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلة التحول الرقمي",
    infoTitle: "معلومات الاتصال",
    address: "📍 العنوان: 425C+672, Av. Moktar Ould Daddah",
    email: "📧 البريد الإلكتروني: contact@anetat.mr",
    phone: "📞 الهاتف: +222 45 25 xx xx",
    hours: "🕒 ساعات العمل: الاثنين - الخميس 08:00-17:00 والجمعة 08:00-12:00",
    socialTitle: "تابعنا على وسائل التواصل الاجتماعي",
  },
  fr: {
    headerTitle: "Contactez-nous",
    headerDesc: "Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours de transformation numérique",
    infoTitle: "Informations de contact",
    address: "📍 Adresse : 425C+672, Av. Moktar Ould Daddah",
    email: "📧 Email : contact@anetat.mr",
    phone: "📞 Téléphone : +222 45 25 xx xx",
    hours: "🕒 Heures de travail : Lundi - Jeudi 08:00-17:00 et Vendredi 08:00-12:00",
    socialTitle: "Suivez-nous sur les réseaux sociaux",
  },
  en: {
    headerTitle: "Contact",
    headerDesc: "We’re here to answer your questions and support your digital transformation journey",
    infoTitle: "Contact Information",
    address: "📍 Address: 425C+672, Av. Moktar Ould Daddah",
    email: "📧 Email: contact@anetat.mr",
    phone: "📞 Phone: +222 45 25 xx xx",
    hours: "🕒 Working hours: Mon–Thu 08:00–17:00 and Fri 08:00–12:00",
    socialTitle: "Follow us on social media",
  }
};

export default function ContactPage({ params }) {
  const lang = params?.lang ?? "ar";
  // Fallback défensif si une langue manque
  const t = translations[lang] ?? translations.ar;

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>{t.headerTitle}</h1>
        <p>{t.headerDesc}</p>
      </div>

      {/* Infos */}
      <div className="contact-section">
        <h2>{t.infoTitle}</h2>
        <div className="cards-grid">
          <div className="card">{t.address}</div>
          <div className="card">{t.email}</div>
          <div className="card">{t.phone}</div>
          <div className="card">{t.hours}</div>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="contact-section">
        <h2>{t.socialTitle}</h2>
        <div className="social-icons">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaYoutube size={30} />
        </div>
      </div>

      {/* Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6052.304414455454!2d-15.9784!3d18.0895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA1JzIxLjgiTiAxNcKwNTgnNDIuMiJX!5e0!3m2!1sar!2s!4v1696165440000!5m2!1sar!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
