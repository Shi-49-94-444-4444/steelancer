import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('vi')}>Vietnamese</button>
    </div>
  );
}
