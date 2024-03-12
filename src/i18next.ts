import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';

try {
    await i18n.use(initReactI18next).init({
        resources: {
            en,
        },
        lng: 'en',
    });
} catch (error) {
    console.log(error);
}
