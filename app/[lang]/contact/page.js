'use client';
import { use } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./contact.css";

const translations = {
  ar: {
    headerTitle: "اتصل بنا",
    headerDesc: "نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلة التحول الرقمي",
    infoTitle: "معلومات الاتصال",
    address: "📍 العنوان: 425C+672, Av. Moktar Ould Daddah",
    email: "📧 البريد الإلكتروني: contact@anetat.mr",
    phone: "📞 الهاتف: +222 45 25 xx xx",
    hours: "🕒 الاثنين - الخميس 8h:00-17h:00 و الجمعة 8h:00-12h::ساعات العمل ",
    socialTitle: "تابعنا على وسائل التواصل الاجتماعي",
  },
  fr: {
    headerTitle: "Contactez-nous",
    headerDesc: "Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours de transformation numérique",
    infoTitle: "Informations de contact",
    address: "📍 Adresse : 425C+672, Av. Moktar Ould Daddah",
    email: "📧 Email : contact@anetat.mr",
    phone: "📞 Téléphone : +222 45 25 xx xx",
    hours: "🕒 Heures de travail : Lundi - Jeudi 8h00-17h00 et vendredi 8h00-12h00",
    socialTitle: "Suivez-nous sur les réseaux sociaux",
  }
};

export default function ContactPage({ params }) {
  const {lang} = use(params) ;
  const currentLang=lang || "ar";
  const t = translations[currentLang];

  return (
    <div className="contact-container">
      
      {/* شريط العنوان */}
      <div className="contact-header">
        <h1>{t.headerTitle}</h1>
        <p>{t.headerDesc}</p>
      </div>

      {/* معلومات الاتصال */}
      <div className="contact-section">
        <h2>{t.infoTitle}</h2>
        <div className="cards-grid">
          <div className="card"> {t.address}</div>
          <div className="card">{t.email}</div>
          <div className="card">{t.phone}</div>
          <div className="card">{t.hours}</div>
        </div>
      </div>

      {/* وسائل التواصل الاجتماعي */}
      <div className="contact-section">
        <h2>{t.socialTitle}</h2>
        <div className="social-icons">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaYoutube size={30} />
        </div>
      </div>

      {/* خريطة Google Maps */}
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