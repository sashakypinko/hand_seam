import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ruTranslations} from '../../translations/ru';
import {uaTranslations} from '../../translations/ua';
import {enTranslations} from '../../translations/en';
import moment from "moment";
import {RU, UA, EN} from "./languages";

const DEFAULT_LNG = RU.code;

moment.locale(DEFAULT_LNG);

i18n
    .use(initReactI18next)
    .init({
        lng: DEFAULT_LNG,
        nsSeparator: '##',
        keySeparator: '',

        resources: {
            ru: {
                translation: ruTranslations,
            },
            ua: {
                translation: uaTranslations,
            },
            en: {
                translation: enTranslations,
            },
        },

        interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
        },

        fallbackLng: {
            default: [RU.code, UA.code, EN.code],
        },
    });

export default i18n;
