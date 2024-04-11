import { I18n } from 'i18n-js';

import en from './json/en.json';
import es from './json/es.json';

const translates = {
  en,
  es,
};

const i18n = new I18n(translates);
i18n.defaultLocale = 'en';
// i18n.locale = 'en';


export function changeLocale(locale: 'en' | 'es') {
  i18n.locale = locale;
  i18n.defaultLocale = locale;
}

export function translate(text: string, interpolate?: Record<string, string>): string {
  return i18n.t(text, { ...interpolate });
}