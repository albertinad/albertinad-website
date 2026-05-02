import { useIntl } from 'react-intl';
import { cx } from 'styled-system/css';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { headerCss, headerLeftCss, navCss, socialLinkCss, toggleCss } from './styles';

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
          <a
            href="https://github.com/albertinad"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkCss}
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/albertina-durante/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkCss}
          >
            <LinkedinIcon />
            LinkedIn
          </a>
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
