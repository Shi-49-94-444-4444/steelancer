import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import viTranslation from './locales/vi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    fallbackLng: 'en',
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false,
    },
    // detection: {
    //   order: ['localStorage', 'navigator'],
    // },
  });

export default i18n;
