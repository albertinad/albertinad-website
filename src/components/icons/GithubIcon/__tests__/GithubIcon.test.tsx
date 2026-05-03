import { render } from '@testing-library/react';
import { GithubIcon } from '../GithubIcon';

describe('GithubIcon', () => {
  it('renders an svg element', () => {
    const { container } = render(<GithubIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('has aria-hidden set to true', () => {
    const { container } = render(<GithubIcon />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
