import { useTranslations } from '../utils';

describe('useTranslations', () => {
  it('returns translation for a known key in the default locale', () => {
    const translate = useTranslations('en');
    expect(translate('hero.name.first')).toBe('Albertina');
  });

  it('falls back to en when locale is undefined', () => {
    const translate = useTranslations(undefined);
    expect(translate('hero.name.first')).toBe('Albertina');
  });

  it('falls back to en for an unknown locale', () => {
    const translate = useTranslations('fr');
    expect(translate('hero.name.first')).toBe('Albertina');
  });

  it('returns all expected keys', () => {
    const translate = useTranslations('en');
    expect(translate('footer.copyright')).toContain('Albertina Durante');
    expect(translate('header.theme.switchToDark')).toBe('Switch to dark mode');
    expect(translate('header.theme.switchToLight')).toBe('Switch to light mode');
  });
});
