"use client";
// import { log } from "console";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({currentLang}) {
  const router = useRouter();
  const pathname = usePathname();
//  const newLang=currentLang==="ar" ?"fr" :"ar";     
    const changeLanguage = (lang) => {
    // إزالة أي لغة موجودة في البداية (/ar أو /fr)
    const cleanPath = pathname.replace(/^\/(ar|fr)/, "");
    // إنشاء الرابط الجديد مع اللغة المطلوبة
   // console.log(`${cleanPath} === > clean path`);
    
    const newPath = `/${lang}${cleanPath}`;
    //console.log(`${newPath} === > new path`);
    router.push(newPath);
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
}