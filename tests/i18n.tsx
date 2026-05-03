import { render, type RenderResult } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from '@/i18n/en.json';

export const renderWithIntl = (ui: React.ReactElement): RenderResult =>
  render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>,
  );
