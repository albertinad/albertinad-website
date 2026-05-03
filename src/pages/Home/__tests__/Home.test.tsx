import { renderWithIntl } from 'tests/i18n';
import { HomePage } from '../Home';

describe('HomePage', () => {
  it('renders without crashing', () => {
    const { container } = renderWithIntl(<HomePage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the hero name', () => {
    const { getByText } = renderWithIntl(<HomePage />);
    expect(getByText('Albertina')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    const { getByText } = renderWithIntl(<HomePage />);
    expect(getByText('About Me')).toBeInTheDocument();
  });

  it('renders the progress label', () => {
    const { getByText } = renderWithIntl(<HomePage />);
    expect(getByText('something is being built')).toBeInTheDocument();
  });
});
