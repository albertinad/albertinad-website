import { useIntl } from 'react-intl';
import { heroCss, nameCss } from './styles';

export const Hero = () => {
  const intl = useIntl();
  return (
    <div className={heroCss}>
      <h1 className={nameCss}>
        <strong>{intl.formatMessage({ id: 'hero.name.first' })}</strong>{' '}
        {intl.formatMessage({ id: 'hero.name.last' })}
      </h1>
    </div>
  );
};
