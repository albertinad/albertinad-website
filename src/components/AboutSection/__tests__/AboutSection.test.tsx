import { renderWithIntl } from 'tests/i18n';
import { AboutSection } from '../AboutSection';

describe('AboutSection', () => {
  it('renders the section title', () => {
    const { getByText } = renderWithIntl(<AboutSection />);
    expect(getByText('About Me')).toBeInTheDocument();
  });

  // TODO: update this to check that content exists and is not empty, but is not the exact content, since it might change
  it('renders the intro paragraph content', () => {
    const { getByText } = renderWithIntl(<AboutSection />);
    expect(getByText(/Staff Software Engineer/)).toBeInTheDocument();
  });

  it('renders a section element', () => {
    const { container } = renderWithIntl(<AboutSection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
