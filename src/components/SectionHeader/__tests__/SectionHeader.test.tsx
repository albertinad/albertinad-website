import { render } from '@testing-library/react';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders the title prop', () => {
    const { getByText } = render(<SectionHeader title="About Me" />);
    expect(getByText('About Me')).toBeInTheDocument();
  });
});
