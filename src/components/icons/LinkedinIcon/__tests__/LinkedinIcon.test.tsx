import { render } from '@testing-library/react';
import { LinkedinIcon } from '../LinkedinIcon';

describe('LinkedinIcon', () => {
  it('renders an svg element', () => {
    const { container } = render(<LinkedinIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('has aria-hidden set to true', () => {
    const { container } = render(<LinkedinIcon />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
