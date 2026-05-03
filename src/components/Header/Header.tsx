import { useIntl } from 'react-intl';
import { cx } from 'styled-system/css';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { headerCss, headerLeftCss, navCss, socialLinkCss, toggleCss } from './styles';
import { HeaderIconLink } from './HeaderIconLink';

type HeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  const intl = useIntl();

  return (
    <header className={headerCss}>
      <div className={headerLeftCss}>
        <nav className={navCss} aria-label={intl.formatMessage({ id: 'header.nav.ariaLabel' })}>
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
              ? intl.formatMessage({ id: 'header.theme.switchToLight' })
              : intl.formatMessage({ id: 'header.theme.switchToDark' })
          }
        />
      </div>
    </header>
  );
};
