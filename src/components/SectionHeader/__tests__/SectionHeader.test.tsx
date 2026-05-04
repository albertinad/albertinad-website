import { render } from '@testing-library/react';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders the title prop', () => {
    const { getByText } = render(<SectionHeader title="About Me" />);
    expect(getByText('About Me')).toBeInTheDocument();
  });

  it('renders title as an h2 element', () => {
    const { container } = render(<SectionHeader title="About Me" />);
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h2')).toHaveTextContent('About Me');
  });
});
