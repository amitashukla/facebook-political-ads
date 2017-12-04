import i18next from "i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

let _ = null;

const i18 = i18next
  .use(Backend)
  .use(LanguageDetector);

const go = (cb) => i18.init({
  fallbackLng: 'en',
  backend: {
    loadPath: '/facebook-ads/locales/{{lng}}/{{ns}}.json'
  }
}, (err, t_) => {
  _ = t_;
  cb();
});

const t = (...args) => {
  if(!_) throw "i18n is not initialized!";
  return _.apply(_, args);
};

export { go, t };