import { createContext, useContext } from "react";

export const LanguageContext = createContext({
  language: "vi",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
