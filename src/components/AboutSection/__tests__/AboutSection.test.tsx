import { renderWithIntl } from 'tests/i18n';
import { AboutSection } from '../AboutSection';

describe('AboutSection', () => {
  it('renders the section title', () => {
    const { getByText } = renderWithIntl(<AboutSection />);
    expect(getByText('About Me')).toBeInTheDocument();
  });

  it('renders the intro paragraph content', () => {
    const { container } = renderWithIntl(<AboutSection />);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph?.textContent?.trim()).not.toBe('');
  });

  it('renders a section element', () => {
    const { container } = renderWithIntl(<AboutSection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
