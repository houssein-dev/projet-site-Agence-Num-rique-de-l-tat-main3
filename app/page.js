"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("./1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === "./2.jpg" ? "./1.jpg" : "./2.jpg"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* الصورة المتغيرة */}
      <div style={{
    // position: relative;
    textAlign: 'center',
    /* padding: 1rem; */
    border: '1px solid #77777730',
    width: '100%',
    background: '#f9f9f9',
    position: 'relative',
    borderRadius:' 7px'}}>
        <Image
          src={currentImage}
          alt=""
          width={1200}
          height={776}
          style={{ width: "70%", height: "40%" }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "2rem",
          }}
        >
          الوكالة الرقمية للدولة
        </h1>
        <h3
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
          }}
        >
          قيادة التحول الرقمي نحو مستقبل متطور ومبتكر
        </h3>
      </div>

      {/* القسم الثاني مع إطار ومسافة */}
  <div
  style={{
    marginTop: "2rem",
    // padding: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    // maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: '1rem'
  }}
>
  <section
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "1.5rem",
      flexWrap: "wrap", // 👈 هذا يمنع خروج المحتوى
    }}
  >
    {/* الصورة */}
    <img
      src="./5.jpg"
      alt=""
      width="400"
      height="300"
      style={{ borderRadius: "8px", flexShrink: 0 }}
    />

    {/* النص + البطاقات */}
    <div style={{ flex: 1, minWidth: "250px" }}>
      <h1 style={{ marginBottom: "1rem", color: "#333" }}>
        عرض تقديمي للوكالة الرقمية للدولة
      </h1>
      <p style={{ lineHeight: "1.8", color: "#444" }}>
        تُعد الوكالة الرقمية للدولة المؤسسة الرائدة في مجال التحول الرقمي في موريتانيا،
        حيث تسعى إلى تطوير وتحديث البنية التحتية الرقمية وتعزيز الخدمات الإلكترونية
        الحكومية لخدمة المواطنين والمؤسسات على أكمل وجه.
        <br />
        <br />
        نعمل على تنفيذ استراتيجية شاملة للتحول الرقمي تشمل جميع القطاعات الحكومية، مع
        التركيز على الابتكار والجودة في تقديم الخدمات الرقمية المتطورة.
      </p>

      {/* البطاقات تحت النص */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // 👈 يخليها تتوزع كويس في الشاشات الصغيرة
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
          <h2 style={{ color: "#c0392b", margin: 0 }}>+1M</h2>
          <p style={{ margin: 0 }}>مستفيد</p>
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
          <h2 style={{ color: "#27ae60", margin: 0 }}>+25</h2>
          <p style={{ margin: 0 }}>وزارة شريكة</p>
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
          <h2 style={{ color: "#2980b9", margin: 0 }}>+50</h2>
          <p style={{ margin: 0 }}>مشروع رقمي</p>
        </div>
      </div>
    </div>
  </section>
</div>
      
<div
  style={{
    marginTop: "3rem",
    // padding: "1.5rem",
    // maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  {/* العنوان */}
  <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>آخر الأخبار</h2>

  {/* شبكة البطاقات */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
    }}
  >
    {/* بطاقة 1 */}
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img src="./8.jpg" alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>ورشات تدريبية للموظفين</h3>
        <p style={{ margin: 0, color: "#555" }}>
          تنظيم ورشات تدريبية لرفع الكفاءات الرقمية لدى موظفي الإدارات الحكومية.
        </p>
      </div>
    </div>

    {/* بطاقة 2 */}
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img src="./7.jpg" alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>شراكة مع وزارات الدولة</h3>
        <p style={{ margin: 0, color: "#555" }}>
          وقعت الوكالة الرقمية اتفاقيات تعاون مع عدة وزارات لتعزيز التحول الرقمي.
        </p>
      </div>
    </div>

    {/* بطاقة 3 */}
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img src="./6.jpg" alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>إطلاق منصة حكومية جديدة</h3>
        <p style={{ margin: 0, color: "#555" }}>
          تم إطلاق منصة حكومية جديدة لتسهيل الوصول إلى الخدمات الرقمية للمواطنين.
        </p>
      </div>
    </div>
  </div>
</div>      
    </>
  );
}
