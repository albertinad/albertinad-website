import { render } from '@testing-library/react';
import { HeaderIconLink } from '../HeaderIconLink';

const MockIcon = () => <svg data-testid="mock-icon" />;

describe('HeaderIconLink', () => {
  /*
    TODO: extract const { container } = render(
      <HeaderIconLink href="https://github.com/albertinad" icon={MockIcon} label="GitHub" className="" />,
    ); into a reusable function that accepts props as params and apply default ones like href, then refactor usage within this test to prevent duplications and embrace DRY pattern
  */
  it('renders an anchor with the correct href', () => {
    const { container } = render(
      <HeaderIconLink
        href="https://github.com/albertinad"
        icon={MockIcon}
        label="GitHub"
        className=""
      />,
    );
    expect(container.querySelector('a')).toHaveAttribute('href', 'https://github.com/albertinad');
  });

  it('opens in a new tab', () => {
    const { container } = render(
      <HeaderIconLink
        href="https://github.com/albertinad"
        icon={MockIcon}
        label="GitHub"
        className=""
      />,
    );
    expect(container.querySelector('a')).toHaveAttribute('target', '_blank');
  });

  it('has noopener noreferrer rel', () => {
    const { container } = render(
      <HeaderIconLink
        href="https://github.com/albertinad"
        icon={MockIcon}
        label="GitHub"
        className=""
      />,
    );
    expect(container.querySelector('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the label text', () => {
    const { getByText } = render(
      <HeaderIconLink
        href="https://github.com/albertinad"
        icon={MockIcon}
        label="GitHub"
        className=""
      />,
    );
    expect(getByText('GitHub')).toBeInTheDocument();
  });

  it('renders the icon component', () => {
    const { getByTestId } = render(
      <HeaderIconLink
        href="https://github.com/albertinad"
        icon={MockIcon}
        label="GitHub"
        className=""
      />,
    );
    expect(getByTestId('mock-icon')).toBeInTheDocument();
  });
});
