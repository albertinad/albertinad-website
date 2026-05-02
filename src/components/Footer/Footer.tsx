import { footerCss, innerCss, copyCss } from './styles'

export const Footer = () => {
  return (
    <footer className={footerCss}>
      <div className={innerCss}>
        <span className={copyCss}>© 2026 Albertina Durante. All rights reserved.</span>
      </div>
    </footer>
  )
}
