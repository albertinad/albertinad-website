import { useState, useEffect } from 'react';
import { cx } from 'styled-system/css';
import { AvailableThemes } from '@/typings';
import { useTranslations } from '@/i18n/utils';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { headerCss, headerLeftCss, navCss, socialLinkCss, toggleCss } from './styles';
import { HeaderIconLink } from './HeaderIconLink';

type HeaderProps = {
  locale: string;
};

export const Header = ({ locale }: HeaderProps) => {
  const translate = useTranslations(locale);

  const [isDark, setIsDark] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('theme') === AvailableThemes.DARK,
  );

  useEffect(() => {
    document.body.className = isDark ? AvailableThemes.DARK : AvailableThemes.LIGHT;
  }, [isDark]);

  const onToggleTheme = () => {
    const newTheme = isDark ? AvailableThemes.LIGHT : AvailableThemes.DARK;
    setIsDark(!isDark);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={headerCss}>
      <div className={headerLeftCss}>
        <nav className={navCss} aria-label={translate('header.nav.ariaLabel')}>
          <HeaderIconLink
            href="https://github.com/albertinad"
            icon={GithubIcon}
            label="GitHub"
            className={socialLinkCss}
          />
          <HeaderIconLink
            href="https://linkedin.com/in/albertina-durante/"
            icon={LinkedinIcon}
            label="LinkedIn"
            className={socialLinkCss}
          />
        </nav>
        <button
          className={cx(toggleCss, isDark ? 'dark-on' : '')}
          onClick={onToggleTheme}
          aria-label={
            isDark
              ? translate('header.theme.switchToLight')
              : translate('header.theme.switchToDark')
          }
        />
      </div>
    </header>
  );
};
