import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import messages from '@/i18n/en.json';
import { NotFoundPage } from '../NotFound';

const renderNotFound = () =>
  render(
    <MemoryRouter>
      <IntlProvider locale="en" messages={messages}>
        <NotFoundPage />
      </IntlProvider>
    </MemoryRouter>,
  );

describe('NotFoundPage', () => {
  it('renders the 404 code', () => {
    const { getByText } = renderNotFound();
    expect(getByText('404')).toBeInTheDocument();
  });

  it("renders the 'page not found' message", () => {
    const { getByText } = renderNotFound();
    expect(getByText("This page doesn't exist.")).toBeInTheDocument();
  });

  it('renders a link back to home', () => {
    const { getByText } = renderNotFound();
    expect(getByText('Go back home').closest('a')).toHaveAttribute('href', '/');
  });

  it('renders a section element', () => {
    const { container } = renderNotFound();
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
