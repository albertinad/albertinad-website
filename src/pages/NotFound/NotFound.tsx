import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { sectionCss, codeCss, messageCss, linkCss } from './styles';

export const NotFoundPage = () => (
  <section className={sectionCss}>
    <span className={codeCss}>404</span>
    <p className={messageCss}>
      <FormattedMessage id="notfound.message" />
    </p>
    <Link to="/" className={linkCss}>
      <FormattedMessage id="notfound.link" />
    </Link>
  </section>
);
