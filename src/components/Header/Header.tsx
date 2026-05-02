import { cx } from 'styled-system/css'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { headerCss, headerLeftCss, navCss, socialLinkCss, toggleCss } from './styles'

type HeaderProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  return (
    <header className={headerCss}>
      <div className={headerLeftCss}>
        <nav className={navCss} aria-label="Social links">
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
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        />
      </div>
    </header>
  )
}
