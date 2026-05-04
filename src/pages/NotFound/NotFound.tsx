import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import { sectionCss, codeCss, messageCss, linkCss } from './styles';

export const NotFoundPage = () => (
  <section className={sectionCss}>
    <Helmet>
      <title>404 — Page Not Found | Albertina Durante</title>
      <meta name="description" content="The page you're looking for doesn't exist." />
    </Helmet>
    <span className={codeCss}>404</span>
    <p className={messageCss}>
      <FormattedMessage id="notfound.message" />
    </p>
    <Link to="/" className={linkCss}>
      <FormattedMessage id="notfound.link" />
    </Link>
  </section>
);
