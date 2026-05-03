import { FormattedMessage, useIntl } from 'react-intl';
import { SectionHeader } from '../SectionHeader';
import { sectionCss, bodyCss, textCss } from './styles';

export const AboutSection = () => {
  const intl = useIntl();

  return (
    <section className={sectionCss}>
      <SectionHeader title={intl.formatMessage({ id: 'about.section.title' })} />
      <div className={bodyCss}>
        <p className={textCss}>
          <FormattedMessage id="about.body.intro" />
          <br />
          <br />
          <FormattedMessage id="about.body.p2" />
        </p>
      </div>
    </section>
  );
};
