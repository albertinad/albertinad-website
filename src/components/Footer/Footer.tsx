import { FormattedMessage } from 'react-intl';
import { footerCss, innerCss, copyCss } from './styles';

export const Footer = () => {
  return (
    <footer className={footerCss}>
      <div className={innerCss}>
        <span className={copyCss}>
          <FormattedMessage id="footer.copyright" />
        </span>
      </div>
    </footer>
  );
};
