import { jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from '@/i18n/en.json';
import { Header } from '../Header';

const renderHeader = (isDark: boolean, onToggleTheme = jest.fn()) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      <Header isDark={isDark} onToggleTheme={onToggleTheme} />
    </IntlProvider>,
  );

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggle button shows "Switch to dark mode" when light theme is active', () => {
    const { getByRole } = renderHeader(false);
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('toggle button shows "Switch to light mode" when dark theme is active', () => {
    const { getByRole } = renderHeader(true);
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('calls onToggleTheme when toggle button is clicked', () => {
    const onToggleTheme = jest.fn();
    const { getByRole } = renderHeader(false, onToggleTheme);
    fireEvent.click(getByRole('button'));
    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('renders the GitHub link', () => {
    const { getByText } = renderHeader(false);
    expect(getByText('GitHub').closest('a')).toHaveAttribute(
      'href',
      expect.stringMatching(/^https?:\/\//),
    );
  });

  it('renders the LinkedIn link', () => {
    const { getByText } = renderHeader(false);
    expect(getByText('LinkedIn').closest('a')).toHaveAttribute(
      'href',
      expect.stringMatching(/^https?:\/\//),
    );
  });

  it('nav has correct aria-label', () => {
    const { getByRole } = renderHeader(false);
    expect(getByRole('navigation')).toHaveAttribute('aria-label', 'Social links');
  });
});
