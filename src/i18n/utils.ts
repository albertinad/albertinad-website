import en from './en.json';

const translations: Record<string, typeof en> = { en };

export type MessageKey = keyof typeof en;

export const useTranslations = (locale: string | undefined) => {
  const msgs = translations[locale ?? 'en'] ?? translations.en;
  return (key: MessageKey): string => msgs[key] ?? en[key];
};
