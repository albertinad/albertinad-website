import { render } from '@testing-library/react';
import { HeaderIconLink } from '../HeaderIconLink';

const MockIcon = () => <svg data-testid="mock-icon" />;

type Props = Parameters<typeof HeaderIconLink>[0];

const renderIconLink = (props: Partial<Props> = {}) =>
  render(
    <HeaderIconLink
      href="https://github.com/albertinad"
      icon={MockIcon}
      label="GitHub"
      className=""
      {...props}
    />,
  );

describe('HeaderIconLink', () => {
  it('renders an anchor with the correct href', () => {
    const { container } = renderIconLink();
    expect(container.querySelector('a')).toHaveAttribute('href', 'https://github.com/albertinad');
  });

  it('opens in a new tab', () => {
    const { container } = renderIconLink();
    expect(container.querySelector('a')).toHaveAttribute('target', '_blank');
  });

  it('has noopener noreferrer rel', () => {
    const { container } = renderIconLink();
    expect(container.querySelector('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the label text', () => {
    const { getByText } = renderIconLink();
    expect(getByText('GitHub')).toBeInTheDocument();
  });

  it('renders the icon component', () => {
    const { getByTestId } = renderIconLink();
    expect(getByTestId('mock-icon')).toBeInTheDocument();
  });
});
