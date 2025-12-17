import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2 border rounded-full px-3 py-1">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`text-sm font-medium ${
          i18n.language === "en" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        EN
      </button>

      <span className="text-muted-foreground">|</span>

      <button
        onClick={() => i18n.changeLanguage("ar")}
        className={`text-sm font-medium ${
          i18n.language === "ar" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        AR
      </button>
    </div>
  );
}
