import { useIntl } from 'react-intl'
import { footerCss, innerCss, copyCss } from './styles'

export const Footer = () => {
  const intl = useIntl()
  return (
    <footer className={footerCss}>
      <div className={innerCss}>
        <span className={copyCss}>{intl.formatMessage({ id: 'footer.copyright' })}</span>
      </div>
    </footer>
  )
}
