import { FormattedMessage } from 'react-intl';
import { heroCss, nameCss } from './styles';

export const Hero = () => {
  return (
    <div className={heroCss}>
      <h1 className={nameCss}>
        <strong>
          <FormattedMessage id="hero.name.first" />
        </strong>{' '}
        <FormattedMessage id="hero.name.last" />
      </h1>
    </div>
  );
};
