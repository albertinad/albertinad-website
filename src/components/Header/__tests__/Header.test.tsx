import { render, fireEvent } from '@testing-library/react';
import { Header } from '../Header';

const renderHeader = () => render(<Header locale="en" />);

describe('Header', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('toggle button shows "Switch to dark mode" when light theme is active', () => {
    const { getByRole } = renderHeader();
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('toggle button shows "Switch to light mode" after toggling to dark', () => {
    const { getByRole } = renderHeader();
    fireEvent.click(getByRole('button'));
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('toggles back to dark mode label after two clicks', () => {
    const { getByRole } = renderHeader();
    fireEvent.click(getByRole('button'));
    fireEvent.click(getByRole('button'));
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('renders the GitHub link', () => {
    const { getByText } = renderHeader();
    expect(getByText('GitHub').closest('a')).toHaveAttribute(
      'href',
      expect.stringMatching(/^https?:\/\//),
    );
  });

  it('renders the LinkedIn link', () => {
    const { getByText } = renderHeader();
    expect(getByText('LinkedIn').closest('a')).toHaveAttribute(
      'href',
      expect.stringMatching(/^https?:\/\//),
    );
  });

  it('nav has correct aria-label', () => {
    const { getByRole } = renderHeader();
    expect(getByRole('navigation')).toHaveAttribute('aria-label', 'Social links');
  });
});
