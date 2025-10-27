"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLang) => {
    // Remplace la langue actuelle dans le chemin
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button 
        onClick={() => changeLanguage("ar")}
        style={{ 
          padding: "0.5rem 1rem", 
          border: "1px solid white", 
          background: currentLang === "ar" ? "white" : "transparent", 
          color: currentLang === "ar" ? "#003366" : "white",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        العربية
      </button>
      <button 
        onClick={() => changeLanguage("fr")}
        style={{ 
          padding: "0.5rem 1rem", 
          border: "1px solid white", 
          background: currentLang === "fr" ? "white" : "transparent", 
          color: currentLang === "fr" ? "#003366" : "white",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Français
      </button>
    </div>
  );
}