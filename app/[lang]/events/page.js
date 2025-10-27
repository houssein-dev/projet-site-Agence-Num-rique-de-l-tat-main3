"use client";
import { use } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// الترجمة
const translations = {
  ar: {
    title: "فعاليات الوكالة",
    btnDetails: "عرض التفاصيل",
    events: [
      {
        id: 1,
        title: "فعالية إطلاق البوابة الوطنية",
        category: "إطلاق",
        date: "2024-03-15",
        description:
          "تم تنظيم فعالية إطلاق البوابة الوطنية التي تهدف إلى تسهيل الوصول إلى جميع الخدمات الحكومية الإلكترونية من خلال منصة موحدة ومتطورة.",
        image: "/9.jpg",
      },
      {
        id: 2,
        title: "ورشة تدريبية حول التحول الرقمي",
        category: "تدريب",
        date: "2024-03-10",
        description:
          "نُظمت ورشة تدريبية شاملة لتطوير قدرات الموظفين في استخدام التقنيات الحديثة وأدوات التحول الرقمي.",
        image: "/10.jpg",
      },
      {
        id: 3,
        title: "شراكة مع الجامعات لتطوير الكفاءات الرقمية",
        category: "شراكات",
        date: "2024-03-05",
        description:
          "تم توقيع اتفاقيات شراكة استراتيجية مع عدة جامعات وطنية لتطوير البرامج الأكاديمية المتخصصة في المجال الرقمي.",
        image: "/11.jpg",
      },
      {
        id: 4,
        title: "فعالية عرض مشروع الهوية الرقمية",
        category: "مشاريع",
        date: "2024-02-28",
        description:
          "تم تقديم مشروع الهوية الرقمية الموحدة الذي سيسهل على المواطنين الوصول لجميع الخدمات الحكومية برقم موحد.",
        image: "/12.jpg",
      },
    ],
  },
  fr: {
    title: "Événements de l'agence",
    btnDetails: "Voir les détails",
    events: [
      {
        id: 1,
        title: "Lancement du Portail National",
        category: "Lancement",
        date: "2024-03-15",
        description:
          "Événement de lancement du portail national visant à faciliter l'accès à tous les services publics numériques via une plateforme unifiée et moderne.",
        image: "/9.jpg",
      },
      {
        id: 2,
        title: "Atelier de formation sur la transformation numérique",
        category: "Formation",
        date: "2024-03-10",
        description:
          "Un atelier de formation complet a été organisé pour développer les compétences des employés dans l'utilisation des technologies modernes.",
        image: "/10.jpg",
      },
      {
        id: 3,
        title: "Partenariat avec les universités pour développer les compétences numériques",
        category: "Partenariats",
        date: "2024-03-05",
        description:
          "Des accords stratégiques ont été signés avec plusieurs universités nationales pour développer des programmes académiques spécialisés dans le domaine numérique.",
        image: "/11.jpg",
      },
      {
        id: 4,
        title: "Présentation du projet d'identité numérique",
        category: "Projets",
        date: "2024-02-28",
        description:
          "Présentation du projet d'identité numérique unifiée qui facilitera l'accès des citoyens à tous les services publics avec un identifiant unique.",
        image: "/12.jpg",
      },
    ],
  },
};

export default function EventsPage({ params }) {
  const { lang } = use(params);
  const currentLang = lang || "ar";
  const t = translations[currentLang];

  const images = ["/17.jpg", "/16.jpg", "/13.jpg", "/14.jpg", "/15.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="events">
      <h1>{t.title}</h1>

      {/* شبكة البطاقات */}
      <div className="grid">
        {t.events.map((e) => (
          <article className="card" key={e.id}>
            <div className="thumb">
              <Image
                src={e.image}
                alt={e.title}
                width={800}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="body">
              <h2 className="title">{e.title}</h2>
              <div className="meta">
                <span className="badge">{e.category}</span>
                <span className="date">{e.date}</span>
              </div>
              <p className="desc">{e.description}</p>
              <div className="cta">
                <Link href={`/${lang}/events/${e.id}`} className="btn">
                  {t.btnDetails}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* معرض الصور */}
      <div className="gallery">
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "500px", 
          overflow: "hidden", 
          borderRadius: "10px" 
        }}>
          <Image
            src={images[current]}
            alt="معرض الصور"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
          />
        </div>
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .events {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          background-color: #e6e6e6;
          padding: 1rem;
          border-radius: 8px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        }
        .thumb {
          line-height: 0;
        }
        .body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          height: 100%;
        }
        .title {
          margin: 0;
          font-size: 1.1rem;
        }
        .meta {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: #555;
        }
        .badge {
          background: #eef4ff;
          border: 1px solid #d6e3ff;
          padding: 0.15rem 0.5rem;
          border-radius: 6px;
        }
        .date {
          opacity: 0.8;
        }
        .desc {
          color: #444;
          line-height: 1.6;
          margin: 0.25rem 0 0.75rem;
          flex: 1;
        }
        .cta {
          text-align: start;
        }
        .btn {
          display: inline-block;
          background: #0059c8;
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .btn:hover {
          background: #003f8a;
        }

        .gallery {
          margin-top: 3rem;
          text-align: center;
          position: relative;
          max-width: 1100px;
          margin-inline: auto;
        }
        .dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 5px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: lightgray;
          cursor: pointer;
        }
        .dot.active {
          background: blue;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}