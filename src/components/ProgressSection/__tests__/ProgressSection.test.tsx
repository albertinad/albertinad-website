import { renderWithIntl } from 'tests/i18n';
import { ProgressSection } from '../ProgressSection';

describe('ProgressSection', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithIntl(<ProgressSection />);

    expect(getByText('something is being built')).toBeInTheDocument();
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
