import { renderWithIntl } from 'tests/i18n';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders the copyright text', () => {
    const { getByText } = renderWithIntl(<Footer />);
    expect(getByText('© 2026 Albertina Durante. All rights reserved.')).toBeInTheDocument();
  });

  it('renders a footer element', () => {
    const { container } = renderWithIntl(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});
